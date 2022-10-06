# Generated by Django 4.1.1 on 2022-10-04 22:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0019_remove_productattribute_product_type_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='productattributevalue',
            name='attribute',
        ),
        migrations.AddField(
            model_name='productattributevalue',
            name='attribute',
            field=models.ManyToManyField(related_name='product_attribute', to='product.productattribute'),
        ),
    ]
