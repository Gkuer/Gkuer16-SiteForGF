from django.shortcuts import render, redirect
from .models import Timeline, Guestbook, QuizScore
import json

# Create your views here.

def index(request):
    timelines_count = Timeline.objects.all().count()

    quiz_stores = QuizScore.objects.order_by('-score', 'pk')
    highest_score_person = quiz_stores.first()

    guestbooks_count = Guestbook.objects.all().count()

    context = {
        'timelines_cnt': timelines_count,
        'highest_score_person': highest_score_person.insta_name,
        'guestbooks_count': guestbooks_count
    }

    return render(request, 'mains/index.html', context)

def timeline(request):
    timelines = Timeline.objects.order_by('-id')  # Timeline 모델의 모든 인스턴스 가져오기

    context = {'timelines': timelines}  # 템플릿으로 전달할 context

    return render(request, 'mains/timeline.html', context)

def timelineUpload(request):
    return render(request, 'mains/timeline-upload.html')

def timelineStore(request):
    json_data = json.loads(request.body)
    s3_url = json_data.get('imageUrl')
    insta_name = json_data.get('text1')
    comment = json_data.get('text2')

    s3_url = s3_url.replace("secret","secret")

    timeline = Timeline(s3_url=s3_url, insta_name=insta_name, comment=comment)
    timeline.save()

    return render(request, 'mains/timeline-upload.html')

def guestbook(request):
    if request.method == "POST":
        comment = request.POST.get('comment')
        insta_name = request.POST.get('insta_name')
        if comment and insta_name:
            guestbook = Guestbook(comment=comment, insta_name=insta_name)
            guestbook.save()

    guestbooks = Guestbook.objects.order_by('-id')  # Timeline 모델의 모든 인스턴스 가져오기
    context = {'guestbooks': guestbooks}  # 템플릿으로 전달할 context

    return render(request, 'mains/guestbook.html', context)

def quiz(request):
    if request.method == "POST":
        try:
            json_data = json.loads(request.body)

            question1 = json_data.get('question1')
            question2 = json_data.get('question2')
            question3 = json_data.get('question3')
            question4 = json_data.get('question4')
            question5 = json_data.get('question5')
            question6 = json_data.get('question6')
            insta_name = json_data.get('instaName')

            score_count = 0

            score_count += 1 if question1 == "1q-2c" else 0
            score_count += 1 if question2 == "2q-2b" else 0
            score_count += 1 if question3 == "3q-2b" else 0
            score_count += 1 if question4 == "4q-2b" else 0
            score_count += 1 if question5 == "5q-2b" else 0
            score_count += 1 if question6 == "6q-2d" else 0

            int_score = int((100/6)*score_count)
            quiz_list = QuizScore.objects.all()
            for aquiz in quiz_list:
                print(aquiz)
                if aquiz.insta_name == insta_name:
                    break
            else:
                quiz_score = QuizScore(insta_name=insta_name, score=str(int_score))
                quiz_score.save()
        except:
            pass

    return render(request,'mains/quiz.html')

def letter(request):
    return render(request, 'mains/letter.html')

def letterHidden(request, password):
    if password == 690410:
        return render(request, 'mains/letter-hidden.html')
    else:
        return redirect('mains:index')

def menuMain(request):
    return render(request, 'mains/menu-main.html')
