Fields
======

In Craft, all of your site’s content is entered into **fields**. Fields are created globally, and attached as needed to your :doc:`sections <sections>`, :doc:`globals <globals>`, users, and assets.

To manage your site’s fields, go to Settings → Fields. You’ll notice that they are organized into **groups**. In Craft, field groups are purely an organizational tool; they pose no actual restrictions on the fields within them. Fields can even be moved between groups as desired.

Each field has a name, handle, optional instructions, a fieldtype, and possibly additional settings provided by the fieldtype. **Fieldtypes** define what kind of field it is. Craft comes with 14 fieldtypes built in:

.. toctree::
   :titlesonly:

   checkboxes
   color
   date
   dropdown
   entries
   table
   links
   multiselect
   number
   plain-text
   radio-buttons
   rich-text
   table
   users

Plugins can add additional fieldtypes as well.


.. _fieldLayouts:

Field Layouts
-------------

Everything that can have fields in Craft does so via **field layouts**. Field layout pages are sprinkled throughout the Settings section of the CP. For example, sections’ field layouts can be edited from the “Field Layout” tab of a section’s settings.

Some field layouts allow you to customize the tabs that hold the fields; some don’t. You can tell if a given field layout’s tabs are customizable by the presence of a “New Tab” button between the top and bottom portions of the page. Layouts that have editable tabs will also let you drag entire field groups into the workspace, as a starting point for a new tab.

.. container:: tip

   **Note:** Even if you drag a field group into your field layout, a new custom tab is still being created behind the scenes. So if you add new fields to that field group down the road, you’ll still need to update your field layouts if you wish for those fields to be selected too.


Accessing Field Values in Templates
-----------------------------------

Your field values are accessible just like any other property on the things you’ve attached them to. For example, if you attach a field with the handle “description” to a section, you can output it like this from that section’s template:

.. code-block:: html

    {{ entry.description }}

Craft Core includes many fieldtypes
-----------------------------------

.. toctree::
   :titlesonly:

   checkboxes
   color
   date
   dropdown
   entries
   table
   links
   multiselect
   number
   plain-text
   radio-buttons
   rich-text
   table
   users
