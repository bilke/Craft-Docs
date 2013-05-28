Rich Text
=======

The Rich Text fieldtype provides WYSIWYG fields, powered by `Redactor <http://imperavi.com/redactor/>`_.

Field Settings
--------------

Rich Text fields have the following settings:

Config
    Choose a custom config file to customize Redactor.

    Redactor configs are .json files in craft/config/redactor/, containing Javascript objects defining any of Redactor’s `available settings <http://imperavi.com/redactor/docs/settings/>`_. Their contents get passed directly into the ``redactor()`` jQuery plugin, so you can paste the examples in there verbatim.

    Craft comes with two Redactor configs by default:

    * Simple.json

      .. code-block:: js

          {
              buttons: ['bold', 'italic']
          }

    * Standard.json

      .. code-block:: js

          {
              buttons: ['html','|','formatting','|','bold','italic','|','unorderedlist','orderedlist','|','link','image','video'],
              plugins: ['fullscreen', 'pagebreak']
          }

Clean up HTML?
    Instruct Craft to cleanup the submitted HTML on save.

    The cleanup routine involves removing all ``<span>`` tags, empty tags, and most ``style`` attributes.


Working with Page Breaks
------------------------

If your Redactor config includes the “``pagebreak``” plugin, you will have the option to insert page breaks throughout your content, via a new “Insert Page Break” toolbar button.

Rich Text fields have three functions for outputting data based on the page breaks:

``getPages()``
    Returns an array of all pages’ content.

    .. code-block:: html

        {% for page in entry.body.getPages() %}
            <div class="page">
                {{ page }}
            </div>
        {% endfor %}

``getPage()``
    Returns the contents of a specific page.

``getTotalPages()``
    Returns the total number of pages for the field.

    .. code-block:: html

        {% for entry in craft.entries.section('blog') %}
            <article>
                <h1><a href="{{ entry.url }}">{{ entry.title }}</a></h1>

                {{ entry.body.getPage(1) }}

                {% if entry.body.getTotalPages() > 1 %}
                    <a href="{{ entry.url }}">Continue reading…</a>
                {% endif %}
            </article>
        {% endfor %}
