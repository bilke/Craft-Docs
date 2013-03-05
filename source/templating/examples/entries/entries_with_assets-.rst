Including Assets with your Entries
===============

Including media assets with your entries is as simple as setting up an Assets location and a Link Block for your section.

We'll use the simple example of including images from an local folder with an article in an existing Section.

Setting up an Asset
---------------

Go to ``Settings`` > ``Assets`` > and Click ``New Source``.   Enter the name of your Asset - for this example, we'll use "articles".  Choose "Local Folder" for "Type", then enter the File System Path and related URL and Save.

Setting up an Assets Block
---------------

Now head to ``Settings`` > ``Sections`` > and click on the Section for which you wish to include your images.  For this example, we'll work with a section called "Articles".  Click on the Articles Section, then click on ``Craft``.

Now we want to click New Block and set up a new Link Block.  Choose the Name of your Block and a handle.

The Name should be an easy indicator to your content editors of what data to put in that form.  The handle is how your template designers will refer to this Block in the templates.  In this example, the handle for this Block is ``articleImages``.

Add any instructions you have, then choose ``Links`` under ``Type``.  In the drop-down that appears, choose ``Assets`` as your Link Type.  Fill in the rest of the form with your site's personalized style and requirements and save the form.

Publishing Content with Assets
---------------

Now, you can head over to ``Content`` and create a ``New Entry`` in that Section. You will see the New Entry form, including your Links block for your images.  Click the Add Image button and upload some images, and fill out any other Craft on that page.

You now have an entry with some Assets included!

Outputting Assets with your Entry
---------------

All of this setup is intended to make it easy for you to output that content for your site visitors.  FTP in and locate the template that you use for your entries, upon which you wish to show your new Assets.  You can then include this code to output those Assets:

.. code-block:: html

   	{% for image in entry.articleImages %}
		<img src="{{ image.url }}" alt="{{ entry.title }}" height="{{ image.height }}" width=" {{ image.width }}" alt="{{ entry.title }}" />
	{% endfor %}

Here is a list of Properties that you can use to style your output:

``filename``
    The system name of your file

``originalName``
	The original name of your file

``kind``
	The MIME type

``width``
	For images, the width of your image

``height``
	For images, the height of your image

``size``
 	The file size for your Asset

``dateModified``
	The last time the file was modified

``url``
	The URL to your Asset

``thumbUrl``
	The URL to the thumbnail for your Asset

``folder.name``
	The folder name your Asset is stored in

``folder.fullpath``
	The full path to the folder the Asset is stored in

``folder.source``
	The source of your Asset's folder
