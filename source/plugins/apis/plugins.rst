PluginsService
==============

PluginsService provides the following APIs for dealing with plugins:

``blx()->plugins->getPlugin($handle)``
	Returns a plugin by its class handle, or null if that plugin isn’t installed and enabled.

``blx()->plugins->getPlugins()``
	Returns an array of all enabled plugins.

``blx()->plugins->callHook($hook, $args)``
	Calls a hook on all plugins, and returns an array of each plugins’ responses. ``$hook`` is the name of the method Blocks should look for on the plugin classes, without the “``hook``” prefix. So calling ``callHook('martinis')`` would map to plugin methods named ``hookMartinis()``. Passing ``$args`` is optional, and it sets which arguments should be passed to the hook methods.
