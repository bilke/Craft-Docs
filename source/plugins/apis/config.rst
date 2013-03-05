ConfigService
=============

ConfigService provides the following APIs for grabbing config values:

``craft()->config->get($item)``
	Returns a raw config item value, as defined in craft/config/general.php or craft/app/etc/config/defaults/general.php. If the config item wasn’t defined in either of those files, ``null`` will be ruturned instead.

``craft()->config->getDbItem($item, default)``
	Returns a raw DB config item value, or whatever was passed as ``$default`` if the value isn’t set.

``craft()->config->getCacheDuration()``
	Returns the number of seconds that things should be cached for, based on the cacheDuration config setting (which itself is an interval specification).
