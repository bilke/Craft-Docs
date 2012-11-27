Includes
===============

Includes allow you to pull one template into another.  Include templates should be stored with your other templates.  One potential best practice here would be to group your includes into one folder inside your blocks/templates folder.

To include a template stored in /blocks/templates/inc you would use this code in your main template:

.. code-block:: html

    {% include "inc/_footer" %}

You can add additional variables to your includes by utilizing the * with* keyword:

.. code-block:: html

    {% include 'example' with {'example': 'stuff'} %}
