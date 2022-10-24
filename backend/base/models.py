from django.db import models
from django.contrib.auth.models import User


# Create your models here.

class Advert(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    city = models.CharField(max_length=200, null=True, blank=True)
    country = models.CharField(max_length=200, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return self.name


class Application(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    application_id = models.AutoField(primary_key=True, editable=False)
    applicant_id = models.IntegerField(blank=True)
    advert_id = models.IntegerField(blank=True)

    def __str__(self):
        return self.applicant_id
