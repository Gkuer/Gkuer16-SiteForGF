from django.db import models

# Create your models here.
class Timeline(models.Model):
    s3_url = models.TextField(null=True)
    insta_name = models.TextField(null=True)
    comment = models.TextField(null=True)

class Guestbook(models.Model):
    insta_name = models.TextField(null=True)
    comment = models.TextField(null=True)

class QuizScore(models.Model):
    insta_name = models.TextField(null=True)
    score = models.TextField(null=True)