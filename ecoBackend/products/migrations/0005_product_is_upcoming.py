# Generated by Django 4.0.6 on 2022-08-20 08:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0004_categoriessingleton'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='is_upcoming',
            field=models.BooleanField(default=False),
        ),
    ]
