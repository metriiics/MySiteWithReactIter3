from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Projects, Post
from .serializers import ProjectsSerializer, PostSerializer

class ProjectsApiView(APIView):
    def get(self, request):
        data = Projects.objects.all()
        serializers = ProjectsSerializer(data, context={'request': request}, many=True)
        return Response(serializers.data)

class PostApiView(APIView):
    def get(self, request):
        data = Post.objects.all()
        serializers = PostSerializer(data, context={'request': request}, many=True)
        return Response(serializers.data)