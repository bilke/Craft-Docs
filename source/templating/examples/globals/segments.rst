Segment Variables
================

Segment variables allow you to grab data from your URI to use in your templates.  

There are a variety of approaches to accessing your segment variables.

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


