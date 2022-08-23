# Generated by Django 4.0.6 on 2022-08-20 17:40

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0008_alter_productkeypoint_key_point'),
    ]

    operations = [
        migrations.AlterField(
            model_name='categoriessingleton',
            name='categories',
            field=models.JSONField(default=list),
        ),
        migrations.AlterField(
            model_name='productimage',
            name='image',
            field=models.ImageField(help_text='An image that will show the user what the product looks like', upload_to='products/%Y/%m/%d'),
        ),
        migrations.CreateModel(
            name='ProductDetails',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('brand', models.CharField(max_length=64)),
                ('weight', models.PositiveIntegerField(default=0, help_text='How much the product weights in lbs')),
                ('dimensions', models.CharField(help_text='2 x 2 x 2', max_length=48)),
                ('product', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='products.product')),
            ],
        ),
    ]
