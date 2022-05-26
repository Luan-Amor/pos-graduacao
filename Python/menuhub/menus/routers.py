from rest_framework import routers

from .views import RestaurantsViewSet

router = routers.DefaultRouter()
router.register(r"api/v1/restaurantes", RestaurantsViewSet)