Templates
=========

In Blocks, all HTML rendering is done via :doc:`templates </templating/index>` – even for the Control Panel itself. There are no PHP-based view files.

If your plugin needs its own templates, you can place them in a templates/ folder within your plugin’s folder (ex: blocks/plugins/cocktailrecipes/templates/).

.. _plugin-template-paths:

Plugin Template Paths, Explained
--------------------------------

To manually render a template from your plugin’s PHP code, call ``blx()->templates->render('PluginHandle/path/to/template')`` (see :doc:`/plugins/apis/templates`).

That path you pass to ``render()`` is your **plugin template path**. Plugin template paths are made up of two parts::

  [Lowercase plugin handle]/[Template path, relative to your plugin’s templates/ folder]

So, if you were to call ``blx()->templates->render('cocktailrecipes/settings')``, for example, Blocks would check the following locations, in this order:

#. blocks/app/templates/cocktailrecipes/settings.html
#. blocks/app/templates/cocktailrecipes/settings/index.html
#. **blocks/plugins/cocktailrecipes/templates/settings.html**
#. **blocks/plugins/cocktailrecipes/templates/settings/index.html**

As you can see, the “templates/” folder segment is assumed, so there’s no need to include it when calling ``render()``.

Giving your Plugin its own Control Panel Section
------------------------------------------------

If you want to give your plugin its own Control Panel section, add this to your primary plugin class:

.. code-block:: php

   <?php
   namespace Blocks;

   class CocktailRecipesPlugin extends BasePlugin
   {
       // ...

       public function hasCpSection()
       {
           return true;
       }
   }

With that set, your plugin will show up in the CP nav. Clicking on it will take you to admin/PluginHandle, which will route to index.html within your plugin’s templates/ folder.

Your plugin’s CP section can have as many pages as you’d like. To link to other pages, use the ``{{ url() }}`` template function just like you would in your site’s templates (ex: ``href="{{ url('cocktailrecipes/all') }}``).

Giving your plugin an icon
~~~~~~~~~~~~~~~~~~~~~~~~~~

If you want to give your plugin a custom sidebar icon, simply place it in your plugin’s resources/ folder with the name “icon-16x16.png”. The next time you load the CP, Blocks will auto-detect it and display it next to your plugin’s name in the sidebar.

You can also save a hi-res version for people with hi-res displays, with the name “icon-32x32.png”. (Note that Blocks won’t even look for the 32x32 version unless you’ve got the 16x16 icon in there.)

Extending the CP layout
~~~~~~~~~~~~~~~~~~~~~~~

Most of the time you’ll want your plugin’s templates to look like the rest of the CP. To do that, they must extend the ``_layouts/cp`` layout.

The ``_layouts/cp`` layout expects two variables to be set: ``title`` and ``content``. ``title`` is used to set the page’s ``<title>`` tag value, and ``content`` defines the HTML that should show up in the main #content div.

.. code-block:: html

   {% extends "_layouts/cp" %}

   {% set title = "Cocktail Recipes"|t %}

   {% set content %}
       <p>Hello!</p>
   {% endset %}

White it’s not required, you should also set a ``header`` variable, which defines what goes in the page’s ``<header>`` up top:

.. code-block:: html

   {% extends "_layouts/cp" %}

   {% set title = "Cocktail Recipes"|t %}

   {% set header %}
       <h1>{{ title }}</h1>
   {% endset %}

   {% set content %}
       <p>Hello!</p>
   {% endset %}

If you want to specify a “back” button in the ``<header>``, the ``header`` variable is the place to put that too:

.. code-block:: html

   {% set header %}
       <h1>{{ title }}</h1>

       <ul class="left">
          <li><a class="backbtn" href="{{ url('cocktailrecipes') }}">
              {{ "Cocktail Recipes"|t }}
          </a></li>
       </ul>
   {% endset %}

Dynamic URL Routing
-------------------

By default, incoming requests are routed to a template with the same path as the request URI (possibly with “.html” or “/index.html” appended to it). Most of the time this works well, but it falls short for dynamic URLs, such as URLs where one of the segments is an ID or a slug. For example, you might want to route URLs that look like “admin/cocktailrecipes/123” to templates/_edit.html.

You can accomplish this by registering **routes**. Blocks gives plugins a chance to register new CP routes via the registerCpRoutes hook. Simply add a new method to your plugin called ``hookRegisterCpRoutes()``:

.. code-block:: php

   <?php
   namespace Blocks;

   class CocktailRecipesPlugin extends BasePlugin
   {
       // ...

       public function hookRegisterCpRoutes()
       {
           return array(
               'cocktailrecipes\/(?P<recipeId>\d+)' => 'cocktailrecipes/_edit',
           );
       }
   }

As you can see, the method returns an array of routes. The keys are regular expressions that the request URI will be matched against, and the values are template paths to be loaded when a successful match occurs.

If your regular expression includes any named subpatterns, e.g. ``(?P<recipeId>\d+)``, their match values will become available to the template as variables of the same name. So in this example, if the URI was “admin/cocktailrecipes/123”, the cocktailrecipes/_edit template would get loaded, and a ``{{ recipeId }}`` variable would be availade to it, with the value “123”.
