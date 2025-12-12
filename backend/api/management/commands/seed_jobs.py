# backend/api/management/commands/seed_jobs.py
import csv
from datetime import datetime
from django.core.management.base import BaseCommand, CommandError
from django.db import transaction
from api.models import Job, Skill
from api.nlp_utils import extract_all  # <- NLP integration

class Command(BaseCommand):
    help = "Seed jobs from a CSV file. Usage: python manage.py seed_jobs <csv-path>"

    def add_arguments(self, parser):
        parser.add_argument('csv_path', type=str, help='Path to jobs CSV file')

    def handle(self, *args, **options):
        csv_path = options.get('csv_path')
        if not csv_path:
            raise CommandError("Please provide a CSV file path. Usage: python manage.py seed_jobs <csv-path>")

        created_jobs = 0
        try:
            with open(csv_path, newline='', encoding='utf-8') as f:
                reader = csv.DictReader(f)
                with transaction.atomic():
                    for row in reader:
                        title = row.get('title') or 'Untitled'
                        company = row.get('company') or None
                        location = row.get('location') or None
                        salary_text = row.get('salary_text') or None
                        description = row.get('description') or None
                        url = row.get('url') or None
                        posted_date_raw = row.get('posted_date') or None
                        posted_date = None
                        if posted_date_raw:
                            for fmt in ("%Y-%m-%d", "%d-%m-%Y", "%d/%m/%Y"):
                                try:
                                    posted_date = datetime.strptime(posted_date_raw.strip(), fmt).date()
                                    break
                                except Exception:
                                    posted_date = None

                        # Run NLP on description (will clean, extract skills, experience, salary)
                        nlp_result = extract_all(description or "")

                        # create job using CSV fields where provided, else use NLP outputs
                        job = Job.objects.create(
                            title=title.strip(),
                            company=company.strip() if company else None,
                            location=location.strip() if location else None,
                            salary_text=(salary_text.strip() if salary_text else nlp_result.get("salary_text")),
                            description=(description.strip() if description else nlp_result.get("text")),
                            url=url.strip() if url else None,
                            posted_date=posted_date
                        )

                        # update salary_min/max from NLP if available (prefer parsed values)
                        if nlp_result.get("salary_min") is not None:
                            job.salary_min = nlp_result["salary_min"]
                        if nlp_result.get("salary_max") is not None:
                            job.salary_max = nlp_result["salary_max"]
                        job.save()

                        # add normalized skills from NLP result (if any), else fallback to CSV skills column
                        skills_raw = row.get('skills') or ""
                        skills_list = nlp_result.get("skills") or []
                        if not skills_list and skills_raw:
                            skills_list = [s.strip().lower() for s in skills_raw.replace(',', ';').split(';') if s.strip()]

                        for sname in skills_list:
                            skill_obj, _ = Skill.objects.get_or_create(name=sname)
                            job.skills.add(skill_obj)

                        created_jobs += 1

            self.stdout.write(self.style.SUCCESS(f"Seed complete. Created {created_jobs} jobs."))
        except FileNotFoundError:
            raise CommandError(f"CSV file not found: {csv_path}")
        except Exception as e:
            raise CommandError(f"Error during seeding: {e}")
