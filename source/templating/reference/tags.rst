Template Tags
=============

On top of the template tags that `Twig comes with <http://twig.sensiolabs.org/doc/tags/index.html>`_, Blocks provides a few of its own.

``redirect``
	Redirects the browser to the passed-in URL or site path.

	.. code-block:: html

		{% if not user %}
		    {% redirect 'login' %}
		{% endif %}


``exit``
	Cancels the output of the current template, and throws an HttpException, optionally with the status code you pass in.

	.. code-block:: html

		{% set entry = blx.entries.id(entryId) %}

		{% if not entry %}
		    {% exit 404 %}
		{% endif %}


.. _includecssfile:

``includeCssFile``
	Queues up a ``<link rel="stylesheet">`` tag with the passed-in CSS file URL, for inclusion via the :ref:`getHeadNodes() <getheadnodes>` function.

	.. code-block:: html

		{% includeCssFile "/resources/css/global.css" %}


.. _includejsfile:

``includeJsFile``
	Queues up a ``<script type="javascript">`` tag with the passed-in JS file URL, for inclusion via the :ref:`getFootNodes() <getfootnodes>` function.

	.. code-block:: html

		{% includeJsFile "/resources/js/global.js" %}


.. _includecss:

``includeCss``
	Queues up CSS for inclusion via the :ref:`getHeadNodes() <getheadnodes>` function.

	.. code-block:: html

		{% set myCss %}
		    .bg { background-image: url(/resources/images/bg.png) }
		{% endset %}

		{% includeCss myCss %}


.. _includehirescss:

``includeHiResCss``
	Queues up CSS targetted at hi-res displays for inclusion via the :ref:`getHeadNodes() <getheadnodes>` function.

	.. code-block:: html

		{% set myHiResCss %}
		    .bg { background-image: url(/resources/images/bg_2x.png); }
		{% endset %}

		{% includeHiResCss myHiResCss %}


.. _includejs:

``includeJs``
	Queues up Javascript code for inclusion via the :ref:`getFootNodes() <getfootnodes>` function.

	.. code-block:: html

		{% set myJs %}
		    $('.date').datepicker();
		{% endset %}

		{% includeJs myJs %}
