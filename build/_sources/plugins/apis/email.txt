EmailService
============

EmailService provides the following APIs for sending email:

``blx()->email->sendEmail(UserModel $user, $subject, $body, $htmlBody, $variables)``
	Sends an email to the user represented by ``$user``. ``$body`` and ``$htmlBody`` can be full-blown Twig templates, and any variables passed in via ``$variables`` will be made available to them.

``blx()->email->sendEmailByKey(UserModel, $key, $variables)``
	Sends an email whose message is aleady defined in the system language files, with the keys [EmailKey]_subject, [EmailKey]_body, and [EmailKey]_html_body.
