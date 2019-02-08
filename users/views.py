# Django
from django.shortcuts import render, redirect
from django.contrib.auth import views as auth_views, authenticate, login
from django.views.generic import UpdateView
from django.urls import reverse_lazy
import os
from django.conf import settings

from users.form import RegisterForm
from users.models import Profile


# Create your views here.
def index(request):
    return render(request, 'index.html', {'system_name': settings.SYSTEM_NAME})


# class LoginView(auth_views.LoginView):
#     template_name = 'users/login.html'


def login_view(request):
    """Login view."""
    if request.method == 'POST':
        username = request.POST['email']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user:
            login(request, user)
            return redirect('posts:components')
        else:
            return render(request, 'users/login.html', {'error': 'Invalid username/password'})
    return render(request, 'users/login.html')


def register(request):
    if request.method == 'POST':
        form = RegisterForm(request.POST)
        if form.is_valid():
            form .save()
            return redirect('users:login')
    else:
        form = RegisterForm()
    return render(request, 'users/register.html', context={
        'form': form
    })

# class RegisterView(FormView):
#     template_name = "users/register.html"
#     form_class = RegisterForm
#     success_url = reverse_lazy('users:login')
#
#     def form_valid(self, form):
#         form.save()
#         return super().form_valid(form)


class LogoutView(auth_views.LogoutView):
    pass


class UpdateProfileView(UpdateView):
    template_name = 'dashboard/includes/profile.html'
    model = Profile
    fields = ['notification', 'phone_number', 'description', 'photo']
    success_url = reverse_lazy('posts:components')

    def get_object(self):
        return self.request.user.profile
