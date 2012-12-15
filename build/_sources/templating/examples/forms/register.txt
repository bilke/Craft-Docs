User Registration Form
======================

You can create a user registration form using the following code:

.. code-block:: html

    <form method="post" action="" accept-charset="UTF-8">
        <input type="hidden" name="action" value="accounts/saveUser">
        <input type="hidden" name="redirect" value="">

        {% macro errorList(errors) %}
            {% if errors %}
                <ul class="errors">
                    {% for error in errors %}
                        <li>{{ error }}</li>
                    {% endfor %}
                </ul>
            {% endif %}
        {% endmacro %}

        <h3><label for="username">Username</label></h3>
        <input id="username" type="text" name="username"
            {%- if account is defined %} value="{{ account.username }}"{% endif %}>

        {% if account is defined %}
            {{ _self.errorList(account.getErrors('username')) }}
        {% endif %}

        <h3><label for="email">Email</label></h3>
        <input id="email" type="text" name="email"
            {%- if account is defined %} value="{{ account.email }}"{% endif %}>

        {% if account is defined %}
            {{ _self.errorList(account.getErrors('email')) }}
        {% endif %}

        <h3><label for="password">Password</label></h3>
        <input id="password" type="password" name="password">

        <input type="submit" value="Register">
    </form>