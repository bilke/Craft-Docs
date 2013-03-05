Global Variables
================

Craft makes the following variables available to all templates:

``blx``
   Most of Craft’s template variables are tucked away in ``blx``:


   * :doc:`/templating/reference/variables/craft.entries` – used to access your site’s entries
   * :doc:`/templating/reference/variables/craft.request` – used to access information about the current request
   * :doc:`/templating/reference/variables/craft.users` – used to access your site’s users

``now``
   A :doc:`date variable <dates>` set to the current date and time.

   .. code-block:: html

      Today is {{ now.format('M j, Y') }}.

``siteName``
   The name of your site, as defined in Settings > General.

   .. code-block:: html

      <h1>{{ siteName }}</h1>

``siteUrl``
   The URL of your site, as defined in Settings > General.

   .. code-block:: html

      <link rel="home" href="{{ siteUrl }}">

``user``
   A :doc:`user variable </templating/reference/variables/craft.users>` set to the currently logged-in user (if there is one).

   .. code-block:: html

      {% if user %}
         Welcome, {{ user.friendlyName }}!
      {% endif %}
