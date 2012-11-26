Template Folder Structure
===============

In Blocks, all HTML rendering is done via templates – even for the Control Panel itself. There are no PHP-based view files.

The templates for the front-end of your site are stored in ``'<site_root>/blocks/templates'``.

The ".html" template extensions are never required in Blocks template paths, although they won't hurt if you prefer them.

Blocks leave the folder structure for templates up to the designer.  The ``'templates'`` folder is considered the root reference when calling other templates.  For instance, if you wished to  ``include`` a template stored in ``'templates/inc'`` then you would use this code:

.. code-block:: html

    {% include "inc/_footer" %}

You can reference template folders or files with an underscore so that they are not directly accessible.
