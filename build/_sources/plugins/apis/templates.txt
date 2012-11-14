TemplatesService
================

TemplatesService provides the following APIs for dealing with templates:

``blx()->templates->render($template, $variables)``
	Renders a file-based template, and makes any variables defined in ``$variables`` available to that template.

``blx()->templates->renderString($cacheKey, $template, $variables)``
	Renders a string-based template, and makes any variables defined in ``$variables`` available to that template.

``blx()->templates->includeHeadNode($node)``
	Prepares an HTML node to be included in the template’s <head>.

``blx()->templates->includeFootNode($node)``
	Prepares an HTML node to be included at the end of the template’s <body>.

``blx()->templates->includeCssFile($url)``
	Prepares a CSS file to be included in the template.

``blx()->templates->includeJsFile($url)``
	Prepares a JS file to be included in the template.

``blx()->templates->includeCssResource($path)``
	Prepares a CSS file located in the resources/ folder within blocks/app/ or a plugin’s folder to be included in the template.

``blx()->templates->includeJsResource($path)``
	Prepares a JS file located in the resources/ folder within blocks/app/ or a plugin’s folder to be included in the template.

``blx()->templates->includeCss($css)``
	Prepares CSS to be included in the template.

``blx()->templates->includeJs($js)``
	Prepares JS code to be included in the template.

``blx()->templates->getHeadNodes()``
	Returns all of the nodes prepared for inclusion in the template’s <head> via ``includeHeadNode()``, ``includeCssFile()``, ``includeCssResource()``, and ``includeCss()``.

``blx()->templates->getFootNodes()``
	Returns all of the nodes prepared for inclusion at the end of the template’s <body> via ``includeFootNode()``, ``includeJsFile()``, ``includeJsResource()``, and ``includeJs()``.

``blx()->templates->includeTranslations($message1, $message2, ...)``
	Prepares translations to be included in the template, to be used by the JS via ``Blocks.t(message)``.

``blx()->templates->getTranslations()``
	Returns the prepared translations in JSON.

``blx()->templates->namespaceInputs($html, $namespace)``
	Namespaces any input names and IDs within the HTML, and returns the updated HTML.
