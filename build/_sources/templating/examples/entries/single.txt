Single Entry Pages
==================

When a request comes in that matches an entry’s URL, that entry’s section’s template gets loaded up, and an ``entry`` variable is made available to it.

That variable will give you access to all of that entry’s info, such as ``entry.title``, ``entry.someBlockHandle``, etc. (See :ref:`entry-properties` for a full reference on what’s available).


.. code-block:: html

    <html>
    <head>
    	<title>{{ entry.title }}</title>
    </head>
    <body>
    	<h1>{{ entry.title }}</h2>
    	<p class="author">By {{ entry.author }}</p>
    	{{ entry.body }}
    </body>
    </html>
