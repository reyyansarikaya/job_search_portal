from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from ..models import Advert
from ..serializer import AdvertSerializer
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):

    def validate(self, attrs):
        data = super().validate(attrs)

        refresh = self.get_token(self.user)

        data["username"] = self.user.username
        data["email"] = self.user.email

        return data


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


@api_view(['GET'])
def getRoutes(request):
    routes = [
        'api/adverts',
        'api/adverts/create',
        'api/adverts/<id>'
    ]
    return Response(routes)

@api_view(['GET'])
def getProducts(request):
    adverts = AdvertSerializer.objects.all()
    serializers = AdvertSerializer(adverts, many=True)
    return Response(serializers.data)


@api_view(['GET'])
def getProduct(request, pk):
    adverts = Advert.objects.get(_id=pk)
    serializers = AdvertSerializer(adverts, many=True)
    return Response(serializers.data)
