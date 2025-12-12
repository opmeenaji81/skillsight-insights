# backend/api/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path("health/", views.health),
    path("jobs/", views.jobs),
    path("skills/", views.skills),
    path("summary/", views.summary),
    path("analyze/", views.analyze),

]
