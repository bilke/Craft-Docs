``craft.users``
===============

If you have the Users package installed, you can access your site’s users from your templates via ``craft.users``.


Output Functions
----------------

There are three ways you can get ``craft.users`` to output data: ``find()``, ``first()``, and ``total()``.

If you want to get an array of multiple users that you can loop through, use ``find()``:

.. code-block:: html

    {% for accounts in craft.users.find() %}
        <li>{{ account.username }}</li>
    {% endfor %}

If you just want to get one user, use ``first()``:

.. code-block:: html

    {% set account = craft.users.first() %}

    {{ account.title}}

If you want to get the total number of users, use ``total()``:

.. code-block:: html

    Total users: {{ craft.users.total() }}

.. container:: tip

   **Note:** You might have noticed that we’re setting the actual user variables to “``account``” rather than “``user``”. That’s because ``user`` is already a :doc:`global variable <globals>`, and assigning ``user`` to a new variable would overwrite that.


Tailoring the Results
---------------------

Calling ``craft.users.find()`` by itself is going to return 100 users, ordered by username. If that happens to be exactly what you needed, great! But most likely you’ll want to customize the results a bit.

Craft supports a number of parameters that should help you do just that.


Parameter Syntax
~~~~~~~~~~~~~~~~

There are two ways you can add parameters to your ``craft.users`` tag:

#. You can chain the parameters together as additional functions before reaching the output function::

      craft.users.group('authors').find()

#. You can pass your parameters as an argument to the output functions::

      craft.users.find({ group: 'authors' })

Both of these ways are perfectly valid, and each have their place. The former is more readable, but with the latter syntax, parameters can be defined once, and reused:

.. code-block:: html

    {% set params = { group: 'authors' } %}

    Total authors: {{ craft.users.total(params) }}

    The last 5 authors:

    <ul>
        {% for author in craft.users.order('dateCreated desc').limit(5).find(params) %}
            <li><a href="{{ url('authors/'~author.username) }}">{{ author }}</a></li>
        {% endfor %}
    </ul>

Notice how in that example, we only had to define the ``group`` parameter once, but were able to use it twice – once to get the grand total number of users that meet the criteria, and a second time to actually grab the 5 latest ones.

That was also an example of how the two syntaxes can be mixed and matched. Notice how on that for-loop line, we are setting the order and limit using the chaining syntax, but applying the group parameter by passing ``params`` as an argument to ``find()``.


Shared Parameters
~~~~~~~~~~~~~~~~~

Each of the ``craft.users`` output functions share several parameters that will help you find the user(s) you’re looking for:

``id``
    Only fetch the user with the given ID.

``groupId``
	Only fetch users in the group with the given ID.

``group``
	Only fetch users in the group with the given handle.

``username``
	Only fetch the user with the given username.

``firstName``
	Only fetch users with the givin first name.

``lastName``
	Only fetch users with the given last name.

``email``
	Only fetch users with the given email.

``admin``
	Only fetch admin users.

``status``
	Only fetch users with the given status. Possible values are ``'active'``, ``'locked'``, ``'suspended'``, ``'pending'``, ``archived'``, and ``'*'``. The default value is ``'active'``.

``offset``
    Skips the first *X* users. For example, if you set ``offset(1)``, the would-be second user returned becomes the first.


Parameters Exclusive to ``find()``
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The following parameters will only make a difference when calling the ``find()`` output function:

``order``
    The order the users should be returned in. Possible values include ``'username'``, ``'firstName'``, ``'lastName'``, ``'email'``, ``'language'``, ``'status'``, and ``'lastLoginDate'``. If you want the users to be sorted in descending order, add “``desc``” after the property name (ex: ``'lastLoginDate desc'``). The default value is ``'username'``.

``limit``
    Limits the results to *X* users.

``indexBy``
    Indexes the results by a given property. Possible values include ``'username'``, ``'firstName'``, ``'lastName'``, ``'email'``, ``'language'``, ``'status'``, and ``'lastLoginDate'``.


Parameter Value Syntax
~~~~~~~~~~~~~~~~~~~~~~

Each of these parameters can be set to a single value or multiple values, and can optionally be used to *exclude* which users get returned.

To pass in multiple values, you can either pass them as an array, comma-delimited string, or even as separate arguments if you’re using the chaining method::

    craft.users.id(1, 2, 3).find()
    craft.users.id('1,2,3').find()
    craft.users.find({ id: [1, 2, 3] })
    craft.users.find({ id: '1,2,3' })

To exclude users with a given value, you must pass in a string, prefixed with “``not``”::

    craft.users.id('not 1').find()
    craft.users.find({ id: 'not 1' })


User Properties
----------------

Once you’ve got your user, there are a number of properties and functions you can call from it.

``id``
    The user’s ID.

``username``
    The user’s username.

``firstName``
    The user’s first name.

``lastName``
    The user’s last name.

``friendlyName``
    The user’s first name if they’ve entered it, otherwise their username.

``email``
    The user’s email address.

``language``
    The user’s preferred language.

``admin``
    Whether the user is an admin.

``status``
    The user’s status ('active', 'locked', 'suspended', 'pending', 'archived').

``lastLoginDate``
    A :doc:`date variable <dates>` of the last time the user logged in.

``dateCreated``
    A :doc:`date variable <dates>` of the date the user was created.
