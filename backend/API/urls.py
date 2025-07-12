from django.urls import path, re_path, include
from .views import ProjectsApiView, PostApiView, ToolsApiView, PostDetailApiView
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('api/projects/', ProjectsApiView.as_view()),
    path('api/post/', PostApiView.as_view()),
    path('api/tools/', ToolsApiView.as_view()),
    path('ckeditor5/', include('django_ckeditor_5.urls')),
    path('api/post/<slug:slug>/', PostDetailApiView.as_view())
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)