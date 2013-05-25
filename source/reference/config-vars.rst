Config Variables
================

Config variables allow you to alter the default behavior of Craft.

You can change them by altering your ``craft/config/general.php`` file.

Here is the definitive list:

*  :ref:`actionTrigger <actionTrigger>`
*  :ref:`activateAccountPath <activateAccountPath>`
*  :ref:`activateFailurePath <activateFailurePath>`
*  :ref:`activateSuccessPath <activateSuccessPath>`
*  :ref:`allowedFileExtensions <allowedFileExtensions>`
*  :ref:`backupDbOnUpdate <backupDbOnUpdate>`
*  :ref:`cacheDuration <cacheDuration>`
*  :ref:`cooldownDuration <cooldownDuration>`
*  :ref:`cpTrigger <cpTrigger>`
*  :ref:`customAsciiCharMappings <customAsciiCharMappings>`
*  :ref:`defaultFolderPermissions <defaultFolderPermissions>`
*  :ref:`devMode <devMode>`
*  :ref:`invalidLoginWindowDuration <invalidLoginWindowDuration>`
*  :ref:`loginPath <loginPath>`
*  :ref:`logoutPath <logoutPath>`
*  :ref:`maxInvalidLogins <maxInvalidLogins>`
*  :ref:`omitScriptNameInUrls <omitScriptNameInUrls>`
*  :ref:`overridePhpSessionLocation <overridePhpSessionLocation>`
*  :ref:`pageTrigger <pageTrigger>`
*  :ref:`phpMaxMemoryLimit <phpMaxMemoryLimit>`
*  :ref:`phpPass-iterationCount <phpPass-iterationCount>`
*  :ref:`rememberUsernameDuration <rememberUsernameDuration>`
*  :ref:`rememberUserSessionDuration <rememberUserSessionDuration>`
*  :ref:`requireMatchingUserAgentForSession <requireMatchingUserAgentForSession>`
*  :ref:`requireUserAgentAndIpForSession <requireUserAgentAndIpForSession>`
*  :ref:`resourceTrigger <resourceTrigger>`
*  :ref:`restoreDbOnUpdateFailure <restoreDbOnUpdateFailure>`
*  :ref:`searchIgnoreWords <searchIgnoreWords>`
*  :ref:`setPasswordPath <setPasswordPath>`
*  :ref:`siteRoutesSource <siteRoutesSource>`
*  :ref:`testToEmailAddress <testToEmailAddress>`
*  :ref:`translationDebugOutput <translationDebugOutput>`
*  :ref:`useCompressedJs <useCompressedJs>`
*  :ref:`usePathInfo <usePathInfo>`
*  :ref:`userSessionDuration <userSessionDuration>`
*  :ref:`useXSendFile <useXSendFile>`
*  :ref:`verificationCodeDuration <verificationCodeDuration>`
*  :ref:`writableFilePermissions <writableFilePermissions>`
*  :ref:`writableFolderPermissions <writableFolderPermissions>`

--------

.. _actionTrigger:

actionTrigger
-------------

:**Values**: ``Any string``
:**Default**: ``'action'``

The string to use in the URL to tell Craft that this is an action request and trigger a controller’s action.

For example, ``http://yourdomain.com/actions``.

--------

.. _activateAccountPath:

activateAccountPath
-------------------

:**Values**: ``Any string``
:**Default**: ``'activate'``

The path Craft will use when activating a user’s account.

For example, ``http://yourdomain.com/admin/activate``.

--------

.. _activateFailurePath:

activateFailurePath
-------------------

:**Values**: ``Any string``
:**Default**: ``empty``

If this is set, Craft will redirect the user here if user account activation was not successful.  Otherwise, an exception is thrown.

--------

.. _activateSuccessPath:

activateSuccessPath
-------------------

:**Values**: ``Any string``
:**Default**: ``empty``

If this is set, Craft will redirect the user here upon successful user account activation. Otherwise, they will be redirected to the login page.

