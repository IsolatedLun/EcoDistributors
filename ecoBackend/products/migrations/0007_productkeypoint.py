# Generated by Django 4.0.6 on 2022-08-20 16:45

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0006_alter_product_thumbnail_productimage'),
    ]

    operations = [
        migrations.CreateModel(
            name='ProductKeyPoint',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('key_point', models.CharField(max_length=256)),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='products.product')),
            ],
        ),
    ]
