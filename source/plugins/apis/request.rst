HttpRequestService
==================

HttpRequestService provides the following APIs for getting information about the current HTTP request:

``craft()->request->getPath()``
	Returns the request's path, without the CP trigger segment if there is one.

``craft()->request->getSegments()``
	Returns an array of the path segments, without the CP trigger segment if there is one.

``craft()->request->getSegment($num)``
	Returns a specific URI segment, or null if the segment doesn't exist. Note that ``$num`` is 1-indexed, not 0-indexed, so the first segment can be reached by ``getSegment(1)``.

``craft()->request->isCpRequest()``
	Returns whether the current request URL begins with the CP trigger segment. (Note: this is unrelated to whether the request ultimately gets routed to a resource, controller, or template.)

``craft()->request->isSiteRequest()``
	Returns whether the current request URL does *not* begin with the CP trigger segment. (Note: this is unrelated to whether the request ultimately gets routed to a resource, controller, or template.)

``craft()->request->isResourceRequest()``
	Returns whether the current request is getting routed to a resource file.

``craft()->request->isActionRequest()``
	Returns whether the current request is getting routed to a controller action.

``craft()->request->isTemplateRequest()``
	Returns whether the current request is getting routed to a template.

``craft()->request->getMimeType()``
	Returns a MIME type based on the extension at the end of the URI, if there is one.

``craft()->request->getParam($name, $default)``
	Returns the named GET or POST parameter value, or the value specified by ``$default`` if it doesn’t exist.

``craft()->request->getRequiredParam($name)``
	Returns the named GET or POST parameter value, or throws an exception if it doesn’t exist.

``craft()->request->getQuery($name, $default)``
	Returns the named GET parameter value, or the value specified by ``$default`` if it doesn’t exist.

``craft()->request->getRequiredQuery($name)``
	Returns the named GET parameter value, or throws an exception if it doesn’t exist.

``craft()->request->getPost($name, $default)``
	Returns the named POST parameter value, or the value specified by ``$default`` if it doesn’t exist.

``craft()->request->getRequiredPost($name)``
	Returns the named POST parameter value, or throws an exception if it doesn’t exist.

``craft()->request->getDelete($name, $default)``
	Returns the named DELETE parameter value, or the value specified by ``$default`` if it doesn’t exist.

``craft()->request->getPut($name, $default)``
	Returns the named PUT parameter value, or the value specified by ``$default`` if it doesn’t exist.

``craft()->request->getRestParams()``
	Returns the PUT or DELETE request parameters.

``craft()->request->getCookie($name)``
	Returns a `CHttpCookie <http://www.yiiframework.com/doc/api/1.1/CHttpCookie>`_ object representing a cookie by the given name, or null if it doesn’t exist.

``craft()->request->getUrl()``
	Returns the entire URL for the current request.

``craft()->request->getHostInfo()``
	Returns everything leading up to the URI, not including the opening slash, for the current requested URL.

``craft()->request->isMobileBrowser()``
	Returns whether the current request is coming from a mobile browser or not.

``craft()->request->sendFile($fileName, $content, $options, $terminate)``
	Responds to the request with a file.

``craft()->request->isSecureConnection()``
	Returns whether the current request is over SSL.

``craft()->request->isPostRequest()``
	Returns whether the current request is a POST request.

``craft()->request->isDeleteRequest()``
	Returns whether the current request is a DELETE request.

``craft()->request->isDeleteViaPostRequest()``
	Returns whether the current request is a DELETE request which was tunneled through POST.

``craft()->request->isPutRequest()``
	Returns whether the current request is a PUT request.

``craft()->request->isPutViaPostRequest()``
	Returns whether the current request is a PUT request which was tunneled through POST.

``craft()->request->isAjaxReqest()``
	Returns whether the current request is an AJAX request.

``craft()->request->isFlashRequest()``
	Returns whether the current request is an Adobe Flash or Adobe Flex request.