--------

.. _allowedFileExtensions:

allowedFileExtensions
---------------------

:**Values**: ``A comma separated list of file extensions``
:**Default**: ``7z, aiff, asf, avi, bmp, csv, doc, docx, fla, flv, gif, gz, gzip, htm, html, jpeg, jpg, mid, mov, mp3, mp4, m4a, m4v, mpc, mpeg, mpg, ods, odt, ogg, pdf, png, pt, pptx, pxd, qt, ram, rar, rm, rmi, rmvb, rtf, sdc, sitd, swf, sxc, sxw, tar, tgz, tif, tiff, txt, vsd, wav, wma, wmv, xls, xlsx, zip``

A list of file extensions that Craft will allow during file uploading.

--------

.. _backupDbOnUpdate:

backupDbOnUpdate
----------------

:**Values**: ``true or false``
:**Default**: ``true``

If set to true, Craft will backup the database before making any schema changes when doing an update.

--------

.. _cacheDuration:

cacheDuration
-------------

:**Values**: ``See http://www.php.net/manual/en/dateinterval.construct.php``
:**Default**: ``'P1D' (1 day)``

The length of time to cache items in craft/storage/runtime.

Set to '0' to cache items indefinitely.

--------

.. _cooldownDuration:

cooldownDuration
----------------

:**Values**: ``See http://www.php.net/manual/en/dateinterval.construct.php``
:**Default**: ``'PT5M' (5 minutes)``

The amount of time a user must wait before logging in after their account is locked.

Set to ``'0'`` to prevent users from ever being able to log back in without an admin unlocking their account first.

--------

.. _cpTrigger:

cpTrigger
---------

:**Values**: ``Any string``
:**Default**: ``'admin'``

The string to use in the URL to tell Craft that this is a control panel request.

For example, ``http://yourdomain.com/admin``.

.. container:: tip

  It is good practice to change this to something other than the default ``admin`` to make it harder for people to guess your control panel entry point.

--------

.. _customAsciiCharMappings:

customAsciiCharMappings
-----------------------

:**Values**: ``An array of ASCII characters``
:**Default**: ``Empty array``

Provides a way to add custom ASCII character mappings.

This array is merged into the default mapping array in ``StringHelper::getAsciiCharMap()``.

--------

.. _defaultFolderPermissions:

defaultFolderPermissions
------------------------

:**Values**: ``Valid numeric permissions``
:**Default**: ``0755``

The default permissions Craft will use when creating a folder on the file system.

--------

.. _devMode:

devMode
-------

:**Values**: ``true or false``
:**Default**: ``false``

Determines whether the system is in development mode or not.  If the system is in development mode, several things happen:

*  All messages are logged to all routes, regardless of their log level, including database diagnostic profile and tracing information.
*  Profile and log messages are send to your browser’s console.
*  Any exceptions or errors that are thrown will display the full stack trace and messages on the front-end of the site as well as the control panel.
*  Any calls to ``UrlHelper::getResourceUrl()`` will remove the timestamp from the returned URL bypassing caching.
*  Twig’s ``strict_variables`` and ``debug`` options are enabled.
*  A yellow construction banner is placed at the top of every control panel page to remind you development mode is enabled.

.. container:: tip

  Development mode should not be turned on in a live/production environment.

--------

.. _invalidLoginWindowDuration:

invalidLoginWindowDuration
--------------------------

:**Values**: ``See http://www.php.net/manual/en/dateinterval.construct.php``
:**Default**: ``'PT1H'``

The amount of time to track invalid login attempts for a user.

If someone tries to log in too many times within this window, their account will get locked for ':ref:`cooldownDuration <cooldownDuration>`'

--------

.. _loginPath:

loginPath
---------

:**Values**: ``Any string``
:**Default**: ``'login'``

The path to redirect to when accessing a page that requires a user to be logged in and they currently are not.

For example, ``http://yourdomain.com/admin/login``.

--------

.. _logoutPath:

