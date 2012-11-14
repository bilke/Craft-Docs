Template Variables
==================

Blocks allows plugins to provide their own template variables, accessible from the ``{{ blx }}`` global variable (e.g. ``{{ blx.pluginName }}``).

To give your plugin a template variable, first create a new variables/ subfolder within your plugin’s folder. Then create a new file in that folder, named with this format::

    [PluginHandle]Variable.php

If your plugin name is “Cocktail Recipes”, the variable file would be named “CocktailRecipesVariable.php”.

Create a new class in that file, with the same name as the filename:

.. code-block:: php

   <?php
   namespace Blocks;

   class CocktailRecipesVariable
   {
       public function findIngredients($criteria)
       {
           $criteria = new CocktailRecipes_IngredientCriteria($criteria);
           return blx()->cocktailRecipes->findIngredients($criteria);
       }

       public function findIngredient($criteria)
       {
           $criteria = new CocktailRecipes_IngredientCriteria($criteria);
           return blx()->cocktailRecipes->findIngredient($criteria);
       }
   }

The specific functions that go in your variable are entirely up to you.

Many of your template variable methods will likely be simple wrappers for your :doc:`service <services>` API methods. It’s important to remember not to expose state-changing methods, however.
