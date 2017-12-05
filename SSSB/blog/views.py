import markdown

from django.shortcuts import render, get_object_or_404
from django.views.generic import ListView, DetailView
from comments.forms import CommentForm
from .models import Post, Category

from django.http import JsonResponse


def index(request):
    post_list = Post.objects.all()
    jpost_list = []
    for p in post_list:
        jpost_list.append({
            "tittle": p.title,
            "body": p.body,
            "created_time": p.created_time,
            "modified_time": p.modified_time,
            "excerpt": p.excerpt,
            "category": p.category,
            "tags": p.tags,
            "author": p.author
            # "views": p.views
        })
    print(request.method)
    if request.method == "POST":
        return JsonResponse({'post': jpost_list})
    return render(request, 'blog/index.html', context={'post_list': post_list})


def base(request):
    return render(request, 'base.html')


class IndexView(ListView):
    model = Post
    template_name = 'blog/index.html'
    context_object_name = 'post_list'


def detail(request, pk):
    post = get_object_or_404(Post, pk=pk)

    # # 阅读量 +1
    # post.increase_views()

    post.body = markdown.markdown(post.body,
                                  extensions=[
                                      'markdown.extensions.extra',
                                      'markdown.extensions.codehilite',
                                      'markdown.extensions.toc',
                                  ])
    form = CommentForm()
    # 获取这篇 post 下的全部评论
    comment_list = post.comment_set.all()

    context = {'post': post,
               'form': form,
               'comment_list': comment_list
               }
    if request.is_ajax():
        return JsonResponse({'context': context})
    return render(request, 'blog/detail.html', context=context)


class PostDetailView(DetailView):
    model = Post
    template_name = 'blog/detail.html'
    context_object_name = 'post'

    def get(self, request, *args, **kwargs):
        response = super(PostDetailView, self).get(request, *args, **kwargs)

        # 将文章阅读量 +1
        self.object.increase_views()

        return response

    def get_object(self, queryset=None):
        post = super(PostDetailView, self).get_object(queryset=None)
        post.body = markdown.markdown(post.body,
                                      extensions=[
                                          'markdown.extensions.extra',
                                          'markdown.extensions.codehilite',
                                          'markdown.extensions.toc',
                                      ])
        return post

    def get_context_data(self, **kwargs):
        context = super(PostDetailView, self).get_context_data(**kwargs)
        form = CommentForm()
        comment_list = self.object.comment_set.all()
        context.update({
            'form': form,
            'comment_list': comment_list
        })
        return context


def archives(request, year, month):
    post_list = Post.objects.filter(created_time__year=year,
                                    created_time__month=month
                                    )
    jpost_list = []
    for p in post_list:
        jpost_list.append({
            "tittle": p.title,
            "body": p.body,
            "created_time": p.created_time,
            "modified_time": p.modified_time,
            "excerpt": p.excerpt,
            "category": p.category,
            "tags": p.tags,
            "author": p.author
            # "views": p.views
        })
    if request.is_ajax():
        return JsonResponse({'post': jpost_list})
    return render(request, 'blog/index.html', context={'post_list': post_list})


class ArchivesView(ListView):
    model = Post
    template_name = 'blog/index.html'
    context_object_name = 'post_list'

    def get_queryset(self):
        year = self.kwargs.get('year')
        month = self.kwargs.get('month')
        return super(ArchivesView, self).get_queryset().filter(created_time__year=year,
                                                               created_time__month=month
                                                               )


def category(request, pk):
    cate = get_object_or_404(Category, pk=pk)
    post_list = Post.objects.filter(category=cate)
    jpost_list = []
    for p in post_list:
        jpost_list.append({
            "tittle": p.title,
            "body": p.body,
            "created_time": p.created_time,
            "modified_time": p.modified_time,
            "excerpt": p.excerpt,
            "category": p.category,
            "tags": p.tags,
            "author": p.author,
            # "views": p.views
        })
    if request.is_ajax():
        return JsonResponse({'post': jpost_list})
    return render(request, 'blog/index.html', context={'post_list': post_list})


class CategoryView(ListView):
    model = Post
    template_name = 'blog/index.html'
    context_object_name = 'post_list'

    def get_queryset(self):
        cate = get_object_or_404(Category, pk=self.kwargs.get('pk'))
        return super(CategoryView, self).get_queryset().filter(category=cate)
