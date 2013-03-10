EmailService
============

EmailService provides the following APIs for sending email:

``craft()->email->sendEmail(EmailModel $emailModel, $variables)``
	Sends an email to the email address specified in ``EmailModel->toEmail``. If the email matches a user in your database, then the ``user`` variable will be available to your email template with all of their information. ``EmailModel->body`` and ``EmailModel->htmlBody`` can be full-blown Twig templates, and any variables passed in via ``$variables`` will be made available to them.

``craft()->email->sendEmailByKey(UserModel, $key, $variables)``
	Sends an email whose message is aleady defined in the system language files, with the keys [EmailKey]_subject, [EmailKey]_body, and [EmailKey]_html_body.
