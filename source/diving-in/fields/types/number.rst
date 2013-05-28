Number
=======

Need to store a number with your content?  Choose the Number field type!

The field allows you to set the minimum and maximum values, and how many decimal points will be output in templates.

The user’s current locale is taken into account when displaying the numeric values in the correct format.


Settings
--------
[BRAD - SCREENSHOT OF Number field type settings]

Min Value
    Set the lowest number that may be entered

Max Value
    Set the highest number that may be entered

Decimal Points
    The max number of decimal points to output in the template

Entry Page
--------

[BRAD - SCREENSHOT OF Number field on entry page]

Template
--------

.. code-block:: html
    {{ entry.fieldHandle}}