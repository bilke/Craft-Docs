Reset Password Form
===================

When a user forgets their password, Craft will send them an email with a URL to reset their password. That URL is defined by your ``'resetPasswordPath'`` config setting, which is “resetpassword” by default.

If you want your site to support password resetting, you need to create a template at the path specified by the '``resetPasswordPath'`` conifg setting. For example, /resetpassword.html or /resetpassword/index.html.

Within that template, place the following code:

.. code-block:: html

    <form method="post" action="" accept-charset="UTF-8">
        <input type="hidden" name="redirect" value="">
        <input type="hidden" name="code" value="{{ code }}">

        <h3><label for="newPassword">New Password</label></h3>
        <input id="newPassword" type="password" name="newPassword">

        <input type="submit" value="Submit">
    </form>

The ``redirect`` hidden input designates where the user should be redirected to after they finish resetting their password (and get automatically logged-in).
