# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.contrib.auth.models import User
from django.db import models
# import json
# Create your models here.


class Net(models.Model):
    """
    This model stores all output components, such as
    AreaGraphOutput, BarGraphOutput, ImageOutput, PieChartOutput,
    ScatterGraphOutput and TextOutput.
    An instance of OutputComponent can only belong to one demo.

    Fields:
        base_component_id: ID of the component
        props: Component properties
        demo: Foreign key to the demo the object belongs to
        user_id: ID of the user the demo belongs to
    """
    base_component_id = models.IntegerField()
    props = models.TextField()
    user = models.ForeignKey(User)
