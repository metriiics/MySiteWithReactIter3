from django.urls import path, re_path
from .views import ProjectsApiView

urlpatterns = [
    path('api/projects/', ProjectsApiView.as_view()),
]