from django.urls import path
from . import views

urlpatterns = [
    # Add your URL patterns here
    path('create_space/', views.create_space),
]