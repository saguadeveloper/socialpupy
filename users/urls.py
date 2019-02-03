from django.urls import path
from users import views

urlpatterns = [
    path(
        route='',
        view=views.LoginView.as_view(),
        name='index'
    )

]