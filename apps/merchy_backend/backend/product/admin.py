from django.contrib import admin
from mptt.admin import MPTTModelAdmin
from .models import (Category, Product, Market, ImageGallery)

admin.site.register(Category, MPTTModelAdmin)
admin.site.register(Product)
admin.site.register(Market)
admin.site.register(ImageGallery)

