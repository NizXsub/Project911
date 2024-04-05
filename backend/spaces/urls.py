from django.urls import path
from . import views

urlpatterns = [
    # Add your URL patterns here
    path('create_space/', views.create_space),
    path('add_member/<uuid:spaceId>/<str:member_name>/', views.add_member),
    path('change_to_teacher/<uuid:spaceId>/<str:member_name>/', views.add_member),
    path('all_spaces/', views.spaces),
    path('notice/<uuid:spaceId>/', views.notice_manager),
    path('', views.my_spaces),
]



