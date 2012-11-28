Templating
==========

In Blocks, all HTML rendering is done via **templates** (even for the Control Panel itself). There are no PHP-based view files.

Templates are files that live within your blocks/templates/ folder. The structure of your templates is completely up to you – you can put templates at the root of that folder, or you can nest them in subdirectories. It all depends on your site’s needs.

Blocks uses `Twig <http://twig.sensiolabs.org/>`_ to parse your templates. For a primer on Twig’s templating syntax, see their `Twig for Template Designers <http://twig.sensiolabs.org/doc/templates.html>`_ documentation.


You build the presentation and output for your site using templates.


.. The Basics
.. ----------

.. toctree::
   :titlesonly:

   basics/blocks
   basics/variables



DRY
-------------------------

.. toctree::
   :titlesonly:

   dry/includes
   dry/extends
   dry/sets


Outputting Content
----------------------------

.. toctree::
   :titlesonly:

   content/entries
   content/sections
   content/blocks
   content/assets
   content/links
