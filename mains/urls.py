from django.urls import path
from . import views

app_name = "mains"
urlpatterns = [
    path('', views.index, name="index"),
    path('timeline/', views.timeline, name="timeline"),
    path('timeline-upload/', views.timelineUpload, name="timelineUpload"),
    path('timeline-store/', views.timelineStore, name="timelineStore"),
    path('guestbook/', views.guestbook, name="guestbook"),
    path('quiz/', views.quiz, name="quiz"),
    path('letter/', views.letter, name="letter"),
    path('letter-hidden/<int:password>/', views.letterHidden, name="letterHidden"),
    path('menu-main.html/', views.menuMain, name="menu-main"),
]