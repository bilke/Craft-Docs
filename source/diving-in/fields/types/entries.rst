Entries
=======

Need to relate one entry to another?

How about relating multiple entries to each other?

The Entries Field Type has you covered.

--------

Settings
--------

.. |settings| image:: ../../../_static/images/diving-in/fields/entries-settings.png
   :alt: Entry Settings
   :scale: 100%
   :width: 250px

+------------+------------------------------------------------------------------------------------------------------+
| |settings| | Sources                                                                                              |
|            |    What section(s) are related Entries located in?                                                   |
|            |                                                                                                      |
|            | Limit                                                                                                |
|            |    Limit the number of selectable Entries.                                                           |
+------------+------------------------------------------------------------------------------------------------------+

--------

Entry Page
----------

Entries from the Edit Entry page allows you to see what related Entries are currently associated with this entry.

.. image:: ../../../_static/images/diving-in/fields/entries-entry.png
   :alt: Entries Entry Page
   :scale: 100%
   :width: 100%

You can also relate new Entries to the current entry.

.. image:: ../../../_static/images/diving-in/fields/entries-entry-add.png
   :alt: Entries Add Entry Page
   :scale: 100%
   :width: 100%

--------

Template
--------

In the below code, ``blogEntries`` refers to the field handle for an entries field type.

.. code-block:: html

   {% for entry in craft.entries.find() %}
       <h2>{{ entry.title }}</h2>
           {% for post in entry.blogEntries %}
               {% if loop.first %}<ul> {% endif %}
                   <li>{{ post.title }}</li>
               {% if loop.last %}</ul>{% endif %}
           {% endfor %}
   {% endfor %}
