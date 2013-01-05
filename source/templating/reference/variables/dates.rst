Dates
=====

Date variables provide information about a given date/time.

Properties
----------

You can use the following properties:

``year``
	The 4-digit year

	.. code-block:: html

	    <p>Copyright {{ now.year }} Pixel &amp; Tonic, Inc.</p>

``month``
	The 1- or 2-digit month

``day``
	The 1- or 2-digit day of the month

``rss``
	The date/time formatted for an RSS feed (D, d M Y H:i:s O). (See :doc:`/templating/examples/feeds/rss`)

	.. code-block:: html

	    <pubDate>{{ entry.postDate.rss }}</pubDate>

``atom``
	The date/time formatted for an Atom feed (Y-m-d\TH:i:sP). (See :doc:`/templating/examples/feeds/atom`)

	.. code-block:: html

	    <published>{{ entry.postDate.atom }}</published>

``w3c``
	The date/time formatted in the W3C’s spec (Y-m-d\TH:i:sP)

``w3cDate``
	The date formatted in the W3C’s spec (Y-m-d)

``cookie``
	The date/time formatted for a HTTP cookie (l, d-M-y H:i:s T)

``iso8601``
	The date/time formatted in the ISO-8601 spec (Y-m-d\TH:i:sO)

``rfc822``
	The date/time formatted in the RFC 822 spec (D, d M y H:i:s O)

``rfc850``
	The date/time formatted in the RFC 850 spec (l, d-M-y H:i:s T)

``rfc1036``
	The date/time formatted in the RFC 1036 spec (D, d M y H:i:s O)

``rfc1123``
	The date/time formatted in the RFC 1123 spec (D, d M Y H:i:s O)

``rfc2822``
	The date/time formatted in the RFC 2822 spec (D, d M Y H:i:s O)

``rfc3339``
	The date/time formatted in the RFC 3339 spec (Y-m-d\TH:i:sP)


Methods
-------

``format``
	Formats the date according to the format string provided. The format string can be composed of the characters accepted by PHP’s `date() <http://www.php.net/manual/en/function.date.php>`_ function.

	.. code-block:: html

		<p>Published on {{ entry.postDate.format('F j, Y') }}.</p>
