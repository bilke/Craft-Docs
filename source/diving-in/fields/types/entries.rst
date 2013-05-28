Entries
=======

Need to relate one entry to another? How about relating multiple entries?  Enter the entries field type.

[BRAD - SCREENSHOT OF Entries fieldtype settings]

Settings
--------

Sources
    What section(s) are related entries located in?

Limit
    Limit the number of selectable entries

Entry Page
----------

[BRAD - SCREENSHOT of Entries relationship on Entry form and modal]


Template
----------

.. code-block:: html

    	{% for entry in craft.entries.find() %}
    		<h2>{{ entry.title }}</h2>
    			{% for post in entry.blogEntries %}
    				{% if loop.first %}<ul> {% endif %}
    					<li>{{ post.title }}</li>
    				{% if loop.last %}</ul>{% endif %}
    			{% endfor %}
    	{% endfor %}