from django.contrib import admin
from .models import Timeline, Guestbook, QuizScore

# Register your models here.
admin.site.register(Timeline)
admin.site.register(Guestbook)
admin.site.register(QuizScore)