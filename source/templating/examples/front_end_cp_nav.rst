Control Panel Navigation on the Front End
=====================

In order to ease management of your site, you may wish to include CP Navigation on the front-end.  This is easy using Twig.

Add the following code where you want your CP Navigation to appear.

.. code-block:: html

    {% if user and user.can('accessCp') %}
        <h1 id="site-name">{{ siteName }}</h1>
        <ul id="cp-nav">
            {% for handle, item in craft.cp.nav %}
                <li><a href="{{ url('admin/'~handle) }}">{{ item.name }}</a></li>
            {% endfor %}
        </ul>
        {% if entry is defined and user.admin %}
            <a id="edit-entry" href="{{ entry.cpEditUrl }}">Edit this entry</a>
            <a id="delete-entry" data-id="{{ entry.id }}">Delete this entry</a>
        {% endif %}
    {% endif %}

The conditionals test if there is a user visiting the page, and if that user has the ability to accept the CP.  If those conditions are true, the navigation will show.  Additionally, if showing an entry and the user is an admin, this code will add Entry Edit and Delete links.

Craft requires that entry deletion happen via a POST request to avoid accidentally triggering it.  Add this Javascript to your page to enable the Delete link to function.  Once enabled, this link will delete an entry without confirmation:


.. code-block:: javascript

    var $deleteEntryLink = $('#delete-entry');
        $deleteEntryLink.click(function() {
        var url = 'actions/entries/deleteEntry',
            data = { id: $deleteEntryLink.data('id') };
        $.post(url, data, function() {
            alert('This entry has gone to a better place.');
        });
    });﻿

