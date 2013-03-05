Includes
===============

Includes allow you to pull one template into another.  Include templates should be stored with your other templates.  One potential best practice here would be to group your includes into one folder inside your craft/templates folder.

To include a template stored in /craft/templates/inc you would use this code in your main template:

.. code-block:: html

    {% include "inc/_footer" %}

You can add additional variables to your includes by utilizing the ``with`` parameter:

.. code-block:: html

    {# the example template will have access to the variables
       from the current context and from the stuff context #}

    {% include 'example' with { example: 'stuff' } %}

.. code-block:: html

	{% set vars = {'example': 'site'} %}
	{% include 'example' with vars %}

You can also disable access to that context by appending the ``only`` parameter:

.. code-block:: html

    {# only the example variable will be accessible #}
    {% include 'example' with {'example': 'site'} only %}

.. code-block:: html

    {# no variable will be accessible #}
    {% include 'example' only %}

Your templates can have any valid extension but you do not need to append the extension in your include call; Craft handles the extensions automatically for you.

You can use the ``ignore missing`` parameter and Twig will ignore the statement if the ignored template does not exist.

.. code-block:: html

    {% include "inc/_footer" ignore missing %}

You can also check for the existence of templates before inclusion.  The first template listed will be included:

.. code-block:: html

    {% include ["inc/_footer", "inc/footer-section"] %}