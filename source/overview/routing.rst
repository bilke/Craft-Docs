How Requests Get Routed
=======================

When a request comes in, Craft analyzes it to determine how to handle it. Here is an outline of what that entails:

#. **Is it a resource request?**

   Resource request URIs begin with “resources/” (a word that is customizable via the “resourceTrigger” config setting in craft/config/general.php). They are used to serve CP resources, user photos, etc..

#. **Is it an action request?**

   Action requests either have a URL which begins with “actions/” (a word that is customizable via the “actionTrigger” config setting in craft/config/general.php), or an “action” param in POST or the query string. Action requests get routed to a controller action, which are used to perform… *actions*. Controller actions are built into the system for core actions, but plugins may also have Controllers that define their own custom actions.

    .. container:: tip

       The request doesn’t necessarily end after a controller has been called. The controller may allow it to keep going.

#. **Is it an entry request?**

   If the URI matches an :doc:`entry <entries>` URI, that entry’s section’s template will get loaded, and the matched entry will be made available to the template via a pre-populated ``entry`` variable.

    .. container:: tip

       While entries are the only built-in elements that can be accessed directly via a URL, we will soon be adding the ability for plugins to create custom element types which may also opt to be directly accessible via URLs as well.

#. **Does the URI match any dynamic template routes?**

   If the URI matches any :ref:`dynamic template routes <dynamic-template-routes>`, the template specified by that route will get loaded. If the route contains any tokens, they will be available as variables to that template.

#. **Does the URI match a template path?**

   Finally, Craft will see if the URI is a valid template path. If it is, it will return the matched template. Note that if any of the URI segments begin with an underscore (‘_’), Craft will return a 404, since template path segments that begin with an underscore are considered “hidden” from direct access.

#. **404**

   If none of those checks are successful, Craft will return a 404. You can customize your site’s 404 page by placing a “404.html” template at the root of your craft/templates/ folder.


.. _dynamic-template-routes:

Dynamic Template Routes
-----------------------

There are times when you want an incoming request to route directly to a template, but you don’t want the URI to match the template path. A good example of this is dynamic URLs, such as a yearly archive template, where you want the year to be one of the segments in the URL (e.g. “blog/archive/2012”). It would be silly to create a new template for every year. Which is why Craft allows you to create **dynamic template routes**.

To create a new route, go to Settings → Routes, and click the “New Route” button. A modal window will appear where you can define the route properties, of which there are two:

* What should the URI look like?
* Which template should get loaded?

The first setting comes with a few “tokens”. When you click on one, it will get inserted into the URI setting. Those tokens represent sub-patterns that the URI must match. For example, the “year” token represent four consecutive digits.

Going with our example earlier, you wanted to match URIs that look like “blog/archive/2012”, you would type “blog/archive/” into the URI field, and then click the “year” token. Then enter the path to the template you want to load for matched URIs, and click the “Save” button.

Now when you point your browser to http://domain.com/blog/archive/2012, it will match your new route, and its template will be returned. In that template, whatever matched the “year” token even be available to it, as a ``year`` variable, so you can easily pass it off to ``craft.entries``:

.. code-block:: html

    {% set entries = craft.entries.after(year).before(year+1).find %}

    {% for entry in entries %}
        <li><a href="{{ entry.url }}">{{ entry.title }}</a></li>
    {% endfor %}

With that code in place, ``craft.entries`` will only return entries whose Post Dates are set on/after Jan 1 of the specified year, and before Jan 1 of the following year.
