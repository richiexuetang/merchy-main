from django.db import models
from mptt.managers import TreeManager
from mptt.models import MPTTModel


class Category(MPTTModel):
    name = models.CharField(max_length=250)
    slug = models.SlugField(max_length=255, unique=True, allow_unicode=True)

    parent = models.ForeignKey("self", null=True, blank=True, related_name="children", on_delete=models.CASCADE)

    objects = models.Manager()
    tree = TreeManager()

    def __str__(self):
        return self.name


class ProductType:
    name = models.CharField(max_length=250)
    slug = models.SlugField(max_length=255, unique=True, allow_unicode=True)

    def __str__(self):
        return self.name


class ProductQuerySet(models.QuerySet):
    pass


class Market(models.Model):
    label = models.CharField(max_length=250)
    slug = models.SlugField(max_length=255, unique=True, allow_unicode=True)
    retail_price = models.IntegerField(null=True, blank=True)


class ImageGallery(models.Model):
    label = models.CharField(max_length=250)
    imageUrl = models.CharField(max_length=250)
    smallImageUrl = models.CharField(max_length=250)
    thumbUrl = models.CharField(max_length=250)


class Trait(models.Model):
    pass


class Product(models.Model):
    name = models.CharField(max_length=250)
    slug = models.SlugField(max_length=255, unique=True, allow_unicode=True)
    category = models.ForeignKey(Category, related_name='products', on_delete=models.SET_NULL, null=True, blank=True)
    price = models.IntegerField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True, db_index=True)
    updated_at = models.DateTimeField(auto_now=True, db_index=True)
    market = models.ForeignKey(Market, related_name='products', on_delete=models.SET_NULL, null=True, blank=True)
    media = models.ForeignKey(ImageGallery, related_name='products', on_delete=models.SET_NULL, null=True, blank=True)

    objects = ProductQuerySet.as_manager()

    def __str__(self):
        return self.name
