from django.urls import path, re_path
from .views import ProjectsApiView, PostApiView
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('api/projects/', ProjectsApiView.as_view()),
    path('api/post/', PostApiView.as_view()),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)