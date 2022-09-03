from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import action

from accounts.models import userProfile
from accounts.serializer import userSerializer


# Create your views here.

class UserProfileViewSet(viewsets.ViewSet):
    def list(self, request):
        query = userProfile.objects.all()
        serializer = userSerializer(query, many = True)

        return Response(data=serializer.data, status=status.HTTP_200_OK)

class UserRegistration(viewsets.ViewSet):

    @action(detail=False, methods=['POST'])
    def registration(self, request, pk=None):
        return Response(status=status.HTTP_100_CONTINUE)

    @action(detail=False, methods=['POST'])
    def authentication(self, request, pk=None):
        return Response(status=status.HTTP_101_SWITCHING_PROTOCOLS)