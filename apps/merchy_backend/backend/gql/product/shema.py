from django_filters import FilterSet, OrderingFilter, RangeFilter, Filter
import graphene
from django.db.models import Q
from graphene_django import DjangoObjectType
from ...product.models import (Product, Category, Market, ImageGallery, Trait, ProductAttribute, ProductAttributeValue,
                               ProductType)
from graphene_django.filter import DjangoFilterConnectionField


class ProductTypeNode(DjangoObjectType):
    id = graphene.ID(source='pk', required=True)

    class Meta:
        model = ProductType
        interfaces = (graphene.relay.Node,)


class ProductTypeFilter(FilterSet):
    class Meta:
        model = ProductType
        fields = '__all__'


class ProductAttributeValueNode(DjangoObjectType):
    id = graphene.ID(source='pk', required=True)

    class Meta:
        model = ProductAttributeValue
        interfaces = (graphene.relay.Node,)


class ProductAttributeNode(DjangoObjectType):
    id = graphene.ID(source='pk', required=True)

    class Meta:
        model = ProductAttribute
        interfaces = (graphene.relay.Node,)


class TraitNode(DjangoObjectType):
    id = graphene.ID(source='pk', required=True)

    class Meta:
        model = Trait
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


class ProductObjectType(DjangoObjectType):
    id = graphene.ID(source='pk', required=True)

    class Meta:
        model = Product
        fields = '__all__'


class ProductFilter(FilterSet):
    price_range = RangeFilter(
        method=lambda queryset, _, value: queryset.filter(price__range=value.split(',')))

    class Meta:
        model = Product
        fields = ['price_range']

    order_by = OrderingFilter(
      fields=['created_at', 'price', 'market__retail_price', 'market__sales_ever', 'market__lowest_ask',
              'market__highest_bid', 'market__last_sale']
    )


class ProductNode(DjangoObjectType):
    id = graphene.ID(source='pk', required=True)

    class Meta:
        model = Product
        fields = '__all__'
        interfaces = (graphene.relay.Node,)


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

    order_by = OrderingFilter(
        fields=['position']
    )

    @staticmethod
    def resolve_products(self, instance, info):
        return info.context.products


class CategoryType(DjangoObjectType):
    id = graphene.ID(source='pk', required=True)

    class Meta:
        model = Category
        fields = '__all__'


class ProductQueries(graphene.ObjectType):
    all_products = DjangoFilterConnectionField(ProductNode, search=graphene.String(), category_slug=graphene.String(),
                                               release_years=graphene.List(graphene.Int),
                                               size_types=graphene.List(graphene.String),
                                               sizes=graphene.List(graphene.String),
                                               filterset_class=ProductFilter)
    product_by_slug = graphene.Field(ProductObjectType, product_slug=graphene.String(required=True))
    categories = DjangoFilterConnectionField(CategoryNode, target_level=graphene.Int(), filterset_class=CategoryFilter)
    all_categories = graphene.Field(CategoryType)
    vertical_browse_categories = DjangoFilterConnectionField(CategoryNode, browse_category=graphene.String(),
                                                             filterset_class=CategoryFilter)
    product_filter_attributes = DjangoFilterConnectionField(ProductTypeNode,
                                                            category_slug=graphene.String(required=True),
                                                            filterset_class=ProductTypeFilter)

    @staticmethod
    def resolve_all_products(self, info, search=None, category_slug=None, release_years=None, size_types=None,
                             sizes=None, **kwargs):
        if search:
            return Product.objects.filter(
                Q(name__icontains=search)
            )

        products = Product.objects.all()
        qs = Category.objects.get(slug=category_slug).get_leafnodes(include_self=True)

        category_ids = []
        for leaf in qs:
            category_ids.append(leaf.id)

        if release_years and len(release_years):
            products = products.filter(traits__release_year__in=release_years)
        if kwargs.get('price_range'):
            products = products.filter(market__price__range=kwargs.get('price_range').split(','))
        if size_types and len(size_types):
            products = products.filter(traits__size_type__contains=size_types)
        if sizes and len(sizes):
            products = products.filter(traits__sizes__contains=sizes)
        if category_ids:
            products = products.filter(
                category__id__in=category_ids
            )
        return products

    @staticmethod
    def resolve_product_by_slug(self, info, product_slug):
        return Product.objects.get(slug=product_slug)

    @staticmethod
    def resolve_categories(self, info, target_level=None):
        categories = Category.objects.all()
        if target_level is not None:
            categories = categories.filter(level=target_level)
        return categories

    @staticmethod
    def resolve_vertical_browse_categories(self, info, browse_category=None):
        node = Category.objects.get(slug=browse_category)

        qs = node.get_children()
        qs2 = node.get_siblings()
        qs3 = node.get_ancestors(include_self=True)
        root_categories = node.get_root().get_siblings(include_self=True)
        root_children = node.get_root().get_children()
        return qs.union(qs3, qs2, root_categories, root_children).order_by('level', 'position')

    @staticmethod
    def resolve_product_filter_attributes(self, info, category_slug=None):
        root = Category.objects.get(slug=category_slug).get_root()
        print('root', root, root.slug)
        return ProductType.objects.filter(name=root.slug)
