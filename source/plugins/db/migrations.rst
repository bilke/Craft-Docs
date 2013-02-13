Migrations
==========

If your schema changes over the life of your plugin, you can write a **migration** to keep existing installations updated with the latest schema. Blocks automatically checks for new migrations whenever a plugin’s version number changes.

Blocks comes with a handy shell script to get you started. To create a new migration, open up Terminal, and run the following commands::

    cd /path/to/blocks/app/console
    chmod 777 yiic
    ./yiic migrate create MigrationDescription PluginHandle

The **MigrationDescription** should contain letters, digits and/or underscore characters only.

The **PluginHandle** is the name of your primary plugin class minus the word 'Plugin'.  For 'CocktailRecipesPlugin', it would be 'CocktailRecipes'.

That will create a new migration file in your plugins’ migrations/ folder (and create that folder if it doesn’t exist), which will look something like this:

.. code-block:: php

   <?php
   namespace Blocks;

   class m121019_144608_plugin_handle_migration_name extends BaseMigration
   {
       public function safeUp()
       {
           return true;
       }
   }

Put your migration code in that ``safeUp()`` function.

A full list of `yiic migrate` commands are as follows:

``yiic migrate create MigrationDescription PluginHandle``
  Creates a new migration in your plugins’ migrations/ folder with the given **MigrationDescription**.

``yiic migrate history PluginHandle``
  Shows a list of migrations that have already been ran for this plugin.

``yiic migrate new PluginHandle``
  Shows a list of migrations that have not been applied yet, but should be.

``yiic migrate up PluginHandle``
  Runs all new migrations for a plugin.

Installing new Records
----------------------

If you add entirely new records to your plugin, you can easily get their tables created with their ``createTable()`` and ``addForeignKeys()`` functions, provided by BaseRecord:

.. code-block:: php

   $ingredientRecord = new CocktailRecipes_IngredientRecord();
   $drinkRecord = new CocktailRecipes_DrinkRecord();

   $ingredientRecord->createTable();
   $drinkRecord->createTable();

   $ingredientRecord->addForeignKeys();
   $drinkRecord->addForeignKeys();

It’s important to call all of the ``createTable()`` methods before calling the ``addForeignKeys()`` methods so you can be sure that all of the tables are in place before trying to create foreign keys between the tables.
