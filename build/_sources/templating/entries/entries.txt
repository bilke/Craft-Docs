Entries
=================

Blocks Entries store article-type content for display on your site.  Entries can be displayed on your site using either for loops, or direct entry variables.


=================
For Loops
=================

For loops are used any time you wish to grab a selection of information from the database and loop through it, outputting it in a certain way for each row.  Direct entry variables can be used on a template where the Entry URI is being used to load the template.

Here is an example of a simple entries for loop:

.. code-block:: html

    {% for article in blx.entries.section('news').order('title').find %}
        <h1 class="title"><a href="{{entry.url}}">{{entry.title}}</a></h1>
        {{entry.body | raw}}
        <p class="sig">-<em>{{ entry.author }}</em>, {{entry.postDate}}</p>
    {% endfor %}

When you see code such as the below:

.. code-block:: html

    {% for product in blx.entries.section() %}

You are defining the variable ("article") and telling Blocks in what area to look ("blx.entries.findEntries")

There is also an alternate syntax that you may see used as the opening for statement:

.. code-block:: html

    {% for entry in blx.entries.find({section: 'news', order: 'title'}) %}

Both syntaxes are equally correct.  The best practice is to use whichever one is easier for you, the designer, to read and remember.

You can limit what data Blocks pulls by using filters:

``limit()``
    Tells Blocks how many entries to display.

``order()``
    How to order your entries.  Options are:
        * title
        * postDate

    To change the sort order, you would add a space then specify ascending or descending:

.. code-block:: html

    order('postDate desc')

or

.. code-block:: html

    order('title asc')

``offset()``
        Tells Blocks to start outputting data starting somewhere other than the first record.  For instance, if you wish to pull the last 5 entries, but starting from entry 2:

..code-block:: html

        offset('1')


``section()``
    What sections to pull your entries from.  This uses your Section Handle as set in the Control Panel.

=================
Variables
=================

To output the data that you want you use Variables.  Variables use double curly brackets and are prefixed with your for loop variable.  For instance in:

.. code-block:: html

    {% for entry in blx.entries.find({section: 'news', order: 'title'}) %}

You are setting "entry" as your short name, so you would use:

..code-block:: html

    {{entry.title}}

``authorID``

The ID for the entry's author.

``language``

The language this entry is in.

``slug``

Your entry's slug.

``expiryDate``

The expiration date for your entry.

``enabled``

Is this entry enabled in the entry settings?

``tags``

The entry tags.

``SectionID``

The ID for the section this entry is stored in.

``uri``

The entry's URI
``id``

The Entry ID.


To output the title of the pulled entry.

``title``

The title of your entry.

``block-handle``

The block handle used in the control panel to store your content.  For instance, if you have a block called "Article", you would call it like so in the template:

.. code-block:: html

    {{entry.Article | raw}}

In the above example, you see a filter denoted by the pipe then raw.  This tells Blocks to output your content without encoding your mark-up so that it is parsed by the browser.

``postDate``

The date the post was made.





