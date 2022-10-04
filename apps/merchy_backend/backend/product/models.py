from django.db import models
from mptt.managers import TreeManager
from mptt.models import MPTTModel
from django.contrib.postgres.fields import ArrayField


class Category(MPTTModel):
    name = models.CharField(max_length=250)
    slug = models.SlugField(max_length=255, unique=True, allow_unicode=True)
    position = models.PositiveIntegerField(null=True, blank=True, default=0)
    parent = models.ForeignKey("self", null=True, blank=True, related_name="children", on_delete=models.CASCADE)

    objects = models.Manager()
    tree = TreeManager()

    class MPTTMeta:
        order_insertion_by = ["position"]

    def __str__(self):
        return self.name


class ProductType(models.Model):
    name = models.CharField(max_length=250)
    slug = models.SlugField(max_length=255, unique=True, allow_unicode=True)
    # kind = models.CharField(max_length=32, choices=ProductTypeKind.CHOICES)
    has_variants = models.BooleanField(default=True)
    is_shipping_required = models.BooleanField(default=True)
    is_digital = models.BooleanField(default=False)

    class Meta:
        ordering = ("slug",)
        app_label = "product"

    def __str__(self):
        return self.name

    def __repr__(self) -> str:
        class_ = type(self)
        return "<%s.%s(pk=%r, name=%r)>" % (
          class_.__module__,
          class_.__name__,
          self.pk,
          self.name,
        )


class ProductAttribute(models.Model):
    product_type = models.ForeignKey(ProductType, on_delete=models.RESTRICT)
    name = models.CharField(max_length=255)
    field_value = models.CharField(max_length=255, null=True, blank=True)
    display_name = models.CharField(max_length=255, null=True, blank=True)

    class Meta:
        verbose_name = "Product Type Attribute"

    def __str__(self):
        return self.name


class ProductQuerySet(models.QuerySet):
    pass


class Market(models.Model):
    label = models.CharField(max_length=250)
    slug = models.SlugField(max_length=255, unique=True, allow_unicode=True)
    retail_price = models.IntegerField(null=True, blank=True)
    sales_ever = models.IntegerField(null=True, blank=True)
    price = models.IntegerField(null=True, blank=True)
    last_sale = models.IntegerField(null=True, blank=True)
    lowest_ask = models.IntegerField(null=True, blank=True)
    highest_bid = models.IntegerField(null=True, blank=True)


class ImageGallery(models.Model):
    label = models.CharField(max_length=250)
    imageUrl = models.CharField(max_length=250)
    smallImageUrl = models.CharField(max_length=250)
    thumbUrl = models.CharField(max_length=250)


class Trait(models.Model):
    label = models.CharField(max_length=250, blank=True)
    size_type = ArrayField(models.CharField(max_length=200), blank=True, default=[])
    sizes = ArrayField(models.CharField(max_length=200), blank=True, default=[])
    release_year = models.IntegerField(null=True, blank=True)


class Product(models.Model):
    product_type = models.ForeignKey(
      ProductType, related_name="products", on_delete=models.CASCADE, null=True, blank=True
    )

    name = models.CharField(max_length=250)
    slug = models.SlugField(max_length=255, unique=True, allow_unicode=True)
    category = models.ForeignKey(Category, related_name='products', on_delete=models.SET_NULL, null=True, blank=True)
    price = models.IntegerField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True, db_index=True)
    updated_at = models.DateTimeField(auto_now=True, db_index=True)
    market = models.ForeignKey(Market, related_name='products', on_delete=models.SET_NULL, null=True, blank=True)
    media = models.ForeignKey(ImageGallery, related_name='products', on_delete=models.SET_NULL, null=True, blank=True)
    traits = models.ForeignKey(Trait, related_name='products', on_delete=models.SET_NULL, null=True, blank=True)

    brand = models.CharField(max_length=255, null=True, blank=True)
    primary_title = models.CharField(max_length=255, null=True, blank=True)
    secondary_title = models.CharField(max_length=255, null=True, blank=True)
    objects = ProductQuerySet.as_manager()

    def __str__(self):
        return self.name


class ProductAttributeValue(models.Model):
    name = models.CharField(max_length=250)
    product = models.ManyToManyField(Product, related_name='attributes', null=True, blank=True)
    attribute = models.ForeignKey(ProductAttribute, related_name='product_attribute', on_delete=models.CASCADE)
    value = models.CharField(null=True, blank=True, max_length=255)
    type = models.CharField(null=True, blank=True, max_length=100)
    display_name = models.CharField(null=True, blank=True, max_length=255)

    def __str__(self):
        return self.name
