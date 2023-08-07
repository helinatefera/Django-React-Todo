from  django.urls import path
from .views import TaskList
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'api/tasks',TaskList,'proApp')
urlpatterns = router.urls

