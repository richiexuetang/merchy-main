from graphene import Schema, ObjectType
from .product.shema import ProductQueries


class Query(ProductQueries, ObjectType):
    pass


schema = Schema(query=Query)
