Template Tags
=============

On top of the template tags that `Twig comes with <http://twig.sensiolabs.org/doc/tags/index.html>`_, Craft provides a few of its own.

``redirect``
    Redirects the browser to the passed-in URL or site path.

    .. code-block:: html

        {% if not user %}
            {% redirect 'login' %}
        {% endif %}


``exit``
    Cancels the output of the current template, and throws an HttpException, optionally with the status code you pass in.

    .. code-block:: html

        {% set entry = craft.entries.id(entryId).find() %}

        {% if not entry %}
            {% exit 404 %}
        {% endif %}


.. _requireLogin:

``requireLogin``
    Requires the user to be logged in. If they’re not, they’ll be redirected to your site’s :doc:`login page <templating/examples/forms/login>`, determined by the ``'loginPath'`` config setting (defaults to “login”).

    .. code-block:: html

        {% requireLogin %}

        <h1>Private Lounge</h1>


``requirePermission``
    Requires the user has permission to perform a given action. If they don’t, they’ll get a 503 (Unauthorized) error.

    .. code-block:: html

        {% requirePermission "spendTheNight" %}

        <h1>Slumber Party</h1>


.. _paginate:

``paginate``
    Paginates entries, users, and sections with a given criteria. The syntax is ``{% paginate MyCriteria as PageSubset %}``, where ``PageSubset`` becomes an array of items for the current page, which can be looped through.

    .. code-block:: html

        {% paginate craft.entries.section('blog').limit(10) as entries %}

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

    Add “``first``” after the file URL if you want it to get included before other CSS files:

    .. code-block:: html

        {% includeCssFile "/resources/css/global.css" first %}

.. _includejsfile:

``includeJsFile``
    Queues up a ``<script type="javascript">`` tag with the passed-in JS file URL, for inclusion via the :ref:`getFootNodes() <getfootnodes>` function.

    .. code-block:: html

        {% includeJsFile "/resources/js/global.js" %}

    Add “``first``” after the file URL if you want it to get included before other JS files:

    .. code-block:: html

        {% includeJsFile "/resources/js/global.js" first %}


.. _includecss:

``includeCss``
    Queues up CSS for inclusion via the :ref:`getHeadNodes() <getheadnodes>` function.

    .. code-block:: html

        {% set myCss %}
            .bg { background-image: url(/resources/images/bg.png) }
        {% endset %}

        {% includeCss myCss %}

    Add “``first``” after the CSS if you want it to get included before other CSS:

    .. code-block:: html

        {% includeCss myCss first %}


.. _includehirescss:

``includeHiResCss``
    Queues up CSS targetted at hi-res displays for inclusion via the :ref:`getHeadNodes() <getheadnodes>` function.

    .. code-block:: html

        {% set myHiResCss %}
            .bg { background-image: url(/resources/images/bg_2x.png); }
        {% endset %}

        {% includeHiResCss myHiResCss %}

    Add “``first``” after the CSS if you want it to get included before other CSS:

    .. code-block:: html

        {% includeHiResCss myHiResCss first %}


.. _includejs:

``includeJs``
    Queues up Javascript code for inclusion via the :ref:`getFootNodes() <getfootnodes>` function.

    .. code-block:: html

        {% set myJs %}
            $('.date').datepicker();
        {% endset %}

        {% includeJs myJs %}

    Add “``first``” after the JS if you want it to get included before other JS:

    .. code-block:: html

        {% includeCss myJs first %}
