How Requests Get Routed
=======================

When a request comes in, Blocks analyzes it to determine how to handle it. Here is a quick outline of what that entails:

#. **Is it a resource request?**

   Resource request URIs begin with “resources/” (a word that is customizable via ``$blocksConfig['resourceTrigger']`` in blocks/config/blocks.php). They are used for serving CP resources, user photos, etc..

#. **Is it an action request?**

   A request is deemed an “action request” if the URI begins with “actions/” (a word that is customizable via ``$blocksConfig['actionTrigger']`` in blocks/config/blocks.php), or an “action” param exists either in the POST data or query string. Action requests get routed to a controller action, which are used to perform… *actions*. Controller actions are built into the system for core actions, but plugins may also have Controllers that define their own custom actions.

#. **Is it a page request?**

   If the URI matches a :doc:`page <pages>`’s URI, that page’s template will get loaded, with a ``page`` variable available to it, set to the matched page.

#. **Is it an entry request?**

   If the URI matches an :doc:`entry <entries>`’s URI, that entry’s section’s template will get loaded, with an ``entry`` variable available to it, set to the matched entry.

#. **Does the URI match any dynamic template routes?**

   If the URI matches any :ref:`dynamic template routes <dynamic-template-routes>`, the template specified by that route will get loaded. If the route contains any tokens, they will be available as variables to that template.

#. **Does the URI match a template path?**

   Finally, Blocks will see if the URI is a valid template path. If it is, it will return the matched template. Note that if any of the URI segments begin with an underscore (‘_’), Blocks will return a 404, since template path segments that begin with an underscore are considered “hidden” from direct access.

#. **404**

   If none of those checks are successful, Blocks will return a 404. You can customize your site’s 404 page by placing an “error404.html” template at the root of your blocks/templates/ folder.


.. _dynamic-template-routes:

Dynamic Template Routes
-----------------------

There are times when you want an incoming request to route directly to a template, but you don’t want the URI to match the template path. A good example of this is dynamic URLs, such as a yearly archive template, where you want the year to be one of the segments in the URL (e.g. “blog/archive/2012”). It would be silly to create a new template for every year. Which is why Blocks allows you to create **dynamic template routes**.

To create a new route, go to Settings > Routes, and click the “New Route” button. A modal window will appear where you can define the route properties, of which there are two:

* What should the URI look like?
* Which template should get loaded?

The first setting comes with a few “tokens”. When you click on one, it will get inserted into the URI setting. Those tokens represent sub-patterns that the URI must match. For example, the “year” token represent four consecutive digits.

Going with our example earlier, you wanted to match URIs that look like “blog/archive/2012”, you would type “blog/archive/” into the URI field, and then click the “year” token. Then enter the path to the template you want to load for matched URIs, and click the “Save” button.

Now when you point your browser to http://domain.com/blog/archive/2012, it will match your new route, and its template will be returned. In that template, whatever matched the “year” token even be available to it, as a ``year`` variable, so you can easily pass it off to ``blx.entries``:

.. code-block:: html

    {% set entries = blx.entries.after(year).before(year+1).find %}

    {% for entry in entries %}
        <li><a href="{{ entry.url }}">{{ entry.title }}</a></li>
    {% endfor %}

With that code in place, ``blx.entries`` will only return entries whose Post Dates are set on/after Jan 1 of the specified year, and before Jan 1 of the following year.
