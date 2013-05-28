Assets
=======

The Assets fieldtype allows you to store and reference media content in Craft.  Assets can be used to store PDFs, images, movies, sound files, and other media types.

[BRAD - SCREENSHOT  for Assets settings]

--------

Settings
--------

Sources
    What sources would you choose assets from?  You can set up new Asset Sources in :doc:`Settings → Assets </diving-in/settings/content/assets>`

Limit
    Limit the number of selectable assets

Entry Page
----------

[BRAD - SCREENSHOT of Assets on Entry form]


Template
----------

.. code-block:: html

    {% for image in entry.articleImages %}
        <img src="{{ image.getUrl('transformHandle') }}" height="{{ image.getHeight('transformHandle') }}" width="{{ image.getWidth('transformHandle') }}" alt="{{ entry.title }}">
    {% endfor %}
