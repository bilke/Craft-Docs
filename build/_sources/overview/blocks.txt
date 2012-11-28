Content Blocks
==============

Blocks gets its name from **content blocks**. It’s our word for “fields”. You can assign them to :doc:`entries <entries>`, :doc:`pages <pages>`, :doc:`users <users>`, and :doc:`assets <assets>`. You can even create :doc:`global blocks <globals>`.

Content blocks enable you to tailor your site’s content to perfectly fit your needs. Blocks makes no assumptions about the content requirements of your site, leaving it entirely up to you.

Each content block comes with the following settings:

* Name
* Handle
* Instructions
* Whether the block should be required
* Whether the block should be translatable (if the Languages packgae is installed)
* What type of block it is
* Additional settings provided by the selected blocktype


Accessing Block Values in Templates
-----------------------------------

Your content block values become accessible just like any other property on the entities you’ve atteched them to.

For example, if you have created a page block with the handle “description”, you can output it like this from your page’s template:

.. code-block:: html

    {{ page.description }}
