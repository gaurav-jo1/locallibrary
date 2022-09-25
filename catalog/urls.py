from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('books/', views.BookListView, name='BookListView'),
    path('book/<str:pk>/', views.BookDetailView, name='BookDetailView'),
    path('authors/', views.AuthorListView, name='AuthorListView'),
    path('author/<str:pk>/', views.AuthorDetailView, name='AuthorDetailView'),
]