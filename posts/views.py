from django.shortcuts import render
from django.views.generic import TemplateView
from django.http import JsonResponse
from posts.models import Posts
import json
from django.core.serializers import serialize

class DashboardView(TemplateView):
    template_name = "dashboard/index.html"


def search_view(request):
    """IF method is post we have to search this post in the db if not then return error"""
    if request.method == 'POST':
        search = json.loads(request.body.decode('utf-8'))
        if search['search_value']:
            search_result = Posts.objects.filter(title__contains=search['search_value'])
        else:
            return JsonResponse({'has_error': True, 'error_message': 'There is not result for this search value'})

        return JsonResponse({
                'has_error': False,
                'result': serialize('json', search_result),
                'error_message': 'There is no error'})
    else:
        return JsonResponse({'has_error': True, 'error_message': 'Bad Request'})


def create_view(request):
    if request.method == 'POST':
        data = json.loads(request.body.decode('utf-8'))
        title_post = data['title_post']
        post_description = data['post_description']
        post = Posts.objects.create(title=title_post, description=post_description)
        if post:
            return JsonResponse({'has_error': False, 'error_message': 'The post was created successfully'})
        return JsonResponse({'has_error': True, 'error_message': 'Error Creating the post'})
# Create your views here.
