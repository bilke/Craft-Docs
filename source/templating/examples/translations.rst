Template Translations
=====================

While the Localize package will enable all of your site’s *content* to be translated, it won’t help you translate any text that’s hard-coded into your template files. Not to worry though, because Craft templates are inherently translatable already.

To make some text in your template translatable, all you need to do is run it through the :ref:`translate <t>` filter.

For example, let’s say you had this in your homepage template (craft/templates/index.html):

.. code-block:: html

	<h1>Tales from the Cocktail</h1>

To make that translatable, you would convert it to this:

.. code-block:: html

	<h1>{{ "Tales from the Cocktail" | translate }}</h1>

The ``translate`` filter also has an alias, ``t``, so this would also be valid:

.. code-block:: html

	<h1>{{ "Tales from the Cocktail" | t }}</h1>

Just like that, your heading is now ready to be translated.


Defining Translations
---------------------

To define your translations, first create a new folder in your craft/ folder called ‘translations’. Within that, create a new PHP file named with the target language’s code. For instance, if you’re targeting Spanish-speaking visitors, your file would be ‘craft/translations/es.php’.

That file should simply return an array whose keys are the messages in your site’s source language, and values are the translated messages. For example:

.. code-block:: php

	<?php

	return array(

		"Tales from the Cocktail" => "Cuentos del Cóctel",

	);

Set your browser’s preferred language to Spanish and reload your homepage, and presto! Your translated heading is showing up instead.
