from django.contrib import admin
from .models import EmailAddress, EmailConfirmation

admin.site.register(EmailAddress)
admin.site.register(EmailConfirmation)
