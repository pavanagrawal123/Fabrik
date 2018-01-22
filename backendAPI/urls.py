from django.conf.urls import url
from views import login, check_login, get_models

urlpatterns = [
    url(r'^login$', login.as_view()),
    url(r'^checkLogin$', check_login),
    url(r'^getModels$', get_models)
]
