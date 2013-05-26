.. |icon| image:: ../../../_static/images/settings/sections.png
   :alt: Section Settings Icon
   :width: 50px
   :scale: 100%
   :align: middle

|icon| Settings → Sections
==========================

Each section stores a new channel of :doc:`entries <entries>`, with its own set of fields tailored to the needs of the content, and its own URL format.

Craft Core allows you to have one section. It's already created for you by default (“Blog”), but you can customize that if you'd like (perhaps you’d prefer “News” instead), or delete it altogether. If the site also has a need for a “Case Studies” section, for example, you would need to buy :doc:`/packages/publishpro` to lift the one-section restriction.

.. image:: ../../_static/images/settings/section.png

You can manage your sections by going to Settings → Sections. Each section gets the following settings:

Name
    What this section will be called in the CP

Handle
    How you'll refer to this section in the templates

“Title” Label
    What do you want the entries "Title" fields to be labeled?

Entries in this section have their own URLs
    Checkbox to indicate if entries can be accessed by their own URLs in the templates
    
Entry URL Format
    What the entry URLs should like like. ``{slug}`` is required, but it can also include any entry properties, e.g. ``{postDate.year}``

Entry Template
    The template to use when an entry's URL is requested.

The last two settings only show up if you have opted to give entries in the section their own URLs.

Each section also gets its own :ref:`field layout <fieldLayouts>`, which defines which fields will be available to its entries.

