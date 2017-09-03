from django.db import models
from django.contrib.auth.models import User
from django.urls import reverse


# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Tag(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Post(models.Model):
    # the title of article
    title = models.CharField(max_length=70)

    # the body of article
    body = models.TextField()

    created_time = models.DateTimeField()
    modified_time = models.DateTimeField()

    # the abstract of article
    excerpt = models.CharField(max_length=200, blank=True)

    # ForeignKey:one to more
    # ManyToManyField:more to one
    category = models.ForeignKey(Category)
    tags = models.ManyToManyField(Tag, blank=True)

    # the author of article
    # User comes from django.contrib.auth.models
    author = models.ForeignKey(User)

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('blog:detail', kwargs={'pk': self.pk})
