FeedsService
============

FeedsService provides the following API for capturing RSS and Atom feeds:

``craft()->feeds->getFeedItems($url, $limit, $offset)``
	Returns an array of items from a given feed URL. Optionally pass ``$limit`` and ``$offset`` to limit the number of items returned, and how many initial items to skip, respectively. Each item has the following keys:

	* ``'authors'`` – an array of the item’s authors. Each element is a sub-array with the values ``'name'``, ``'url'``, and ``'email'``.
	* ``'categories'`` – an array of the item’s categories. Each element is a sub-array with the values ``'term'``, ``'scheme'``, and ``'label'``.
	* ``'content'`` – the item’s main content.
	* ``'contributors'`` – an array of author info. Each element is a sub-array with the values ``'name'``, ``'url'``, and ``'email'``.
	* ``'date'`` – a DateTime instance of the item’s date.
	* ``'dateUpdated'`` – a DateTime of the item’s last updated date.
	* ``'permalink'`` – the item’s permalink URL.
	* ``'summary'`` – the item’s summary content.
	* ``'title'`` – the item’s title.
