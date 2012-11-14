HttpRequestService
==================

HttpRequestService provides the following APIs for getting information about the current HTTP request:

``blx()->request->getUri()``
	Returns the URI for the request (sans ‘admin.php’).

``blx()->request->getMimeType()``
	Returns a MIME type based on the extension at the end of the URI, if there is one.

``blx()->request->getSegments()``
	Returns an array of the segments in the URI.

``blx()->request->getSegment($num, $default)``
	Returns the URI segment at a specified offset (1-based, not 0-based), or the value passed in for $default if that segment doesn’t exist.

``blx()->request->getType()``
	Returns the type of request this is (‘cp’, ‘site’, ‘action’, or ‘resource’).

``blx()->request->getParam($name, $default)``
	Returns the named GET or POST parameter value, or the value specified by ``$default`` if it doesn’t exist.

``blx()->request->getRequiredParam($name)``
	Returns the named GET or POST parameter value, or throws an exception if it doesn’t exist.

``blx()->request->getQuery($name, $default)``
	Returns the named GET parameter value, or the value specified by ``$default`` if it doesn’t exist.

``blx()->request->getRequiredQuery($name)``
	Returns the named GET parameter value, or throws an exception if it doesn’t exist.

``blx()->request->getPost($name, $default)``
	Returns the named POST parameter value, or the value specified by ``$default`` if it doesn’t exist.

``blx()->request->getRequiredPost($name)``
	Returns the named POST parameter value, or throws an exception if it doesn’t exist.

``blx()->request->getDelete($name, $default)``
	Returns the named DELETE parameter value, or the value specified by ``$default`` if it doesn’t exist.

``blx()->request->getPut($name, $default)``
	Returns the named PUT parameter value, or the value specified by ``$default`` if it doesn’t exist.

``blx()->request->getRestParams()``
	Returns the PUT or DELETE request parameters.

``blx()->request->getUrl()``
	Returns the entire URL for the current request.

``blx()->request->getHostInfo()``
	Returns everything leading up to the URI, not including the opening slash, for the current requested URL.

``blx()->request->isMobileBrowser()``
	Returns whether the current request is coming from a mobile browser or not.

``blx()->request->sendFile($fileName, $content, $options, $terminate)``
	Responds to the request with a file.

``blx()->request->isSecureConnection()``
	Returns whether the current request is over SSL.

``blx()->request->isPostRequest()``
	Returns whether the current request is a POST request.

``blx()->request->isDeleteRequest()``
	Returns whether the current request is a DELETE request.

``blx()->request->isDeleteViaPostRequest()``
	Returns whether the current request is a DELETE request which was tunneled through POST.

``blx()->request->isPutRequest()``
	Returns whether the current request is a PUT request.

``blx()->request->isPutViaPostRequest()``
	Returns whether the current request is a PUT request which was tunneled through POST.

``blx()->request->isAjaxReqest()``
	Returns whether the current request is an AJAX request.

``blx()->request->isFlashRequest()``
	Returns whether the current request is an Adobe Flash or Adobe Flex request.
