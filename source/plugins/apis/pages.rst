PagesService
============

PagesService provides the following APIs for dealing with pages:

``blx()->pages->getAllPages()``
	Returns an array of PageModel instances representing all pages in the system.

``blx()->pages->getPageById($id)``
	Returns a PageModel instance for a page with the ID passed in, or null if that page cannot be found.

``blx()->pages->getPageByUri($uri)``
	Returns a PageModel instance for a page assigned to the passed-in URI, or null if such a page cannot be found.

``blx()->pages->savePage(PageModel $page)``
	Saves a page based on the passed-in PageModel instance.

``blx()->pages->savePageContent(PageModel $page)``
	Saves the content of a page based on the passed-in PageModel instance.

``blx()->pages->deletePageById($id)``
	Deletes the page with the passed-in ID.
