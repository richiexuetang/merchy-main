from django.shortcuts import render
from django.views.generic.edit import CreateView
from .forms import CustomUserCreationForm
from django_nextjs.render import render_nextjs_page_sync


# def index(request):
#     return render_nextjs_page_sync(request)


def home(request):
    return render(request, 'index.html')


class SignupView(CreateView):
    form_class = CustomUserCreationForm
    template_name = 'registration/signup.html'
    success_url = '/accounts/login'
