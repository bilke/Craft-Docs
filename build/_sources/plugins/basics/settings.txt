Plugin Settings
===============

If your plugin requires settings, you first must tell Blocks which settings it has. You do that with the aptly named ``defineSettings()`` method. This method returns an array whose keys define the setting names, and values define the parameters (the type of value, etc.).

.. code-block:: php

   <?php
   namespace Blocks;

   class CocktailRecipesPlugin extends BasePlugin
   {
       // ...

       protected function defineSettings()
       {
           return array(
               'cocktailCategories' => array(AttributeType::Mixed, 'default' => array('Sours', 'Fizzes', 'Juleps')),
           );
       }
   }

Next you need to add a ``getSettingsHtml()`` method which returns the HTML for displaying your settings. We recommend that you create a template for the actual settings HTML, and load it up with ``blx()->templates->render()``.

.. code-block:: php

   <?php
   namespace Blocks;

   class CocktailRecipesPlugin extends BasePlugin
   {
       // ...

       public function getSettingsHtml()
       {
           return blx()->templates->render('cocktailrecipes/settings', array(
               'settings' => $this->getSettings()
           ));
       }
   }

**Note:** To make sense of that template path, see :ref:`plugin-template-paths`.

If you need to do any processing on your settings’ post data before they’re saved to the database, you can do it with the ``prepSettings()`` method:

.. code-block:: php

   <?php
   namespace Blocks;

   class CocktailRecipesPlugin extends BasePlugin
   {
       // ...

       public function prepSettings($settings)
       {
           // Modify $settings here...

           return $settings;
       }
   }
