User Profile Form
=================

You can create a form to edit a user’s own profile using the following code:

.. code-block:: html

    <form method="post" action="" accept-charset="UTF-8">
        <input type="hidden" name="action" value="users/saveProfile">
        <input type="hidden" name="redirect" value="users/{{ user.username }}">
        <input type="hidden" name="userId" value="{{ user.id }}">

        <label for="location">Location</label>
        <input type="text" id="location" name="fields[location]" value="{{ user.location }}">

        <label for="bio">Bio</label>
        <textarea id="bio" name="fields[bio]">{{ user.bio }}</textarea>

        <input type="submit" value="Save Profile">
    </form>
