Forgot Password Form
====================

You can create a Forgot Password form using the following code:

.. code-block:: html

    <form method="post" action="" accept-charset="UTF-8">
        <input type="hidden" name="action" value="users/forgotPassword">
        <input type="hidden" name="redirect" value="">

        <h3><label for="loginName">Username or email</label></h3>
        <input id="loginName" type="text" name="loginName"
            value="{{ craft.session.rememberedUsername }}">

        <input type="submit" value="Submit">
    </form>
