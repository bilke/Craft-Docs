Rebrand
=======

The Rebrand package allows you to customize certain portions of the app. Its features include:

* Custom login screen logo
* Custom email notifications

Here’s a breakdown of what you’ll get:

* A new “Logo” setting in Settings → General, which replaces the logo shown on the login screen.
* An “HTML Email Template” which you can use to override the template used to render HTML emails, for the users that prefer that format. (The default template is located at craft/app/templates/_special/email.html, which you can use as an example.)
* A new “Messages” tab in Settings → Email, where you can customize the text of system emails.

.. container:: tip

	**Note:** Email messages should be entered as plain text. They will be processed through Markdown before getting loaded into the HTML email template, for users that prefer HTML email.
