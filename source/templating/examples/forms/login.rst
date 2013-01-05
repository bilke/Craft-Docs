Login Form
==========

You can create a login form using the following code:

.. code-block:: html

    <form method="post" action="" accept-charset="UTF-8">
        <input type="hidden" name="action" value="users/login">
        <input type="hidden" name="redirect" value="{{ blx.session.returnUrl }}">

        <h3><label for="loginName">Username or email</label></h3>
        <input id="loginName" type="text" name="loginName"
            value="{{ blx.session.rememberedUsername }}">

        <h3><label for="password">Password</label></h3>
        <input id="password" type="password" name="password">

        <label>
            <input type="checkbox" name="rememberMe" value="1">
            Remember me
        </label>

        <input type="submit" value="Login">
    </form>

    <p><a href="{{ url('login/forgotpassword') }}">Forget your password?</a></p>
