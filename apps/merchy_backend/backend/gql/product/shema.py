import graphene
from graphene_django import DjangoObjectType
from ...product.models import (Product, Category)


class ProductType(DjangoObjectType):
    class Meta:
        model = Product


class ProductQueries(graphene.ObjectType):
    all_products = graphene.List(ProductType)

    def resolve_all_products(self, info):
        return Product.objects.all()
