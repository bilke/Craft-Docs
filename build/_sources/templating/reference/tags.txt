Template Tags
=============

On top of the template tags that `Twig comes with <http://twig.sensiolabs.org/doc/tags/index.html>`_, Blocks provides a few of its own.

``redirect``
    Redirects the browser to the passed-in URL or site path.

    .. code-block:: html

        {% if not user %}
            {% redirect 'login' %}
        {% endif %}


``exit``
    Cancels the output of the current template, and throws an HttpException, optionally with the status code you pass in.

    .. code-block:: html

        {% set entry = blx.entries.id(entryId) %}

        {% if not entry %}
            {% exit 404 %}
        {% endif %}


.. _paginate:

``paginate``
    Paginates entries, users, and sections with a given criteria. The syntax is ``{% paginate MyCriteria as PageSubset %}``, where ``PageSubset`` becomes an array of items for the current page, which can be looped through.

    .. code-block:: html

        {% paginate blx.entries.section('blog').limit(10) as entries %}

            {% for entry in entries %}
                <article>
                    <h1>{{ entry.title }}</h1>
                    {{ entry.body }}
                </article>
            {% endfor %}

            {% if paginate.prevUrl %}
                <a href="{{ paginate.prevUrl }}">Previous Page</a>
            {% endif %}

            {% if paginate.nextUrl %}
                <a href="{{ paginate.nextUrl }}">Next Page</a>
            {% endif %}

        {% endpaginate %}

    The following variables are available within the ``paginate`` tag pair:

    * ``paginate.first`` – The number of the first item being shown
    * ``paginate.last`` – The number of the last item being shown
    * ``paginate.total`` – The total number of items across all pages
    * ``paginate.currentPage`` – The current page number
    * ``paginate.totalPages`` – The total number of pages
    * ``paginate.prevUrl`` – A URL to the previous page (if this isn’t the first page)
    * ``paginate.nextUrl`` – A URL to the next page (if this isn’t the last page)


.. _includecssfile:

``includeCssFile``
    Queues up a ``<link rel="stylesheet">`` tag with the passed-in CSS file URL, for inclusion via the :ref:`getHeadNodes() <getheadnodes>` function.

    .. code-block:: html

        {% includeCssFile "/resources/css/global.css" %}


.. _includejsfile:

``includeJsFile``
    Queues up a ``<script type="javascript">`` tag with the passed-in JS file URL, for inclusion via the :ref:`getFootNodes() <getfootnodes>` function.

    .. code-block:: html

        {% includeJsFile "/resources/js/global.js" %}


.. _includecss:

``includeCss``
    Queues up CSS for inclusion via the :ref:`getHeadNodes() <getheadnodes>` function.

    .. code-block:: html

        {% set myCss %}
            .bg { background-image: url(/resources/images/bg.png) }
        {% endset %}

        {% includeCss myCss %}


.. _includehirescss:

``includeHiResCss``
    Queues up CSS targetted at hi-res displays for inclusion via the :ref:`getHeadNodes() <getheadnodes>` function.

    .. code-block:: html

        {% set myHiResCss %}
            .bg { background-image: url(/resources/images/bg_2x.png); }
        {% endset %}

        {% includeHiResCss myHiResCss %}


.. _includejs:

``includeJs``
    Queues up Javascript code for inclusion via the :ref:`getFootNodes() <getfootnodes>` function.

    .. code-block:: html

        {% set myJs %}
            $('.date').datepicker();
        {% endset %}

        {% includeJs myJs %}
