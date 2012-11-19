PathService
===========

PathService provides the following APIs for dealing with file system paths:

``blx()->path->getAppPath()``
	Returns the path to the blocks/app/ folder.

``blx()->path->getConfigPath()``
	Returns the path to the blocks/config/ folder.

``blx()->path->getPluginsPath()``
	Returns the path to the blocks/plugins/ folder.

``blx()->path->getUploadsPath()``
	Returns the path to the blocks/uploads/ folder.

``blx()->path->getRuntimePath()``
	Returns the path to the blocks/runtime/ folder.

``blx()->path->getTempPath()``
	Creates the blocks/runtime/temp/ folder if it doesn't exist, and returns the path to it.

``blx()->path->getUserPhotosPath()``
	Creates the blocks/uploads/userphotos/ folder if it doesn’t exist, and returns the path to it.

``blx()->path->getLogPath()``
	Creates the blocks/runtime/logs/ folder if it doesn’t exist, and returns the path to it.

``blx()->path->getStatePath()``
	Creates the blocks/runtime/state/ folder if it doesn’t exist, and returns the path to it.

``blx()->path->getComponentsPath()``
	Returns the path to the blocks/app/components/ folder.

``blx()->path->getLibPath()``
	Returns the path to the blocks/app/lib/ folder.

``blx()->path->getResourcesPath()``
	Returns the path to the blocks/app/resources/ folder.

``blx()->path->getFrameworkPath()``
	Returns the path to the blocks/app/framework/ folder.

``blx()->path->getMigrationsPath()``
	Returns the path to the blocks/app/migrations/ folder.

``blx()->path->getCpTranslationsPath()``
	Returns the path to the blocks/app/translations/ folder.

``blx()->path->getSiteTranslationsPath()``
	Returns the path to the blocks/translations/ folder.

``blx()->path->getConsolePath()``
	Returns the path to the blocks/app/console/ folder.

``blx()->path->getCommandsPath()``
	Returns the path to the blocks/app/console/commands/ folder.

``blx()->path->getTemplatesPath()``
	Returns the active templates path.

``blx()->path->setTemplatesPath($path)``
	Sets the active templates path.

``blx()->path->getCpTemplatesPath()``
	Returns the path to the blocks/app/templates/ folder.

``blx()->path->getSiteTemplatesPath()``
	Returns the path to the blocks/templates/ folder.

``blx()->path->getOfflineTemplatesPath()``
	Returns the path to the offline templates folder.

``blx()->path->getCompiledTemplatesPath()``
	Creates the compiled templates folder if it doesn’t exist, and returns the path to it.

``blx()->path->getSessionPath()``
	Creates the blocks/runtime/sessions/ folder if it doesn’t exist, and returns the path to it.

``blx()->path->getCachePath()``
	Creates the blocks/runtime/cache/ folder if it doesn’t exist, and returns the path to it.
