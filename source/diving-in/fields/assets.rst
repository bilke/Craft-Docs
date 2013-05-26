Assets
==========

The Assets fieldtype allows you to store and reference media content in Craft.  Assets can be used to store PDFs, images, movies, sound files, and other media types.

.. image:: ../../_static/images/diving-in/fields/assets.png

The Assets fieldtype has these settings:

Sources
    What sources would you choose assets from?

Limit
    Limit the number of selectable assets

Entry Page
----------

Image

Template
----------

.. code-block:: html

    {% for image in entry.articleImages %}
        <img src="{{ image.getUrl('transformHandle') }}" height="{{ image.getHeight('transformHandle') }}" width="{{ image.getWidth('transformHandle') }}" alt="{{ entry.title }}">
    {% endfor %}
