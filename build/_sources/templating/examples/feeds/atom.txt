Atom 1.0 Feed
=============

The following template can be used to provide an Atom 1.0 feed on your site. It assumes that you have two :doc:`/overview/globals` set up: ‘feedAuthorName’ and ‘feedAuthorEmail’.

**Tip:** If you save this in a template that ends with a ‘.atom’ file extension, Blocks will even serve it with an ``application/atom+xml`` MIME type.

.. code-block:: html

    <?xml version="1.0"?>
    <feed xmlns="http://www.w3.org/2005/Atom">

        <title>{{ siteName }}</title>
        <link href="{{ siteUrl }}" />
        <link type="application/atom+xml" rel="self" href="{{ blx.request.url }}" />
        <updated>{{ now.atom }}</updated>
        <id>{{ blx.request.url }}</id>
        <author>
            <name>{{ globals.feedAuthorName }}</name>
            <email>{{ globals.feedAuthorEmail }}</email>
        </author>

        {% for entry in blx.entries.find() %}
            <entry>
                <id>{{ entry.url }}</id>
                <link type="text/html" rel="alternate" href="{{ entry.url }}" />
                <title>{{ entry.title }}</title>
                <published>{{ entry.postDate.atom }}</published>
                <updated>{{ entry.dateUpdated.atom }}</updated>
                <author>
                    <name>{{ entry.author.fullName }}</name>
                    <uri>{{ siteUrl }}</uri>
                </author>
                <content type="html"><![CDATA[
                    {{ entry.body }}
                ]]></content>
            </entry>
        {% endfor %}
    </feed>
