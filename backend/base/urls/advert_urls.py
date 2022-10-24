from ..views import advert_views as views
from django.urls import path, include

urlpatterns = [
    path('test/', views.getRoutes, name="routes"),
    path('', views.getRoutes, name="adverts"),
    path('<str:pk>', views.getRoutes, name="adverts"),
]
