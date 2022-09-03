from django.urls import include, path
from rest_framework import routers
from accounts import views

router = routers.DefaultRouter()

router.register(
    r'list', views.UserProfileViewSet, basename='user_list'
)

router.register(
    r'', views.UserRegistration, basename='user_registration'
)

urlpatterns = [
    path('user/', include(router.urls))
]