logoutPath
----------

:**Values**: ``Any string``
:**Default**: ``'logout'``

The path to tell Craft to trigger a user logout for the current session.

For example, ``http://yourdomain.com/admin/logout``.

--------

.. _maxInvalidLogins:

maxInvalidLogins
----------------

:**Values**: ``Any integer value``
:**Default**: ``5``

The number of invalid login attempts within the ':ref:`invalidLoginWindowDuration <invalidLoginWindowDuration>`' before the account gets locked.

--------

.. _omitScriptNameInUrls:

omitScriptNameInUrls
--------------------

:**Values**: ``true, false or 'auto'``
:**Default**: ``'auto'``

Whether generated URLs should omit 'index.php', e.g. ``http://yourdomain.com/path`` as opposed to showing it, e.g. ``http://yourdomain.com/index.php/path``.

This can only be possible if your server is configured to redirect would-be 404's to index.php, for example, with the redirect found in the 'htaccess' file that came with Craft::

  RewriteEngine On

  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule (.+) /index.php?p=$1 [QSA,L]

If set to 'auto', Craft will automatically try to detect if your environment supports this feature and will cache the result for future requests.

If you know for sure your environment supports this feature, you can set this to ``true``.  Conversely, if you do not want this feature, set this to ``false``.

--------

.. _overridePhpSessionLocation:

overridePhpSessionLocation
--------------------------


:**Values**: ``true, false or 'auto'``
:**Default**: ``'auto'``


If set to ``'auto'``, Craft will attempt to detect if PHP is set to save sessions to a distributed cache location (i.e. memcache).

Set to true if you want Craft to save PHP session data under it’s storage folder, or false to use the server’s default PHP session data path.

--------

.. _pageTrigger:

pageTrigger
-----------

:**Values**: ``Any string``
:**Default**: ``'action'``

The string to use in the URL that precedes the page number in paginated requests.

For example, ``http://yourdomain.com/archive?p=1``.

--------

.. _phpMaxMemoryLimit:

phpMaxMemoryLimit
-----------------

:**Values**: ``The max amount of memory in Mb Craft can use.``
:**Default**: ``'256M'``

The maximum amount of memory Craft will try to reserve during memory intensive operations such as zipping, unzipping and updating.

--------

.. _phpPass-iterationCount:

phpPass-iterationCount
----------------------

:**Values**: ``Integer between 4 and 31``
:**Default**: ``8``

Controls the number of iterations for key stretching when encrypting a string.

A setting of 8 means the hash algorithm will be applied 2^8 = 256 times.

This setting should be kept between 4 and 31.

--------

.. _rememberUsernameDuration:

rememberUsernameDuration
------------------------

:**Values**: ``See http://www.php.net/manual/en/dateinterval.construct.php``
:**Default**: ``'P1Y' (1 year)``

The amount of time Craft will remember a username and pre-populate it on the login page.

Set to ``'0'`` to disable this feature altogether.

--------

.. _rememberUserSessionDuration:

rememberUserSessionDuration
-----------------------------

:**Values**: ``See http://www.php.net/manual/en/dateinterval.construct.php``
:**Default**: ``'P2W' (2 weeks)``

The amount of time a user stays logged if “Remember Me” is checked on the login page.

Set to ``'0'`` to disable the “Remember Me” feature altogether.

--------

.. _requireMatchingUserAgentForSession:

requireMatchingUserAgentForSession
----------------------------------

:**Values**: ``true or false``
:**Default**: ``'true'``

If set to ``true``, when renewing or restoring session from cookie, the current user agent string must exactly match the user agent string saved in the cookie.

--------

.. _requireUserAgentAndIpForSession:

requireUserAgentAndIpForSession
-------------------------------

:**Values**: ``true or false``
:**Default**: ``true``

If set to ``true``, when renewing or restoring session from cookie, the current request must present a user agent string and IP address.

--------

.. _resourceTrigger:

resourceTrigger
---------------

