Date
=======

Need to store custom date and time information?  This is the field for you.

There is an additional checkbox to show the time, or you may have the date only.

Dates and times are both formatted for display in the current user’s locale.

Template
----------


.. code-block:: html 

    {{ entry.date }}

Need to format your date?  See :doc:`date variable formatting </reference/templating/reference/variables/dates>` 

.. code-block:: html

    {{ entry.date.format('F j, Y') }}