# Generated by Django 5.0.3 on 2024-03-31 16:43

import datetime
import django.db.models.deletion
import uuid
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("spaces", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="notice",
            name="NoticeId",
            field=models.UUIDField(default=uuid.uuid4, editable=False, unique=True),
        ),
        migrations.AlterField(
            model_name="notice",
            name="created_at",
            field=models.DateTimeField(
                default=datetime.datetime(
                    2024, 3, 31, 16, 43, 59, 338870, tzinfo=datetime.timezone.utc
                )
            ),
        ),
        migrations.AlterField(
            model_name="space",
            name="spaceId",
            field=models.UUIDField(default=uuid.uuid4, editable=False, unique=True),
        ),
        migrations.AlterField(
            model_name="userspace",
            name="space",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                to="spaces.space",
                to_field="spaceId",
                unique=True,
            ),
        ),
    ]
