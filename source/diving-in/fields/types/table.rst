Table
=====

The Table Field Type allows you to create a dynamic form to add content to a previously unspecified number of rows.  You can set the Column Heading, Handle, Width, and Type.  For the type of content, you may select from:

* Single-line text
* Multi-line text
* Number
* Checkbox

And you may set default values for the row to be populated with when entering content.


Template
----------

.. code-block:: html

    	{% for item in entry.fieldHandle %}
		{% if loop.first %}<ul>{ % endif %}
    			<li>{{ item.columnHandle }} </li>
    		{% if loop.last %}</ul> {% endif %}
    	{% endfor %}
