Active Record Models
====================

Active record models (or “records”) are like :doc:`models </plugins/advanced/models>`, except with a database-facing layer built on top. On top of all the things that models can do, records can:

- Define database table schemas
- Represent rows in the database
- Find, alter, and delete rows

**Note:** Records’ ability to modify the database means that they should never be used to transport data throughout the system. Their instances should be contained to :doc:`services </plugins/advanced/services>` only, so that services remain the one and only place where system state changes ever occur.

When a plugin is installed, Blocks will look for any records provided by the plugin, and automatically create the database tables for them.

To create a record, first create a new records/ subfolder within your plugin’s folder. Then create a new file in that folder, named with this format::

    [PluginHandle]_[RecordName]Record.php

If your plugin name is “Cocktail Recipes”, and your record name is “Ingredient”, the file would be named “CocktailRecipes_IngredientRecord.php”.

Create a new class in that file, with the same name as the filename:

.. code-block:: php

   <?php
   namespace Blocks;

   class CocktailRecipes_IngredientRecord extends BaseRecord
   {
       public function getTableName()
       {
           return 'cocktailrecipes_ingredients';
       }

       public function defineAttributes()
       {
           return array(
               'name' => AttributeType::String,
               'type' => array(AttributeType::Enum, 'values' => "alcohol,mixer,other"),
           );
       }
   }

``getTableName()`` returns the name of the database table the model is associated with (sans table prefix). By convention, tables created by plugins should be prefixed with the plugin name and an underscore.

``defineAttributes()`` returns an array of attributse which map back to columns in the database table.


Defining Relations
------------------

If your record should have any relationships with other tables, you can specify them with the ``defineRelations()`` function:

.. code-block:: php

   <?php
   namespace Blocks;

   class CocktailRecipes_IngredientRecord extends BaseBlockType
   {
       // ...

       public function defineRelations()
       {
           return array(
               'drinks' => array(static::HAS_MANY, 'CocktailRecipes_DrinkRecord', 'ingredientId'),
           );
       }
   }

``defineRelations()`` works basically the same as `CActiveRecord <http://www.yiiframework.com/doc/api/1.1/CActiveRecord>`_’s `relations() <http://www.yiiframework.com/doc/api/1.1/CActiveRecord#relations-detail>`_ method (see `Relational Active Record <http://www.yiiframework.com/doc/guide/1.1/en/database.arr>`_ from the Yii docs), with two differences:

- You don’t need to specify the namespace of the related record class in the second argument (defaults to the Blocks namespace)
- You don’t need to specify the foreign key column name in BELONGS_TO relations (defaults to the relation name appended with “Id”)


Defining Indexes
----------------

If you want to define any indexes on your table, you can do it with the ``defineIndexes()`` function:

.. code-block:: php

   <?php
   namespace Blocks;

   class CocktailRecipes_IngredientRecord extends BaseBlockType
   {
       // ...

       public function defineIndexes()
       {
           return array(
               array('columns' => array('name', 'type'), 'unique' => true),
           );
       }
   }


Further Reading
---------------

BaseRecord is an instance of Yii’s `CActiveRecord <http://www.yiiframework.com/doc/api/1.1/CActiveRecord>`_ class, so everything CActiveRecord can do, BaseRecord can do as well.
