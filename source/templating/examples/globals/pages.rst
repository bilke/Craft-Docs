Setting up Single-Serve Pages
===============

Many Sites need to have "single serve pages" for serving information about the site, such as an 'about' page, Terms of Service, etc.

You can do this in Craft using Global Sets

For example, let's say we want to create an "About this Site" page following these steps:

#. Log into your Dashboard and go to ``Settings`` → ``Globals`` and create a New Global Set
#. Choose a friendly name that you'll see as the Global Name when editing your Globals
#. Choose a handle.  This is how you'll refer to this Global in your templates.  For now, let's call this "about"
#. Choose the "Field Layout" tab and drag your "body" field into your Default tab
#. Save

Now go to ``Globals`` in your top navigation and enter some text into the Body field of your "About" Global.

Excellent. At this point you have  "About This Site" content set up in your Dashboard.  Now to display this on the front-end.

Head to /craft/templates and create a simple template called ``about.html``.

Enter this code into it:

.. code-block:: html

	{{ about.body }}

and save your template.  Now visit your template in the browser at ``example.com/about.html``.  You should see your Body content.

The above is wonderful for serving a set single serve page.  But let's say that you have several such pages and you wish to utilize one main template for it. There are two approaches here: Includes and Extends

Includes
---------------

Create a new template, in this case let's call it ``_single.html`` and place it into your ``/craft/templates`` folder.

Place this code into your template:

.. code-block:: html

	{{ global.body }}

Now create another template to server your specific Global.  In this case, let's call it ``about.html``.  Place the following code in that template:

.. code-block:: html


	{% include "_single" with { global: about } %}

In this particular scenario, you are including your _single.html template.  In your ``about.html`` template, you are including that _single.html template and setting a variable (``global`` is the variable here) that gets replaced with the value ``'about`` at include time.

Now, all you need to do to create more single serving pages is to copy ``about.html`` and replace the word ``about`` with the handle for your Global.

Extends
---------------

Alternatively, set up your ``_single.html`` template as above.  Also create your ``about.html`` file, and place this in it:

.. code-block:: html

	{% extends "_single" %}
	{% set global = about %}

And again, you have your single serving page.  In both of the above instances, visit your ``about.html`` via ``example.com/about`` to see the end result.