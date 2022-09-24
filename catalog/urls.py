from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('books/', views.books, name='books'),
    path('book/<str:pk>/', views.book_id, name='book_id'),
    path('authors/', views.authors, name='authors'),
]