RSS 2.0 Feed
============

The following template can be used to provide a RSS 2.0 feed on your site. It assumes that you have a :doc:`global set </overview/globals>` called “globals” with a field called “siteDescription” selected in its field layout.

.. container:: tip

   **Tip:** If you save this in a template that ends with a ‘.rss’ file extension, Craft will even serve it with an ``application/rss+xml`` MIME type.

.. code-block:: html

    <?xml version="1.0"?>
    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
        <channel>
            <title>{{ siteName }}</title>
            <link>{{ siteUrl }}</link>
            <atom:link href="http://functionn.github.com/rss.xml" rel="self" type="application/rss+xml" />
            <description>{{ globals.siteDescription }}</description>
            <language>en-us</language>
            <pubDate>{{ now.rss }}</pubDate>
            <lastBuildDate>{{ now.rss }}</lastBuildDate>

            {% for entry in craft.entries %}
                <item>
                    <title>{{ entry.title }}</title>
                    <link>{{ entry.url }}</link>
                    <pubDate>{{ entry.postDate.rss }}</pubDate>
                    <author>{{ entry.author.fullName }}</author>
                    <guid>{{ entry.url }}</guid>
                    <description><![CDATA[
                        {{ entry.body }}
                    ]]></description>
                </item>
            {% endfor %}
        </channel>
    </rss>
