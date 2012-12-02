``blx.entries``
===============

You can access your site’s entries from your templates via ``blx.entries``.


Output Functions
----------------

There are three ways you can get ``blx.entries`` to output data: ``find()``, ``first()``, and ``total()``.

If you want to get an array of multiple entries that you can loop through, use ``find()``:

.. code-block:: html

    {% for entry in blx.entries.find() %}
        <li>{{ entry.title }}</li>
    {% endfor %}

If you just want to get one entry, use ``first()``:

.. code-block:: html

    {% set entry = blx.entries.first() %}

    {{ entry.title}}

If you want to get the total number of entries, use ``total()``:

.. code-block:: html

    Total entries: {{ blx.entries.total() }}


Tailoring the Results
---------------------

Calling ``blx.entries.find()`` by itself is going to return the last 100 live entries in your site. If that happens to be exactly what you needed, great! But most likely you’ll want to customize the results a bit.

Blocks supports a number of parameters that should help you do just that.


Parameter Syntax
~~~~~~~~~~~~~~~~

There are two ways you can add parameters to your ``blx.entries`` tag:

1. You can chain the parameters together as additional functions before reaching the output function::

      blx.entries.section('blog').authorId(10).find()

2. You can pass your parameters as an argument to the output functions::

      blx.entries.find({ section: 'blog', authorId: 10 })

Both of these ways are perfectly valid, and each have their place. The former is more readable, but with the latter syntax, parameters can be defined once, and reused:

.. code-block:: html

    {% set params = { section: 'blog', authorId: 10 } %}

    Total entries: {{ blx.entries.total(params) }}

    The last 5 entries:

    <ul>
        {% for entry in blx.entries.limit(5).find(params) %}
            <li><a href="{{ entry.url }}">{{ entry.title }}</a></li>
        {% endfor %}
    </ul>

Notice how in that example, we only had to define the ``section`` and ``authorId`` parameters once, but were able to use them twice – once to get the grand total number of entries that meet the criteria, and a second time to actually grab the 5 latest ones.

That was also an example of how the two syntaxes can be mixed and matched. Notice how on that for-loop line, we are setting the limit using the chaining syntax, but applying the section and author parameters by passing ``params`` as an argument to ``find()``.


Shared Parameters
~~~~~~~~~~~~~~~~~

Each of the ``blx.entries`` output functions share several parameters that will help you find the entry(s) you’re looking for:

``id``
    Only fetch the entry with the given ID.

``slug``
    Only fetch the entry with the given slug.

``uri``
    Only fetch the entry with the given URI.
    The URI of the entry to fetch.

``sectionId``
    Only fetch entries in the section with the given ID. (Publish Pro only)

``section``
    Only fetch entries in the section with the given handle. (Publish Pro only)

``language``
    The language the entries’ content should be returned in. (Languages only)

``authorId``
    Only fetch entries that were authored by the user with the given ID. (Users only)

``authorGroupId``
    Only fetch entries that were authored by users who belong to the group with the given ID. (Users only)

``authorGroup``
    Only fetch entries that were authored by users who belong to the group with the given handle. (Users only)

``after``
    Only fetch entries with a Post Date that is on or after the given date. You can specify dates in the following formats:

    * YYYY
    * YYYY-MM
    * YYYY-MM-DD
    * YYYY-MM-DD HH:MM
    * YYYY-MM-DD HH:MM:SS
    * Unix timestamp
    * DateTime variable

``before``
    Only fetch entries with a Post Date that is before the given date. You can specify dates in the same formats as ``after``.

``status``
    Only fetch entries with the given status. Possible values are ``'live'``, ``'pending'``, ``'expired'``, ``'disabled'``, and ``'*'``. The default value is ``'live'``.

``archived``
    Only fetch entries that have been archived by setting this to ``true``.

``offset``
    Skips the first *X* entries. For example, if you set ``offset(1)``, the would-be second entry returned becomes the first.


Parameters Exclusive to ``find()``
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The following parameters will only make a difference when calling the ``find()`` output function:

``order``
    The order the entries should be returned in. Possible values include ``'title'``, ``'id'``, ``'authorId'``, ``'sectionId'``, ``'slug'``, ``'uri'``, ``'postDate'``, and ``'expiryDate'``. If you want the entries to be sorted in descending order, add “``desc``” after the property name (ex: ``'postDate desc'``). The default value is ``'postDate desc'``.

``limit``
    Limits the results to *X* entries.

``indexBy``
    Indexes the results by a given property. Possible values include ``'title'``, ``'id'``, ``'authorId'``, ``'sectionId'``, ``'slug'``, ``'uri'``, ``'postDate'``, and ``'expiryDate'``.


Parameter Value Syntax
~~~~~~~~~~~~~~~~~~~~~~

Each of these parameters can be set to a single value or multiple values, and can optionally be used to *exclude* which entries get returned.

To pass in multiple values, you can either pass them as an array, comma-delimited string, or even as separate arguments if you’re using the chaining method::

    blx.entries.id(1, 2, 3).find()
    blx.entries.id('1,2,3').find()
    blx.entries.find({ id: [1, 2, 3] })
    blx.entries.find({ id: '1,2,3' })

To exclude entries with a given value, you must pass in a string, prefixed with “``not``”::

    blx.entries.id('not 1').find()
    blx.entries.find({ id: 'not 1' })


.. _entry-properties:

Entry Properties
----------------

Once you’ve got your entry, there are a number of properties and functions you can call from it.

``id``
    The entry’s ID.

``sectionId``
    The entry’s section’s ID. (Publish Pro only)

``section``
    The entry’s :doc:`section object <sections>`.

``authorId``
    The entry’s author’s ID.

``author``
    The entry’s author’s :doc:`user object <users>`.

``language``
    The language the entry’s content was returned in.

``title``
    The entry’s title.

``slug``
    The entry’s slug.

``uri``
    The entry’s URI.

``url``
    The entry’s full front-end URL.

``cpEditUrl``
    The entry’s CP edit URL.

``postDate``
    The entry’s post date.

``expiryDate``
    The entry’s expiration date.

``enabled``
    Whether the entry is enabled.

``status``
    The entry’s status (‘live’, ‘pending’, ‘expired’, or ‘disabled’).

``tags``
    An array of the entry’s tags.
