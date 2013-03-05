PathService
===========

PathService provides the following APIs for dealing with file system paths:

``craft()->path->getAppPath()``
	Returns the path to the craft/app/ folder.

``craft()->path->getConfigPath()``
	Returns the path to the craft/config/ folder.

``craft()->path->getPluginsPath()``
	Returns the path to the craft/plugins/ folder.

``craft()->path->getStoragePath()``
	Returns the path to the craft/storage/ folder.

``craft()->path->getRuntimePath()``
	Returns the path to the craft/storage/runtime/ folder.

``craft()->path->getLogPath()``
	Returns the path to the craft/storage/runtime/logs/ folder.

``craft()->path->getTempPath()``
	Returns the path to the craft/storage/runtime/temp/ folder.

``craft()->path->getUserPhotosPath()``
	Returns the path to the craft/storage/userphotos/ folder.

``craft()->path->getStatePath()``
	Returns the path to the craft/storage/runtime/state/ folder.

``craft()->path->getLibPath()``
	Returns the path to the craft/app/lib/ folder.

``craft()->path->getResourcesPath()``
	Returns the path to the craft/app/resources/ folder.

``craft()->path->getFrameworkPath()``
	Returns the path to the craft/app/framework/ folder.

``craft()->path->getMigrationsPath()``
	Returns the path to the craft/app/migrations/ folder.

``craft()->path->getCpTranslationsPath()``
	Returns the path to the craft/app/translations/ folder.

``craft()->path->getSiteTranslationsPath()``
	Returns the path to the craft/translations/ folder.

``craft()->path->getTemplatesPath()``
	Returns the active templates path.

``craft()->path->setTemplatesPath($path)``
	Sets the active templates path.

``craft()->path->getCpTemplatesPath()``
	Returns the path to the craft/app/templates/ folder.

``craft()->path->getSiteTemplatesPath()``
	Returns the path to the craft/templates/ folder.

``craft()->path->getCompiledTemplatesPath()``
	Returns the path to the compiled templates folder if it doesn’t exist, and.

``craft()->path->getSessionPath()``
	Returns the path to the craft/storage/runtime/sessions/ folder if it.

``craft()->path->getCachePath()``
	Returns the path to the craft/storage/runtime/cache/ folder if it.
