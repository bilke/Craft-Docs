Global Blocks
=============

You can save any global site content in **global blocks**. Some examples include copyright info, site metadata, etc..

To create a new global block, go to Settings > Globals, and click the “New Block” button.

Once you’ve set up some global blocks, a new “Globals” tab will appear in the Content section. Click on that to edit the content of your global blocks.

As the name suggests, you can access your global block values from any template. You can get to them from the ``globals`` variable. For example, if you have a global block with the handle “copyright”, you can get to it like so:

.. code-block:: html

    <p class="copyright">{{ globals.copyright }}</p>
