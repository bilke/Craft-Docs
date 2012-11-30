Outputting One Entry
===============

When a request comes in that matches an entry’s URL, that entry’s section’s template gets loaded up, and an ``entry`` variable is made available to it. That variable will give you access to all of the entry’s info, succh as ``entry.title``, ``entry.someBlockHandle``, etc.. (See :doc:`/templating/reference/blx.entries`)


.. code-block:: html

    {% for entry in blx.entries.find({section: 'Blog'}) %}
    <h1 class="title"><a href="{{entry.url}}">{{entry.title}}</a></h1>
    {{entry.body | raw}}
    <p class="sig">-<em>{{ entry.author }}</em>, {{entry.postDate}}</p>
    {% endfor %}