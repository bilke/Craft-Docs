ConfigService
=============

You can access the raw value of any system config item by calling::

	blx()->config->ItemName

ConfigService also provides the following APIs:

``blx()->config->getItem($item, $default)``
	Returns a raw config item value, or whatever was passed as ``$default`` if the value isn’t set.

``blx()->config->getDbItem($item, default)``
	Returns a raw DB config item value, or whatever was passed as ``$default`` if the value isn’t set.

``blx()->config->getCacheDuration()``
	Returns the number of seconds that things should be cached for, based on the cacheDuration config setting (which itself is an interval specification).
