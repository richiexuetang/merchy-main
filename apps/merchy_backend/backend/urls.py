from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from .core.views import home, SignupView, HomeView
from rest_framework.authtoken import views
from dj_rest_auth.registration.views import VerifyEmailView
from graphene_django.views import GraphQLView
from django.views.decorators.csrf import csrf_exempt



urlpatterns = [
    path('admin/', admin.site.urls),

    # 3rd party auth -Django allauth
    path('api-auth/', include('rest_framework.urls')),
    path('api-token-auth/', views.obtain_auth_token),
    path('accounts/', include('allauth.urls')),
    path('json/', HomeView.as_view(), name='home'),
    path('dj-rest-auth/', include('dj_rest_auth.urls')),
    path('dj-rest-auth/registration/', include('dj_rest_auth.registration.urls')),
    path('dj-rest-auth/account-confirm-email/', VerifyEmailView.as_view(), name='account_email_verification_sent'),
    path('dj-rest-auth/login/', include('dj_rest_auth.registration.urls')),
    path('graphql/', csrf_exempt(GraphQLView.as_view(graphiql=True)), name='api'),

    # Custom auth
    path('signup/', SignupView.as_view(), name='signup'),

    # Built in auth
    #path('accounts/', include('django.contrib.auth.urls')),

    path('', home, name='home'),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL,
                          document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
