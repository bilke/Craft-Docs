Block Types
===========

Whenever someone creates a new content block in Blocks, they must specify what type of block it is. The system comes with a handful of block types baked in, and we’ve made it extremely easy for plugins to add new ones.

First, create a new subfolder within your plugin’s folder, called blocktypes/. Create a new file in that folder, named with this format::

    [PluginHandle]_[BlockTypeName]BlockType.php

If your plugin name is “Cocktail Recipes”, and your block type name is “Ingredient List”, the file would be named CocktailRecipes_IngredientListBlockType.php.

Create a new class in that file, with the same name as the filename:

.. code-block:: php

   <?php
   namespace Blocks;

   class CocktailRecipes_IngredientListBlockType extends BaseBlockType
   {
       public function getName()
       {
           return Blocks::t('Ingredient List');
       }

       public function getInputHtml()
       {
           return blx()->templates->render('cocktailrecipes/ingredientlist/input');
       }
   }

That ``getName()`` method should look familiar – your primary plugin class has the same method. Difference is, this time it’s returning the name of your block type, rather than the name of your entire plugin.

``getInputHtml()`` does just what it says: it returns your block type’s input HTML. We recommend that you store the actual HTML in a template, and load it via ``blx()->templates->render()``.

Giving your Block Type Some Settings
------------------------------------

If your block type requires settings, you first must tell Blocks which settings it has. You do that with the aptly named ``defineSettings()`` method. This method returns an array whose keys define the setting names, and values define the parameters (the type of value, etc.).

.. code-block:: php

   protected function defineSettings()
   {
       return array(
           'initialSlots' => array(AttributeType::Number, 'min' => 0)
       );
   }

With that in place, you can call ``$this->getSettings()`` from any method within your widget, and get a :doc:`model </plugins/advanced/models>` class back, prepopulated with your widget’s settings.

Next you need to add a ``getSettingsHtml()`` method which returns the HTML for displaying your settings. Like ``getInputHtml()``, we recommend that you create a template for the actual settings HTML, and load it up with ``blx()->templates->render()``.

.. code-block:: php

   public function getSettingsHtml()
   {
       return blx()->templates->render('cocktailrecipes/ingredientlist/settings', array(
           'settings' => $this->getSettings()
       ))
   }

For a plugin, the path that you pass into render should in in the format ``{lowercase plugin handle}/{relative path to your template from your plugin’s template folder}``.

The above example will first try to resolve to:

``plugins/cocktailrecipes/templates/ingredientlist/settings.html``

If that does not exist, it will look for:

``plugins/cocktailrecipes/templates/ingredientlist/settings/index.html``

If you need to do any processing on your settings’ post data before they’re saved to the database, you can do it with the ``prepSettings()`` method:

.. code-block:: php

   public function prepSettings($settings)
   {
       // Modify $settings here...

       return $settings;
   }

Customizing the Database Column Type
------------------------------------

When someone creates a new content block using your block type, your block type can define what type of database column gets created within the content table. By default, BaseBlockType sets the column to VARCHAR(255), but you can override that with ``defineContentAttribute()``:

.. code-block:: php

   public function defineContentAttribute()
   {
       return AttributeType::Mixed;
   }

You may also set ``defineContentAttribute()`` to return ``false`` if your block type doesn’t need its own column in the content table. This might be the case if your block type stores its content in its own database table, for instance.

Modifying your Input’s Post Data
--------------------------------

If you need to do any processing on your input’s post data before it’s saved to the database, you can do it with the ``prepPostData()`` function:

.. code-block:: php

  protected function prepPostData($value)
  {
      // Modify $value here...

      return $value;
  }

Events
------

BaseBlockType provides three events that you can latch code onto:

``onBeforeSave()``
    Called right before a block is saved.

``onAfterSave()``
    Called right after a block is saved, and ``$this->model->id`` is set.

``onAfterEntitySave()``
    Called right after an entity is saved, and ``$this->entity->id`` is set.
