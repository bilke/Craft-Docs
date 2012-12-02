Template Tags
=============

On top of the template tags that `Twig comes with <http://twig.sensiolabs.org/doc/tags/index.html>`_, Blocks provides a few of its own.

``{% redirect "some/path" }``
	Redirects the browser to the passed-in URL or site path.

``{% exit 404 %}``
	Cancels the output of the current template, and responds with a 404 (or any other HTTP error code you pass in).

.. _includecssfile:

``{% includeCssFile "/url/to/css/file"  %}``
	Queues up a ``<link rel="stylesheet">`` tag with the passed-in CSS file URL, for inclusion via the :ref:`getHeadNodes() <getheadnodes>` function.

.. _includecss:

``{% includeCss myCss  %}``
	Queues up a ``<style type="text/css">`` tag with the passed-in CSS, for inclusion via the :ref:`getHeadNodes() <getheadnodes>` function.

.. _includejsfile:

``{% includeJsFile "/url/to/js/file"  %}``
	Queues up a ``<script type="javascript">`` tag with the passed-in JS file URL, for inclusion via the :ref:`getFootNodes() <getfootnodes>` function.

.. _includejs:

``{% includeJs myJs %}``
	Queues up a ``<script type="javascript">`` tag with the passed-in JS, for inclusion via the :ref:`getFootNodes() <getfootnodes>` function.
