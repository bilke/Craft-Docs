Entry Edit Links
===============

You can add an 'Edit This' type link for each entry on the front-end that goes directly to that entry in the Control Panel.


.. code-block:: html

	{% for entry in craft.entries.find({section: 'Blog'}) %}
	<h1 class="title"><a href="{{entry.url}}">{{entry.title}}</a></h1>
	{{entry.body | raw}}
	<p class="sig">-<em>{{ entry.author }}</em>, {{entry.postDate}}</p>

	{# Edit This Link #}

	{% if user.admin is defined %}
	  <a href="{{ entry.getCpEditUrl() }}" target="_blank">edit</a>
	{% endif %}

	{# End Edit This Link #}

{% endfor %}
