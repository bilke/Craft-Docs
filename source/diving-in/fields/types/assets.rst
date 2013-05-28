Assets
======

The Assets Field Type allows you to store and reference media content in Craft.  Assets can be used to store PDFs, images, movies, sound files, and other media types.

--------

Settings
--------

.. |settings| image:: ../../../_static/images/diving-in/fields/assets-settings.png
   :alt: Assets Settings
   :scale: 100%
   :width: 250px

+------------+------------------------------------------------------------------------------------------------------+
| |settings| | Sources                                                                                              |
|            |    What sources will you choose Assets from?                                                         |
|            |    You can set up new Asset Sources in :doc:`Settings → Assets </diving-in/settings/content/assets>` |
|            |                                                                                                      |
|            | Limit                                                                                                |
|            |    Limit the number of selectable Assets                                                             |
+------------+------------------------------------------------------------------------------------------------------+

Entry Page
----------

Assets from the Edit Entry page allows you to see which Assets are currently associated with this entry.

.. image:: ../../../_static/images/diving-in/fields/assets-entry.png
   :alt: Assets Entry Page
   :scale: 100%
   :width: 100%

You can also add new Assets to the current entry.

.. image:: ../../../_static/images/diving-in/fields/assets-entry-add.png
   :alt: Assets Add Entry Page
   :scale: 100%
   :width: 100%


Template
----------

.. code-block:: html

    {% for image in entry.articleImages %}
        <img src="{{ image.getUrl('transformHandle') }}" height="{{ image.getHeight('transformHandle') }}" width="{{ image.getWidth('transformHandle') }}" alt="{{ entry.title }}">
    {% endfor %}
