from django.contrib import admin
from django.urls import path
from posts import views

urlpatterns = [
    path(
        route='',
        view=views.DashboardView.as_view(),
        name='components'
    ),
    path(
        route='search',
        view=views.search_view,
        name='search'
    ),
    path(
        route='create',
        view=views.create_view,
        name='create'
    ),
]
