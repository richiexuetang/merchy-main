from django.contrib.auth.models import AbstractUser, AbstractBaseUser
from django.db import models


class CustomUser(AbstractUser):
    id = models.AutoField(primary_key=True)
    # telephone_number = models.CharField(max_length=20)
