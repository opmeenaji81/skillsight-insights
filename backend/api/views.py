# backend/api/views.py
import json
from django.http import JsonResponse, HttpResponseBadRequest, HttpResponse
from django.views.decorators.http import require_http_methods
from django.views.decorators.csrf import csrf_exempt
from .models import Job, Skill
from api.nlp_utils import extract_all
from django.utils.dateparse import parse_date

# Simple health endpoint
@require_http_methods(["GET"])
def health(request):
    return JsonResponse({"status": "ok", "service": "SkillSight API"})


# Jobs list + create with dedupe & validation
@csrf_exempt
@require_http_methods(["GET", "POST"])
def jobs(request):
    if request.method == "GET":
        data = list(Job.objects.values(
            "id", "title", "company", "location", "salary_text", "salary_min", "salary_max", "created_at"
        ))
        return JsonResponse({"jobs": data})

    # -------- POST flow --------
    try:
        payload = json.loads(request.body.decode("utf-8"))
    except Exception:
        return HttpResponseBadRequest(json.dumps({"error": "Invalid JSON payload"}), content_type="application/json")

    # minimal validation
    title = (payload.get("title") or "").strip()
    if not title:
        return HttpResponseBadRequest(json.dumps({"error": "title is required"}), content_type="application/json")

    company = (payload.get("company") or "").strip() or None
    location = (payload.get("location") or "").strip() or None
    description = payload.get("description", "") or ""
    url = (payload.get("url") or "").strip() or None
    posted_date = payload.get("posted_date")  # optional iso date string

    # Basic dedupe strategy:
    if url:
        if Job.objects.filter(url=url).exists():
            return JsonResponse({"status": "duplicate", "reason": "url"}, status=409)
    else:
        q = Job.objects.filter(title__iexact=title)
        if company:
            q = q.filter(company__iexact=company)
        if location:
            q = q.filter(location__iexact=location)
        if q.exists():
            return JsonResponse({"status": "duplicate", "reason": "title+company+location"}, status=409)

    # run NLP for extraction and normalization
    nlp_out = extract_all(description or "")

    # create Job (prefer explicit payload fields, fallback to NLP)
    job = Job.objects.create(
        title=title,
        company=company,
        location=location,
        salary_text=payload.get("salary_text") or nlp_out.get("salary_text"),
        description=(description.strip() or nlp_out.get("text")),
        url=url,
        posted_date=parse_date(posted_date) if posted_date else None
    )

    # populate parsed salary if available
    if nlp_out.get("salary_min") is not None:
        job.salary_min = nlp_out["salary_min"]
    if nlp_out.get("salary_max") is not None:
        job.salary_max = nlp_out["salary_max"]
    job.save()

    # attach skills
    skills = nlp_out.get("skills") or payload.get("skills", [])
    for s in skills:
        sname = s.strip().lower()
        if not sname:
            continue
        skill_obj, _ = Skill.objects.get_or_create(name=sname)
        job.skills.add(skill_obj)

    return JsonResponse({"status": "created", "job_id": job.id}, status=201)


# ---- New endpoint: list skills ----
@require_http_methods(["GET"])
def skills(request):
    """
    Returns a list of skills (id and name). Useful for frontend filters.
    """
    data = list(Skill.objects.values("id", "name").order_by("name"))
    return JsonResponse({"skills": data})


# ---- New endpoint: summary ----
@require_http_methods(["GET"])
def summary(request):
    """
    Returns simple aggregate counts used in dashboard:
      - total_jobs
      - total_skills
    """
    total_jobs = Job.objects.count()
    total_skills = Skill.objects.count()
    return JsonResponse({
        "total_jobs": total_jobs,
        "total_skills": total_skills
    })

@require_http_methods(["GET"])
def skills(request):
    data = list(Skill.objects.values("id", "name"))
    return JsonResponse({"skills": data})

@csrf_exempt
@require_http_methods(["POST"])
def analyze(request):
    try:
        payload = json.loads(request.body.decode("utf-8"))
        text = payload.get("text", "")
        if not text.strip():
            return HttpResponseBadRequest(
                json.dumps({"error": "text field is required"}),
                content_type="application/json"
            )
    except Exception:
        return HttpResponseBadRequest(
            json.dumps({"error": "Invalid JSON"}),
            content_type="application/json"
        )

    from api.nlp_utils import extract_all
    result = extract_all(text)

    return JsonResponse({"analysis": result})
