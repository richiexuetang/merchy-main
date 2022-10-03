from django_filters import NumberFilter, FilterSet, OrderingFilter
import graphene
from django.db.models import Q
from graphene_django import DjangoObjectType
from ...product.models import (Product, Category, Market, ImageGallery)
from graphene_django.filter import DjangoFilterConnectionField


class CategoryFilter(FilterSet):
    class Meta:
        model = Category
        fields = '__all__'
    order_by = OrderingFilter(
        fields=['level']
    )


class CategoryNode(DjangoObjectType):
    id = graphene.ID(source='pk', required=True)

    class Meta:
        model = Category
        fields = '__all__'
        interfaces = (graphene.relay.Node,)


class MarketNode(DjangoObjectType):
    id = graphene.ID(source='pk', required=True)

    class Meta:
        model = Market
        interfaces = (graphene.relay.Node, )


class MediaNode(DjangoObjectType):
    id = graphene.ID(source='pk', required=True)

    class Meta:
        model = ImageGallery
        interfaces = (graphene.relay.Node,)


class ProductType(DjangoObjectType):
    id = graphene.ID(source='pk', required=True)

    class Meta:
        model = Product
        fields = '__all__'


class ProductFilter(FilterSet):
    min_price = NumberFilter(
        method=lambda queryset, _, value: queryset.filter(price__gte=int(value)))
    max_price = NumberFilter(
        method=lambda queryset, _, value: queryset.filter(price__lte=int(value)))

    class Meta:
        model = Product
        fields = ['price']

    order_by = OrderingFilter(
      fields=['created_at', 'price', 'market__retail_price']
    )

    @classmethod
    def get_queryset(cls, queryset, info):
        return queryset.filter(price__range=info.context.get('price'))


class ProductNode(DjangoObjectType):
    id = graphene.ID(source='pk', required=True)

    class Meta:
        model = Product
        fields = '__all__'
        interfaces = (graphene.relay.Node,)


class ProductQueries(graphene.ObjectType):
    products = DjangoFilterConnectionField(ProductNode, search=graphene.String(), filterset_class=ProductFilter)
    product_by_slug = graphene.Field(ProductType, product_slug=graphene.String(required=True))
    categories = DjangoFilterConnectionField(CategoryNode, filterset_class=CategoryFilter)
    category_products = DjangoFilterConnectionField(CategoryNode, category_slug=graphene.String(),
                                                    filterset_class=CategoryFilter)

    @staticmethod
    def resolve_products(self, info, search=None, *args, **kwargs):
        products = Product.objects.all()

        if kwargs.get('min_price') and kwargs.get('max_price'):
            products = products.filter(price__gte=kwargs.get('min_price'), price__lte=kwargs.get('max_price'))
        if search:
            products = Product.objects.filter(
                Q(name__icontains=search)
            )
        return products

    @staticmethod
    def resolve_product_by_slug(self, info, product_slug):
        return Product.objects.get(slug=product_slug)

    @staticmethod
    def resolve_categories(self, info, level=None):
        categories = Category.objects.all()
        if level is not None:
            categories = categories.filter(level=level)
        return categories

    @staticmethod
    def resolve_category_products(self, info, category_slug=None):
        category = Category.objects.get(slug=category_slug)
        return category.get_leafnodes(include_self=True)
