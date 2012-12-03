Template Functions
==================

On top of the template functions that `Twig comes with <http://twig.sensiolabs.org/doc/functions/index.html>`_, Blocks provides a few of its own:

``url('some/path')``
	Returns a URL relative to your Site URL.

``round(212/5)``
	Rounds off a number to the closest integer. For example, ``{{ round(42.1) }}`` would output ‘42’, while ``{{ round(42.9) }}`` would output ‘43’.

``ceil(212/5)``
	Rounds of a number up. For example, ``{{ ceil(42.1) }}`` would output ‘43’.

``floor(212/5)``
	Rounds a number down. For example, ``{{ floor(42.9) }}`` would output ‘42’.

``min(1, 2, 3)`` or ``min([ 1, 2, 3])``
	Returns the smallest number of a given set.

``max(1, 2, 3)`` or ``max([ 1, 2, 3])``
	Returns the largest number of a given set.

.. _getheadnodes:

``getHeadNodes()``
	Outputs all of the HTML nodes that have been queued up by the :ref:`includeCssFile <includecssfile>`, :ref:`includeCss <includecss>`, and :ref:`includeHiResCss <includehirescss>` tags.

.. _getfootnodes:

``getFootNodes()``
	Outputs all of the HTML nodes that have been queued up by the :ref:`includeJsFile <includejsfile>` and :ref:`includeJs <includejs>` tags.