:**Values**: ``Any string``
:**Default**: ``'resources'``

The string to use in the URL to tell Craft that this is a resource request.

For example, ``http://yourdomain.com/resources``.

--------

.. _restoreDbOnUpdateFailure:

restoreDbOnUpdateFailure
------------------------

:**Values**: ``true or false``
:**Default**: ``true``

If set to ``true`` and ':ref:`backupDbOnUpdate <backupDbOnUpdate>`' is ``true``, Craft will restore the last database backup in the event that an update with a migration failed.

--------

.. _searchIgnoreWords:

searchIgnoreWords
-----------------

:**Values**: ``An array of words to ignore during searching.``
:**Default**: ``'the', 'and'``

An array of words to ignore during searching.

--------

.. _setPasswordPath:

setPasswordPath
---------------

:**Values**: ``Any string``
:**Default**: ``'setpassword'``

The path Craft will use to set users' passwords.

For example, ``http://yourdomain.com/admin/setpassword``.

--------

.. _siteRoutesSource:

siteRoutesSource
----------------

:**Values**: ``'db' or 'file'``
:**Default**: ``'db'``

Tells Craft where to look for possible site routes.

If set to ``file``, Craft will look for routes in ``craft/config/routes.php``, otherwise it will look in the ``craft_routes`` database table.

--------

.. _testToEmailAddress:

testToEmailAddress
------------------

:**Values**: ``An email address``
:**Default**: ``empty``

If this is set, then any emails sent through the ``EmailService`` will go to this address instead of ``EmailModel->toEmail``.

--------

.. _translationDebugOutput:

translationDebugOutput
------------------------

:**Values**: ``true or false``
:**Default**: ``false``

Controls whether to add the '@' symbol around translated strings to help find strings that haven’t been translated, yet.

--------

.. _useCompressedJs:

useCompressedJs
---------------

:**Values**: ``true or false``
:**Default**: ``true``

Controls whether to use the minified and merged JavaScript in the ``craft/app/resources/js/compressed`` folder or the uncompressed files in the ``craft/app/resources/js`` folder.

--------

.. _usePathInfo:

usePathInfo
-----------

:**Values**: ``true, false or 'auto'``
:**Default**: ``'auto'``

Whether generated URLs should be formatted using PATH_INFO, e.g. ``http://yourdomain.com/index.php/path/``, as opposed to using the query string, e.g. ``http://yourdomain.com/index.php?p=path``.

If set to 'auto', Craft will automatically try to detect if your environment supports this feature and will cache the result for future requests.

If you know for sure your environment supports this feature, you can set this to ``true``.  Conversely, if you do not want this feature, set this to ``false``.

--------

.. _userSessionDuration:

userSessionDuration
-------------------

:**Values**: ``See http://www.php.net/manual/en/dateinterval.construct.php``
:**Default**: ``false``

The amount of time a user stays logged in.

If set to ``'0'``, the session will expire when the browser is closed.

--------

.. _useXSendFile:

useXSendFile
------------

:**Values**: ``true or false``
:**Default**: ``false``

If you have Apache’s mod_xsendfile installed and configured, set this to ``true`` and Craft will use xSendFile to send files to the browser.

--------

.. _verificationCodeDuration:

verificationCodeDuration
------------------------

:**Values**: ``See http://www.php.net/manual/en/dateinterval.construct.php``
:**Default**: ``'P1D' (1 day)``

The amount of time a newly generated verification code will last before expiring.

Used in such things as account creation and password resetting.

--------

.. _writableFilePermissions:

writableFilePermissions
-----------------------

:**Values**: ``Valid numeric permissions``
:**Default**: ``0777``

The permissions Craft will use when creating a file to ensure that it is writable.

--------

.. _writableFolderPermissions:

writableFolderPermissions
-------------------------

:**Values**: ``Valid numeric permissions``
:**Default**: ``0777``

The permissions Craft will use when creating a folder to ensure that it is writable.

--------

