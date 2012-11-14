Migrations
==========

If your schema changes over the life of your plugin, you can write a **migration** to keep existing installations updated with the latest schema. Blocks automatically checks for new migrations whenever a plugin’s version number changes.

Blocks comes with a handy shell script to get you started. To create a new migration, add a migrations/ subfolder to your plugin’s folder, open up Terminal, and run the following commands::

    cd /path/to/blocks/app/console
    chmod 777 yiic
    ./yiic migrate create /path/to/YourPlugin/migrations/MigrationName

That will create a new migration file in your migrations/ folder, which will look something like this:

.. code-block:: php

   <?php
   namespace Blocks;

   class m121019_144608_migration_name extends \CDbMigration
   {
       public function safeUp()
       {
           return true;
       }
   }

Put your migration code in that ``safeUp()`` function.


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
