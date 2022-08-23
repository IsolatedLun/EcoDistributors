# Generated by Django 4.0.6 on 2022-08-20 16:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0007_productkeypoint'),
    ]

    operations = [
        migrations.AlterField(
            model_name='productkeypoint',
            name='key_point',
            field=models.CharField(help_text='A short text that explains a key point about the product', max_length=256),
        ),
    ]
