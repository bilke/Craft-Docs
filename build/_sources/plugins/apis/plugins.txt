PluginsService
==============

PluginsService provides the following APIs for dealing with plugins:

``blx()->plugins->getPlugin($handle)``
	Returns a plugin by its class handle, or null if that plugin isn’t installed and enabled.

``blx()->plugins->getPlugins()``
	Returns an array of all enabled plugins.

``blx()->plugins->callHook($method, $args)``
	Calls a method by the name of ``$method`` on all enabled plugins, passing in ``$args`` (optional) as arguments. Returns an array of each plugins’ responses.
