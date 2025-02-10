from django.db import models

from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db.models.signals import post_save
from django.dispatch import receiver

# Create your models here.

class User(AbstractUser):
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=100, unique=True)
    otp = models.CharField(max_length=25, blank=True, null=True)

    is_superuser = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def __str__(self):
        return self.email

    def save(self, *args, **kwargs):
        email_username = self.email.split('@')[0]
        if self.username == '' or self.username == None:
            self.username = email_username
        return super(User, self).save(*args, **kwargs)


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    firstname = models.CharField(db_column='firstName', max_length=50, blank=True, null=True)
    middlename = models.CharField(db_column='middleName', max_length=50, blank=True, null=True)
    lastname = models.CharField(db_column='lastName', max_length=50, blank=True, null=True)
    gender = models.CharField(max_length=10, blank=True, null=True)

    bio = models.TextField(blank=True, null=True)
    mobile = models.CharField(max_length=15, blank=True, null=True)
    country = models.CharField(max_length=50, null=True, blank=True)

    def __str__(self):
        if self.firstname and self.lastname:
            return f'{self.firstname} {self.lastname}'
        else:
            return self.user.username

@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)

@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()

post_save.connect(create_user_profile, sender=User)
post_save.connect(save_user_profile, sender=User)