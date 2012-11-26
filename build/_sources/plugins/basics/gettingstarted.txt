Getting Started
===============

All of a plugin’s files are contained within a single folder, including its front-end resources. That folder lives in blocks/plugins/.

The first step in creating a plugin is to pick a name. Create a new folder in blocks/plugins/ using that name, lowercased and without spaces (this will be referred to as your **plugin handle** throughout the docs). So if your plugin’s name is “Cocktail Recipes”, it would be located at blocks/plugins/cocktailrecipes/.

Your Primary Plugin Class
-------------------------

Next up, you must create a new file where your plugin’s primary class will live. That file should be named after your plugin, with proper casing but without spaces, and appended with “Plugin.php” (ex: CocktailRecipesPlugin.php).

Your primary plugin class defines all of the things that Blocks needs to know about your plugin, such as the plugin’s name, version number, developer’s name and URL, and global settings.

Here’s a sample primary plugin file:

.. code-block:: php

   <?php
   namespace Blocks;

   class CocktailRecipesPlugin extends BasePlugin
   {
       function getName()
       {
           return Blocks::t('Cocktail Recipes');
       }

       function getVersion()
       {
           return '1.0';
       }

       function getDeveloper()
       {
           return 'Pixel & Tonic';
       }

       function getDeveloperUrl()
       {
           return 'http://pixelandtonic.com';
       }
   }

Let’s go over each of these functions:

``getName()``
	Returns the plugin’s name. If your plugin’s name should be translatable, wrap it in ``Blocks::t()`` (see :doc:`/plugins/basics/i18n`). For example, “Cocktail Recipes” would be a good candidate for translation support, but a proper noun like “Akismet” might not.

``getVersion()``
	Returns the plugin’s version number.

``getDeveloper()``
	Returns the developer’s name.

``getDeveloperUrl()``
	Returns the developer’s website URL.
