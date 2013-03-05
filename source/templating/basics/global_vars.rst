Global Variables
================

Craft makes a few global variables available via the  ``HttpRequestVariable``.

You can use these on any template.

blx -- instance of craft/app/components/core/variables/BlxVariable.php
now -- a PHP DateTime instance for getting info about the current date/time
siteName -- your site's name
siteUrl -- your site's URL
globals -- container for any Global's you've created (e.g. globals.site_description, etc.)
user -- the current user's UserModel instance, if someone's logged in.


``blx``
    instance of craft/app/components/core/variables/BlxVariable.php

``now``
    a PHP DateTime instance for getting info about the current date/time

``siteName``
    Your site's name

``siteUrl``
    Your site's URL

``globals``
    Container for any Global's you've created (e.g. globals.site_description, etc.)

``user``
    the current user's UserModel instance, if someone's logged in.

Segment Variables
================

You can reference URL segments in any template:

You can loop through the available segments:

.. code-block:: html

    {% for seg in craft.request.segments %}
    <li>{{ seg }}</li>
    {% endfor %}

And find out how many segments are available:

.. code-block:: html

    {{ craft.request.segments|length }}

And you can output an individual segment like so:

.. code-block:: html

    {{ craft.request.getSegment(x) }}

Where (x) is the segment number.  For instance, in:

``http://example.com/blog/entry_title``, ``blog`` is segment 1 and ``entry_title`` is segment 2.  To display what segment to echoes as, put this in your template:

.. code-block:: html

    {{ craft.request.getSegment(2) }}


