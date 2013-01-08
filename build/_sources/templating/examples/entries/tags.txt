Outputting One Entry
===============

You can display your entry's tags using the following code:


.. code-block:: html

    {% for tag in entry.getTags() %}
    <li>{{ tag }}</li>
    {% endfor %}
