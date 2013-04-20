``craft.request``
=================

You can access information about the current HTTP request via ``craft.request``.

Properties
----------

The following properties are available:

``isSecure``
	Whether the current request is over SSL.

``path``
	The path in the URI.

``url``
	The full URL for the current request.

``segments``
	An array of the path segments.

``firstSegment``
	The first path segment.

``lastSegment``
	The last path segment.

``serverName``
	The server/domain name.


Methods
-------

The following methods are available:

``getSegment(n)``
	Returns the *n*th path segment.

``getParam(name)``
	Returns a parameter from either the query string or POST data.

``getQuery(name)``
	Returns a parameter from the query string.

``getPost(name)``
	Returns a parameter from the POST data.
