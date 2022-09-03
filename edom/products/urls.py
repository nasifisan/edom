from django.urls import include, path
from rest_framework import routers
from products import views

router = routers.DefaultRouter()

router.register(
    r'product_list', views.ProductViewSet, basename='product_list'
)


urlpatterns = [
    path('', include(router.urls))
]