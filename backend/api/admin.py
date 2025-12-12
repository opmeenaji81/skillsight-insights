from django.contrib import admin

# Register your models here.
# backend/api/admin.py
from .models import Job, Skill

@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ("name",)
    search_fields = ("name",)

@admin.register(Job)
class JobAdmin(admin.ModelAdmin):
    list_display = ("title", "company", "location", "salary_text", "created_at")
    search_fields = ("title", "company", "location", "description")
    list_filter = ("location",)
    filter_horizontal = ("skills",)
