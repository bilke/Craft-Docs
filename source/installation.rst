Installing and Updating
=======================

Requirements
------------

Craft requires the following:

- PHP 5.3+
- MySQL 5.1+ with InnoDB


Installing Craft
-----------------

To install Craft, follow these instructions:

#. Create a MySQL database.

    .. container:: tip

       We recommend you set set the default charset to “utf8” and collation to “utf8_unicode_ci”.

#. Upload the craft/ folder to the folder above the web root on your server.

    .. container:: tip

       Make sure your FTP client is set to upload files in ASCII format.

#. Upload the contents of the public/ folder into the web root of your server.

#. If you’re using Apache, rename the ‘htaccess’ file to ‘.htaccess’ and delete the ‘web.config’ file. If you’re using IIS, just delete the ‘htaccess’ file.
#. Set the craft/storage/ folders’ permissions to 777 and the craft/config/ folders’ permissions to 666.
#. Open up craft/config/db.php and set the ``'server'``, ``'user'``, ``'password'``, and ``'database'`` config settings.
#. Now that everything’s uploaded and configured, you should be able to point your browser to http://yourdomain.com/admin and see the Craft installer.

    .. container:: tip

       *Note:* If /admin is giving you a 404, your server might not be configured to redirect would-be 404’s to index.php correctly. Try going to /index.php/admin or /index.php?p=admin instead.


One-click Updating
------------------

Craft’s CP has an “Updates” tab where you can check if a new update is available, and update Craft with one click. You also have the option of downloading the update, if you’d prefer to install it manually (see below).

For one-click updates to work, Craft needs to be able to write to the craft/app/ folder, either via user or group-level permissions. After Craft downloads an update patch, it will ensure it has write access to all of the files included in the patch. If it doesn’t, Craft will abort the update and present you with a list of files that it can’t write to.


Manually Updating
-----------------

Updating Craft manually is as simple as replacing your old craft/app/ folder with the new one. If you’re manually updating a live site, we recommend you follow these instructions to minimize the time your site is down:

#. Rename the craft/app/ folder in the release to “app-new”.
#. Upload craft/app-new/ to your server’s craft/ folder.
#. Once app-new/ is done uploading, rename craft/app/ to craft/app-old/ on your server.
#. Rename craft/app-new/ to craft/app/ on your server.
#. Point your browser to your Craft CP. You will be prompted to proceed with a DB update. Go ahead and click “Finish up”.
