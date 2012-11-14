Installing and Updating
=======================

Requirements
------------

Blocks requires the following:

- PHP 5.3
- MySQL 5.1


Installing Blocks
-----------------

To install Blocks, follow these instructions:

1. Create a MySQL database and set the charset to ‘utf8’ and the collation to ‘utf8_unicode_ci’.
2. Upload the entire contents of your Blocks/ folder to the web root of your server. Make sure your FTP client is set to upload files in ASCII format.
3. If you’re using Apache, rename the ‘htaccess’ file to ‘.htaccess’ and delete the ‘web.config’ file. If you’re using IIS, just delete the ‘htaccess’ file.
4. Set the blocks/storage/ folders’ permissions to 777.
5. Open up blocks/config/db.php and set the ``'server'``, ``'user'``, ``'password'``, and ``'database'`` config settings.
6. Now that everything’s uploaded and configured, you should be able to point your browser at http://yourdomain.com/admin.php and see the Blocks installer.


Updating Blocks
---------------

Admin users can update Blocks to the latest version from the Updates section of the CP, or you can update Blocks manually by downloading the latest version, and following these instructions:

1. Rename the blocks/app/ folder to blocks/app-new/
2. Upload blocks/app-new/ to your web server’s blocks/ folder
3. Rename blocks/app/ to blocks/app-old/ on your web server
4. Rename blocks/app-new/ to blocks/app/ on your web server
5. Go to your Blocks CP in your browser. You will be prompted to proceed with a DB update. Click “Finish up”.
