TemplatesService
================

TemplatesService provides the following APIs for dealing with templates:

``craft()->templates->render($template, $variables)``
	Renders a file-based template, and makes any variables defined in ``$variables`` available to that template.

``craft()->templates->renderString($cacheKey, $template, $variables)``
	Renders a string-based template, and makes any variables defined in ``$variables`` available to that template.

``craft()->templates->includeHeadNode($node)``
	Prepares an HTML node to be included in the template’s <head>.

``craft()->templates->includeFootNode($node)``
	Prepares an HTML node to be included at the end of the template’s <body>.

``craft()->templates->includeCssFile($url)``
	Prepares a CSS file to be included in the template.

``craft()->templates->includeJsFile($url)``
	Prepares a JS file to be included in the template.

``craft()->templates->includeCssResource($path)``
	Prepares a CSS file located in the resources/ folder within craft/app/ or a plugin’s folder to be included in the template.

``craft()->templates->includeJsResource($path)``
	Prepares a JS file located in the resources/ folder within craft/app/ or a plugin’s folder to be included in the template.

``craft()->templates->includeCss($css)``
	Prepares CSS to be included in the template.

``craft()->templates->includeHiResCss($css)``
	Prepares CSS targeted at hi-res displays to be included in the template.

``craft()->templates->includeJs($js)``
	Prepares JS code to be included in the template.

``craft()->templates->getHeadNodes()``
	Returns all of the nodes prepared for inclusion in the template’s <head> via ``includeHeadNode()``, ``includeCssFile()``, ``includeCssResource()``, and ``includeCss()``.

``craft()->templates->getFootNodes()``
	Returns all of the nodes prepared for inclusion at the end of the template’s <body> via ``includeFootNode()``, ``includeJsFile()``, ``includeJsResource()``, and ``includeJs()``.

``craft()->templates->includeTranslations($message1, $message2, ...)``
	Prepares translations to be included in the template, to be used by the JS via ``Craft.t(message)``.

``craft()->templates->getTranslations()``
	Returns the prepared translations in JSON.

``craft()->templates->namespaceInputs($html, $namespace)``
	Namespaces any input names and IDs within the HTML, and returns the updated HTML.
