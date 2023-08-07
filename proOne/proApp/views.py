# from django.shortcuts import render,get_object_or_404
# from .models import Task
# from rest_framework.response import Response
# from rest_framework.decorators import api_view
# from .serializers import TaskSerializers
# from rest_framework import status 

# # Create your views here.
# @api_view(["GET","POST"])
# def task_show(request):
#     if request.method == "GET":
#         task = Task.objects.all()
#         serializer = TaskSerializers(task,many = True)
#         return Response(serializer.data)
#     elif request.method == "POST":
#         serializer =Task(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data,status=status.HTTP_201_creared)
#         return Response(serializer.erorr,status=status.HTTP_400_Bad_request)
# @api_view(["GET","PATCH","PUT","DELETE"])
# def taskCRUD(request,pk):
#     task = get_object_or_404(Task,id=pk)
#     if request.method == "GET":
#         serializer = TaskSerializers(task)
#         return Response(serializer.data)
#     elif request.method=="PUT":
#         serializer = TaskSerializers(task,data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.error,status=status.HTTP_400_BAD_REQUEST)
#     elif request.method == "DELETE":
#         task.delete()
#         return Response(status=status.HTTP_204_NO_CONENT)
    


from django.shortcuts import render
from .serializers import TaskSerializers
from rest_framework  import viewsets
from .models import Task

class TaskList(viewsets.ModelViewSet):
    serializer_class = TaskSerializers
    queryset = Task.objects.all()