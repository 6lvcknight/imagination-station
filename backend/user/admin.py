from django.contrib import admin
from user.models import User, Profile

# Register your models here.
class UserAdmin(admin.ModelAdmin):
    list_display = ['email', 'username',]
    search_fields = ['email', 'username',]

class ProfileAdmin(admin.ModelAdmin):
    list_display = ['firstname','lastname', 'country',]
    search_fields = ['lastname',]

admin.site.register(User, UserAdmin)
admin.site.register(Profile, ProfileAdmin)