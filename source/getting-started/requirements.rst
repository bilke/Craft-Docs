Requirements
============

During installation, Craft does a myriad of checks to determine if the environment it is about to be installed on has all of the necessary requirements for it to operate.

If the installer finds a requirement missing, it will stop and give you a chance to correct the issue.

Server Requirements
------------------

* PHP version 5.3.0 or newer
* MySQL version 5.1.0 or newer
* MySQL InnoDB storage engine enabled
* A minimum of 32MB of memory allocated to PHP
* A minimum of 15MB of free disk space
* A minimum of 1MB of database space.

.. container:: tip

  **Note:** The disk space and database size will grow over time as your site grows and more content gets added, so plan accordingly.

The account you tell Craft to connect to your database with must have the follow privileges granted to it:

* SELECT
* INSERT
* DELETE
* UPDATE
* CREATE
* ALTER
* INDEX
* DROP

Craft requires the following PHP extensions to be enabled:

* `Reflection Extension <http://php.net/manual/en/class.reflectionextension.php>`_
* `PCRE Extension <http://php.net/manual/en/book.pcre.php>`_
* `SPL Extension <http://php.net/manual/en/book.spl.php>`_
* `PDO Extension <http://php.net/manual/en/book.pdo.php>`_
* `PDO MySQL Extension <http://php.net/manual/en/ref.pdo-mysql.php>`_
* `Mcrypt Extension <http://php.net/manual/en/book.mcrypt.php>`_
* `GD Extension with FreeType Support <http://php.net/manual/en/book.image.php>`_
* `OpenSSL Extension <http://php.net/manual/en/book.openssl.php>`_
* `DOM Extension <http://php.net/manual/en/book.dom.php>`_ Optional - Used by the FeedsService to parse RSS feeds.

Browser Requirements
--------------------

The Craft control panel supports a minimum of:

* Chrome 20
* Firefox 14
* Safari 5.1
* Internet Explorer 9

Craft has been also tested on the iPad and iPhone’s mobile Safari as well as Android’s Chrome.

Note that the front-end pages to your Craft site may have different browser requirements than the control panel.

In addition to these version requirements, Craft requires that JavaScript be enabled to access the control panel.


