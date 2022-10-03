from django.shortcuts import render
from django.views.generic.edit import CreateView
from .forms import CustomUserCreationForm
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated


@login_required
def home(request):
    return render(request, 'index.html')


class HomeView(APIView):
    permissions_classes = [IsAuthenticated]
    def get(self, request, *args, **kwargs):
        return Response({
          "email": request.user.email,
        })


class SignupView(CreateView):
    form_class = CustomUserCreationForm
    template_name = 'registration/signup.html'
    success_url = '/accounts/login'
