# Generated by Django 3.2.13 on 2022-06-06 13:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0003_userprofile_country'),
    ]

    operations = [
        migrations.AddField(
            model_name='userprofile',
            name='full_name',
            field=models.TextField(default='nope'),
            preserve_default=False,
        ),
    ]
