New Entry Form
==============

You can create a new entry form for the front-end of your site using the following code:


.. code-block:: html

    <form method="post" action="" accept-charset="UTF-8">
        <input type="hidden" name="action" value="entries/saveEntry">
        <input type="hidden" name="redirect" value="viewentry/{entryId}">
        <input type="hidden" name="sectionId" value="10">
        <input type="hidden" name="enabled" value="1">

        <label for="title">Title</label>
        <input id="title" type="text" name="title">

        <label for="body">Body</label>
        <textarea id="body" name="blocks[body]"></textarea>

        <input type="submit" value="Publish">
    </form>