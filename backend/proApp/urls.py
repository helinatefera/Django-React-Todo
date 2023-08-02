from  django.urls import path
from . import views

urlpatterns = [
    path("task",views.task_show),
    path('task/<int:pk>',views.taskCRUD)
]