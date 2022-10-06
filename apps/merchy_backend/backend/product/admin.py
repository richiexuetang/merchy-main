from django.contrib import admin
from mptt.admin import MPTTModelAdmin
from .models import (Category, Product, Market, ImageGallery, Trait, ProductType, ProductAttribute,
                     ProductAttributeValue)

admin.site.register(Category, MPTTModelAdmin)
admin.site.register(Product)
admin.site.register(Market)
admin.site.register(ImageGallery)
admin.site.register(Trait)
admin.site.register(ProductType)
admin.site.register(ProductAttribute)
admin.site.register(ProductAttributeValue)
