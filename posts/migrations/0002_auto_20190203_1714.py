# Generated by Django 2.1.5 on 2019-02-03 22:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='posts',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True),
        ),
        migrations.AlterField(
            model_name='posts',
            name='description',
            field=models.TextField(),
        ),
        migrations.AlterField(
            model_name='posts',
            name='title',
            field=models.CharField(max_length=255),
        ),
    ]
