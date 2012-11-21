Controllers
===========

Generally speaking, controllers are the middlemen between the front end of the CP/website and your plugin’s :doc:`services <services>`. They contain **action methods** which handle individual tasks.

A common pattern used throughout Blocks involves a controller action gathering post data, saving it on a :doc:`model <models>`, passing the model off to a :doc:`service <services>`, and then responding to the request appropriately depending on the service method’s response.

Action methods begin with the prefix “action”, followed by a description of what the method does (for example, ``actionSaveIngredient()``).

To create a controller, first create a new controllers/ subfolder within your plugin’s folder. Then create a new file in that folder, named with this format::

    [PluginHandle]_[ControllerName]Controller.php

If your plugin name is “Cocktail Recipes”, and you’re writing a controller to handle ingredient actions, the file would be named “CocktailRecipes_IngredientsController.php”.

Create a new class in that file, with the same name as the filename:

.. code-block:: php

   <?php
   namespace Blocks;

   class CocktailRecipes_IngredientsController extends BaseController
   {
       public function actionSaveIngredient()
       {
           ...
       }

       public function actionDeleteIngredient()
       {
           ...
       }
   }


Accessing Controller Actions
----------------------------

Blocks will route an incoming request to a controller action if one of the following is true:

* The first segment of the URL is “actions/” (configurable via ``$blocksConfig['actionTrigger']``), followed by an action path
* There is an “action” param in the URL query string or POST data, set to an action path

The “action path” tells Blocks which controller class and action method to call. In the context of plugins, they should look like this::

  [PluginHandle]/[ControllerName]/[ActionName]

If your plugin class is “CocktailRecipesPlugin”, your controller class name is “CocktailRecipes_IngredientsController”, and your action method name is “actionSaveIngredient”, the action path would be “cocktailRecipes/ingredients/saveIngredient”.

To get the URL of an action, you can use ``UrlHelper::getActionUrl($actionPath)``. We also provide a ``Blocks.getActionPath(actionPath)`` function for Javascript.


Allowing Anonymous Access to Actions
------------------------------------

By default, controller actions are only accessible to logged-in users. You can override that by changing the protected ``$allowAnonymous`` property on your controller class. To allow anonymous access to all of your controller’s actions, set it to ``true``:

.. code-block:: php

   <?php
   namespace Blocks;

   class CocktailRecipes_IngredientsController extends BaseController
   {
       protected $allowAnonymous = true;

       // ...
   }

Or if you only want to allow anonymous access to specific actions, you can set it to an array of those actions’ method names:

.. code-block:: php

   <?php
   namespace Blocks;

   class CocktailRecipes_IngredientsController extends BaseController
   {
       protected $allowAnonymous = array('actionSaveIngredient');

       // ...
   }


BaseController Methods
----------------------

BaseController makes several methods available to your action methods:

``$this->requireLogin()``
	Requires the user to be logged in. Useful if most of your actions should allow anonymous access, with a couple of exceptions. Set ``protected $allowAnonymous = true;`` and call ``$this->requireLogin()`` at the beginning of any action methods that should require login.

``$this->requireAdmin()``
	Requires the user to be logged in with an Admin account.

``$this->requirePostRequest()``
	Requires the current request to be sent over POST. We recommend you use this for all actions that change the system state in any way.

``$this->requireAjaxRequest()``
	Requires the current request to be sent over AJAX.

``$this->redirect($url, $terminate = true, $statusCode = 302)``
	Redirects the request to a different URL. ``$url`` can be either an absolute URL or just a URI.

``$this->redirectToPostedUrl($variables = array())``
	Redirects to the URL defined by the “redirect” POST parameter. If you pass any variables, they will be swapped out first. For example, ``$this->redirectToPostedUrl(array('drinkId' => $drink->id));`` would swap any instances of ``{drinkId}`` in the posted URL with ``$drink->id``.

``$this->returnJson($var)``
	JSON-encodes ``$var`` and responds with it, with the appropriate JSON headers.

``$this->returnErrorJson($error)``
	Responds with JSON, where ``response.error`` is set to ``$error``.
