Date
====

If you need to store date and time information for your Entry, the Date Field Type has you covered.

There is an additional checkbox to show the time, or you may have the date only.

Dates and times are both formatted for display in the current user’s locale.

--------

Settings
--------

.. |settings| image:: ../../../_static/images/diving-in/fields/date-settings.png
   :alt: Date Settings
   :scale: 100%
   :width: 175px

+------------+------------------------------------------------------------------------------------------------------+
| |settings| | Show time?                                                                                           |
|            |    Whether or not to show a separate time field along with the date.                                 |
+------------+------------------------------------------------------------------------------------------------------+

--------

Entry Page
----------

.. |entry1| image:: ../../../_static/images/diving-in/fields/date-entry1.png
   :alt: Date Entry
   :scale: 100%
   :width: 230px

+----------+--------------------------------------------------------------------------------+
| |entry1| | From the Entry page, you are given one or two fields,                            |
|          | depending on whether you checked ”Show time?” under the Field Type’s settings. |
+----------+--------------------------------------------------------------------------------+

.. |entry2| image:: ../../../_static/images/diving-in/fields/date-entry2.png
   :alt: Date Entry
   :scale: 100%
   :width: 230px

+----------------------------------------------------------------------------------+----------+
| When you click in the date input, you’re given a calendar to choose a date from. | |entry2| |
+----------------------------------------------------------------------------------+----------+

.. |entry3| image:: ../../../_static/images/diving-in/fields/date-entry3.png
   :alt: Time Entry
   :scale: 100%
   :width: 115px

+----------+-------------------------------------------------------------------------------------+
| |entry3| | When you click in the time input, you’re given a time picker to choose a time from. |
+----------+-------------------------------------------------------------------------------------+

You can also manually type in the date and/or time for either of the fields.

--------

Template
--------

.. code-block:: html 

    {{ entry.date }}

Need to format your date?  See :doc:`date variable formatting </reference/templating/reference/variables/dates>` 

.. code-block:: html

    {{ entry.date.format('F j, Y') }}
