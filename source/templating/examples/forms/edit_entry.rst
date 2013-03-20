Edit Entry Form
===============

You can create a form to edit existing entries on front-end of your site using the following code:

.. code-block:: html

    {% set entry = craft.entries.id(1).first %}

    <form method="post" action="" accept-charset="UTF-8">
        <input type="hidden" name="action" value="entries/saveEntry">
        <input type="hidden" name="redirect" value="viewentry/{{ entry.id }}">
        <input type="hidden" name="entryId" value="{{ entry.id }}">
        <input type="hidden" name="sectionId" value="{{ entry.sectionId }}">
        <input type="hidden" name="enabled" value="{{ entry.enabled }}">

        <label for="title">Title</label>
        <input id="title" type="text" name="title" value="{{ entry.title }}">

        <label for="body">Body</label>
        <textarea id="body" name="fields[body]">{{ entry.body }}</textarea>

        <input type="submit" value="Publish">
    </form>
