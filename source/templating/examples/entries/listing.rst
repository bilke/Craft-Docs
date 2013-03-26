Outputting a List of Entries
===============

You can easily output a list of entries on any template using the following code:


.. code-block:: html

    <ul>
    {% for entry in craft.entries.find({section: 'Blog', limit: '200', order: 'postDate desc'}) %}
        <li><a href="{{ entry.url }}">{{ entry.title }}</a></li>
    {% endfor %}
    </ul>
