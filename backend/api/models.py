
# Create your models here.
# backend/api/models.py
from django.db import models

class Skill(models.Model):
    name = models.CharField(max_length=120, unique=True)

    def __str__(self):
        return self.name

class Job(models.Model):
    title = models.CharField(max_length=300)
    company = models.CharField(max_length=200, blank=True, null=True)
    location = models.CharField(max_length=150, blank=True, null=True)
    salary_text = models.CharField(max_length=120, blank=True, null=True)
    salary_min = models.FloatField(blank=True, null=True)
    salary_max = models.FloatField(blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    url = models.URLField(max_length=500, blank=True, null=True)
    posted_date = models.DateField(blank=True, null=True)
    skills = models.ManyToManyField(Skill, related_name="jobs", blank=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.title} @ {self.company or 'Unknown'}"
