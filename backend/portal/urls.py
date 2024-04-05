from django.urls import path
from . import views

urlpatterns = [
    path('<uuid:spaceId>/create_portal/', views.create_portal, name='create_portal'),
    path('<uuid:spaceId>/<uuid:portalId>/submit/', views.submit_portal)
    
]
