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

   class “CocktailRecipes_IngredientsController extends BaseController
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

There are two ways to access controller actions: :ref:`action-urls` and :ref:`action-post-requests`.

.. _action-urls:

Action URLs
~~~~~~~~~~~
Action URLs are URLs which begin with either “admin.php” or “index.php” (the entry point is not significant), followed by a URI that meets the following criteria:

1. The first segment matches the actionTrigger config setting (“actions” by default)
2. The second segment matches a plugin name (e.g. “cocktailRecipes”)
3. The third segment matches one of that plugin’s controller names (e.g. “ingredients”)
4. The fourth segment matches one of that controller’s actions (e.g. “saveIngredient”)

To pull it all together, an action URL might look like: admin.php/actions/cocktailRecipes/ingredients/saveIngredient

In the off chance that a website actually has a section whose URIs should begin with “actions/”, we have made that first action URL segment configurable (via the actionTrigger config setting). But rather than require developers to check the actionTrigger value every time they need to output an action URL, we have provided a helper function, ``UrlHelper::getActionUrl('plugin/controller/action')``, which accepts everything but that first actionTrigger segment, and returns the full action URL. A corresponding template function has also been provided, ``{{ actionUrl('plugin/controller/action') }}``:

.. code-block:: html

	<a href="{{ actionUrl('cocktailRecipes/ingredients/saveIngredient') }}">Save</a>

.. _action-post-requests:

Action POST Requests
~~~~~~~~~~~~~~~~~~~~
Alternatively, you can reach a controller action regardless of URL by passing a POST parameter with the request by the name of “action”. Its value should be identical to what you would pass into ``UrlHelper::getActionUrl()`` – “plugin/controller/action”:

.. code-block:: html

	<input type="hidden" name="action" value="cocktailRecipes/ingredients/saveIngredient">

This is handy for form submission, where you want the original form to reload itself in the event of a validation error. In that case, you can leave the ``<form>`` tag’s ``action=""``, which will leave the current URL in-tact for the response, unless of course your controller action redirects the browser to a different URL.


Allowing Anonymous Access to Actions
------------------------------------

By default, controller actions are only accessible to logged-in users. You can override that by changing the protected ``$allowAnonymous`` property on your controller class. To allow anonymous access to all of your controller’s actions, set it to ``true``:

.. code-block:: php

   protected $allowAnonymous = true;

Or if you only want to allow anonymous access to specific actions, you can set it to an array of those actions’ method names:

.. code-block:: php

   protected $allowAnonymous = array('actionSaveIngredient');


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
