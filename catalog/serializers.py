from asyncore import read
from dataclasses import field, fields
from pyexpat import model
from statistics import mode
from .models import  Book, Author, BookInstance, Genre
from rest_framework import serializers


class AuthorSerializer(serializers.ModelSerializer):

    class Meta:
        model = Author
        fields = '__all__'

class BookInstanceSerializer(serializers.ModelSerializer):

    class Meta:
        model = BookInstance
        fields = '__all__'

class GenreSerializer(serializers.ModelSerializer):

    class Meta:
        model = Genre
        fields = '__all__'


class BookSerializer(serializers.ModelSerializer):
    author = serializers.StringRelatedField()
    genre = GenreSerializer(many=True)
    class Meta:
        model = Book
        fields = '__all__'