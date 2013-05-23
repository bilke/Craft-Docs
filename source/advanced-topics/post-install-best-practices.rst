Post-Installation Best Practices
================================

Rename your Control Panel Trigger Word
--------------------------------------

By default you access your control panel through the ``admin`` trigger word (i.e. ``http://yourdomain.com/admin``).

In order to make it more difficult for people to guess your control panel’s entry point, you can change the :ref:`cpTrigger <cpTrigger>` config variable.

Simply edit your ``craft/config/general.php`` file:

.. code-block:: php

	return array(
	  'cpTrigger' => 'superSecret',
	);

Now you can access your control panel through ``http://yourdomain.com/superSecret``.
