``blx.feeds``
===============

You can capture RSS and Atom feeds using ``blx.feeds.getFeedItems()``. That function takes 3 parameters:

* the URL to the feed (required)
* a limit on how many items should be returned (optional, defaults to all items)
* how many initial items to skip (optional, defaults to 0)

``getFeedItems()`` will return an array of items, so it should be used in combination with a `for loop <http://twig.sensiolabs.org/doc/tags/for.html>`_.

Each item will have the following properties:


    * ``'authors'`` – an array of the item’s authors. Each element is a sub-array with the values ``'name'``, ``'url'``, and ``'email'``.
    * ``'categories'`` – an array of the item’s categories. Each element is a sub-array with the values ``'term'``, ``'scheme'``, and ``'label'``.
    * ``'content'`` – the item’s main content.
    * ``'contributors'`` – an array of author info. Each element is a sub-array with the values ``'name'``, ``'url'``, and ``'email'``.
    * ``'date'`` – the item’s date.
    * ``'dateUpdated'`` – the item’s last updated date.
    * ``'permalink'`` – the item’s permalink URL.
    * ``'summary'`` – the item’s summary content.
    * ``'title'`` – the item’s title.

.. code-block:: html

    {% set feedUrl = "http://feeds.feedburner.com/blogandtonic" %}
    {% set limit = 10 %}
    {% set items = blx.feeds.getFeedItems(feedUrl, limit) %}

    {% for item in items %}
        <article>
            <h3><a href="{{ item.permalink }}">{{ item.title }}</a></h3>
            <p class="author">{{ item.authors[0].name }}</p>
            <p class="date">{{ item.date }}</p>

            {{ item.summary }}
        </article>
    {% endfor %}
