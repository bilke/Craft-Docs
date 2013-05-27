Localize
========

If your site caters to people in more than one language or region, you can use the Localize package to handle content translations and region targeting. Its features include:

* Entry translations
* Globals translations
* Email message translations (when paired with :doc:`rebrand`)
* Section-locale targeting (when paired with :doc:`publishpro`)
* Locale user permissions

Here’s a breakdown of what you’ll get:

* A new “Locales” page in Settings, where you can choose which locales your site targets, and prioritize them.
* :doc:`/introduction/overview/fields` get a new “This field is translatable” checkbox setting that defines whether the field’s value should be set on a per-locale basis, or globally.
* :doc:`/introduction//overview/sections` get a new “Locales” setting that defines which locales each section should be available in.
* Sections’ URL Format settings become a table where each section locale gets its own URL Format value.
* Entries, Global Sets, and email message modals (if :doc:`rebrand` is installed) get Locale-switching dropdown menus beside their page/modal headings, for choosing which locale’s content is currently being edited.
* Each locale gets its own user permission, so you can choose which users/groups can edit which locales.


Choosing Locales on the Front-end
---------------------------------

You can tell Craft which locale’s content it should be outputting by setting a “CRAFT_LOCALE” constant in index.php.

The easiest way to create a localized site in Craft is to create multiple index.php files, either in subdirectories of your web root (e.g. http://example.com/nl/), or in their own web roots for entirely separate domains (e.g. http://nl.example.com or http://example.nl).

If you don’t define a CRAFT_LOCALE constant, Craft will default to whichever locale is listed first in Settings → Locales (the “primary” locale). So you’ll only need to actually define it for site entry points that aren’t going to use the primary locale.

For example, if you want http://example.com to serve your site’s primary locale, and you want http://example.com/nl/ to serve Dutch, create a new nl/ folder in your site’s web root, copy the index.php file into it, and place this in there before the ``require_once`` line:

.. code-block:: php

	define('CRAFT_LOCALE', 'nl');

At that point, when you go to http://example.com/nl/…, you’ll see that any content which has been translated into Dutch will be presented in Dutch.

There’s one problem though. All of your URLs will still be pointing to http://example.com/…, not /nl/…. To fix that, set one additional constant in your nl/index.php file:

.. code-block:: php

	define('CRAFT_SITE_URL', 'http://example.com/nl/');

With that in place, any URLs that are generated using the ``url()`` :doc:`template function </reference/templating/reference/functions>` will begin with “http://example.com/nl/” rather than “http://example.com/”. Easy enough!
