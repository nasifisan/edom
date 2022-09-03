from django.db import models

# Create your models here.

class userProfile(models.Model):
    user_id = models.IntegerField(primary_key=True)
    user_image = models.TextField(null=True)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    full_name = models.TextField(null=False)
    email = models.EmailField()
    password = models.CharField(max_length=39)
    address = models.CharField(max_length=255)
    phone = models.CharField(max_length=30)
    country = models.CharField(max_length=30, null=True)