PluginsService
==============

PluginsService provides the following APIs for dealing with plugins:

``craft()->plugins->getPlugin($handle)``
	Returns a plugin by its class handle, or null if that plugin isn’t installed and enabled.

``craft()->plugins->getPlugins()``
	Returns an array of all enabled plugins.

``craft()->plugins->callHook($hook, $args)``
	Calls a hook on all plugins, and returns an array of each plugins’ responses. ``$hook`` is the name of the method Craft should look for on the plugin classes, without the “``hook``” prefix. So calling ``callHook('martinis')`` would map to plugin methods named ``hookMartinis()``. Passing ``$args`` is optional, and it sets which arguments should be passed to the hook methods.
