from django.db import models

# Create your models here.
class userBankInformation(models.Model):
    user_id = models.IntegerField(primary_key=True)
    bank_account_number = models.CharField(null=True, max_length=255)
    bank_id = models.IntegerField()
    bank_branch = models.IntegerField()
    bank_secret = models.TextField(null=True)