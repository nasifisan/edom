from pyexpat import model
from django.db import models

# Create your models here.

class Product(models.Model):
    id = models.IntegerField(primary_key=True)
    product_supplier = models.IntegerField()
    product_quantity = models.IntegerField()
    product_price = models.IntegerField()
    product_name = models.CharField(max_length=255)
