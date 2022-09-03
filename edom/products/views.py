from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action

# Create your views here.

class ProductViewSet(viewsets.ViewSet):
    def list(self, request):
        return Response('Okay')