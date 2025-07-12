from django.contrib import admin
from .models import Projects, Post, Tools
from django_ckeditor_5.widgets import CKEditor5Widget
from django import forms

class PostAdminForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = '__all__'
        widgets = {
            'post_content_ru': CKEditor5Widget(config_name='extends'),
            'post_content_en': CKEditor5Widget(config_name='extends'),
        }

@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    form = PostAdminForm

admin.site.register(Projects)
admin.site.register(Tools)
