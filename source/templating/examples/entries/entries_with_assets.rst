Attaching Assets to your Entries
================================

You can attach assets to your entries using a Links field. In this tutorial, we’ll walk you through all of the steps involved in that, from beginning to end:

* Create a new asset source to hold our assets
* Upload images to that source
* Create a new Links field that points to our new asset source
* Attach the Links field to a section
* Select some images in an entry
* Output those images in a template


Creating an Asset Source
------------------------

In Craft, all of your site’s assets live in **asset sources**. You can create as many asset sources as you want, each pointed to different folders on your server.

.. container:: tip

   **Note:** You can also set up Amazon S3 sources with the :doc:`/packages/cloud` package.

To create a new asset source, go to Settings → Assets and click the “New Source” button. Give your source a name, enter its path on the file system, and the URL to that folder.

For this tutorial, we’re going to call our source “Article Images”. It will live in an images/articles/ folder within our server’s web root, so our Path gets set to “./images/articles/” (a path that’s relative from our index.php file), and its URL gets set to “/images/articles/” (a root-relative URL).

Click “Save”, and you’re done.

.. container:: tip

	**Note:** If there are any files in your source already, you’ll want to head over to Settings → Assets → Updated Indexes and tell Craft to update your source’s index. This is something that should be done any time that changes are made to your source outside of Craft, such as when you upload or delete files over FTP.


Uploading Files to your Source
------------------------------

To upload images to your new source, go to the Assets tab in the CP, and select the “Article Images” source on the left. Click the “Upload files” button, and choose some images to upload.


Setting up a Links Field
------------------------

Any time you want to relate elements together within Craft, you do it with a Links field. In this tutorial, we want a field that allows us to select assets that were uploaded to our Article Images source, so we’ll create a new Links field pointing to that source.

To do that, go to Settings → Fields. Select a :doc:`field group </overview/fields>` or create a new one, and then click the “New Field” button. Set the Name to “Article Images”, the Handle to “articleAssets”, and the Type to “Links”.

.. container:: tip

   **Note:** When you change the type, all of the settings following it will change too, based on the Type you selected. In Links’ case, you’ll get a Link Type setting, additional settings based on the selected Link Type, and a few additional settings that allow you to customize the experience of using your Links field.

Set the Link Type setting to “Assets”, and for the “Asset Sources” setting, uncheck ‘All’ and check the box next to “Article Images” – the source we just created.

Click “Save”. Now you have a new Links field that is pointing to all of the images uploaded to your Article Images source.


Attaching your Links field to your Section
------------------------------------------

Next up you need to associate your new Links field to a section. We’ll assume that you already have a section created, called “Articles”. So head over to Settings → Sections, click on your Articles section, and then go to the “Field Layout” tab. You should see your new “Article Images” field listed down on the bottom half of the page. Simply click and drag that field up into the top portion of the page, placing it in one of your tabs.

Click “Save”.


Selecting Images within an Entry
--------------------------------

Now that you have created an asset source, uploaded images to it, created a Links field pointing to the source, and attached that field to your section, it’s finally time to attach some images to an entry!

Go to the Entries tab in the CP, and edit one of the entries in your Articles section. You should see your new Article Images field, right where you told it to be in the Field Layout settings. Click the “Add Links” button, and select some images from the modal window.

That’s it! Just click “Save”.


Outputting Assets with your Entry
---------------------------------

Now it all comes together: it’s time to output your entry’s images in the template.

Open up the template that your Articles section is set to use. Then, wherever you want to output the images that were selected for the current article entry, put this:

.. code-block:: html

   	{% for image in entry.articleImages %}
	    <img src="{{ image.url }}" height="{{ image.height }}" width="{{ image.width }}" alt="{{ entry.title }}">
	{% endfor %}

If rather than outputting the originally uploaded images, you’d prefer that they conform to a certain size, create a new Asset Transform in Settings → Assets → Image Transforms, and modify your template code like so:

.. code-block:: html

   	{% for image in entry.articleImages %}
	    <img src="{{ image.getUrl('transformHandle') }}" height="{{ image.getHeight('transformHandle') }}" width="{{ image.getWidth('transformHandle') }}" alt="{{ entry.title }}">
	{% endfor %}


Here is a list of properties that are available for each asset:

``filename``
    The system name of your file

``originalName``
	The original name of your file

``kind``
	The kind of file it is (“image”, “pdf”, etc.)

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

``folder.name``
	The folder name your Asset is stored in

``folder.fullpath``
	The full path to the folder the Asset is stored in

``folder.source``
	The source of your Asset's folder
