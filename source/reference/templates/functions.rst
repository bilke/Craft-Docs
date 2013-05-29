Template Functions
==================

On top of the template functions that `Twig comes with <http://twig.sensiolabs.org/doc/functions/index.html>`_, Craft provides a few of its own:

``url``
    Returns a URL relative to your Site URL.

    .. code-block:: html

        <a href="{{ url('company/contact') }}">Contact Us</a>


``round``
    Rounds off a number to the closest integer.

    .. code-block:: html

        {{ round(42.1) }} => 42
        {{ round(42.9) }} => 43


``ceil``
    Rounds of a number up.

    .. code-block:: html

        {{ ceil(42.1) }} => 43


``floor``
    Rounds a number down.

    .. code-block:: html

        {{ floor(42.9) }} => 42


``min``
    Returns the smallest number of a given set.

    .. code-block:: html

        {{ min(1, 2, 3) }} => 1


``max``
    Returns the largest number of a given set.

    .. code-block:: html

        {{ max(1, 2, 3) }} => 3


.. _getheadnodes:

``getHeadHtml``
    Outputs all of the HTML nodes that have been queued up by the :ref:`includeCssFile <includecssfile>`, :ref:`includeCss <includecss>`, and :ref:`includeHiResCss <includehirescss>` tags.

    .. code-block:: html

        <head>
            <title>{{ siteName }}</title>
            {{ getHeadHtml() }}
        </head>

.. _getfootnodes:

``getFootHtml``
    Outputs all of the HTML nodes that have been queued up by the :ref:`includeJsFile <includejsfile>` and :ref:`includeJs <includejs>` tags. It should be placed right before your ``</body>`` tag.

    .. code-block:: html

        <body>
            <h1>{{ page.name }}</h1>
            {{ page.body }}

            {{ getFootHtml() }}
        </body>
