from django.urls import path
from users import views

urlpatterns = [
    path(
        route='',
        view=views.index,
        name='index'
    ),
    path(
        route='login',
        view=views.login_view,
        name='login'
    ),
    path(
        route='logout',
        view=views.LogoutView.as_view(),
        name='logout'
    ),
    path(
        route='register',
        view=views.register,
        name='register'
    ),
    path(
        route='profile',
        view=views.UpdateProfileView.as_view(),
        name='update_profile'
    ),

]
