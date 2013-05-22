Globals
====================

**Globals** in Craft are basically single-use :doc:`fields <fields>`. They’re useful for storing things like your site’s copyright info, metadata, etc..

Globals are defined as **sets**. Each set has its own Name, Handle, and a :ref:`Field Layout <fieldLayouts>` that defines which fields belong to the set.

You can create globals in Settings → Globals. Once you have created a global set, a new “Globals” tab will appear in your CP. Each global set will get its own sidebar nav item on that page.

If you’ve set up any globals, a new “Globals” tab will appear in your CP. You will see a list of each of your global sets listed in the sidebar, and clicking on one will bring up all of that set’s fields.

Global sets are available to each of your templates, via their handles.

So for instance, if you have a global set with the handle “homepage”, and that set has a field within it called “intro”, you can output that Intro field’s value in your templates like so:

.. code-block:: html

    {{ homepage.intro }}

