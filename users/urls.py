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
        route='register',
        view=views.register,
        name='register'
    ),

]
