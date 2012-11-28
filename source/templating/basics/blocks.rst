Template Blocks
===============

Template Blocks are a feature that bring Template Inheritance to Blocks.   Template Blocks allow you to build a base template with defined sections.  When building new templates, you can extend your base template, and over-ride only the parts that you need to.

You might have a base template in *blocks/templates*, called _layout.html, with this code:

.. code-block:: html

    <html>
    <head>
    {% block title %}<title>{% endblock %}
    </head>
    <body>
    {% block para %}<p>My New Site!</p>{% endblock %}
    </body>
    </html>

You may wish to build another template that will display a different message in the body.  Let's call that template _welcome.html.  The template code for _welcome.html would look like so:

.. code-block:: html

    {% extends "_layout" %}

With just this code the two templates will output identically.  However, you still want to change that body text, so you would append this in your _welcome.html template:

.. code-block:: html

    {% block para %}<p>Welcome, friend!</p>{% endblock %}

The end result is that your _welcome.html template will look like so:

.. code-block:: html

    {% extends "_layout" %}
    {% block para %}<p>Welcome, friend!</p>{% endblock %}

When pulled into the browser for viewing, the templates will be identical except for the differences in the *para* block.
