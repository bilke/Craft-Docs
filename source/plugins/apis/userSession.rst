UserSessionService
==================

UserSessionService provides the following APIs for dealing with the user session:

``blx()->userSession->getUser()``
	Returns a UserModel instance for the currently logged-in user, if there is one.

``blx()->userSession->setFlash($category, $message)``
	Sets a flash message for a given category.

``blx()->userSession->setNotice($message)``
	Sets a flash message with the category “notice”.

``blx()->userSession->setError($message)``
	Sets a flash message with the category “error”.

``blx()->userSession->isGuest()``
	Returns whether the current user is not logged in.

``blx()->userSession->isLoggedIn()``
	Returns whether the current user is logged in.

``blx()->userSession->isAdmin()``
	Returns whether the currently logged-in user is a system admin.

``blx()->userSession->checkPermission($permission)``
	Returns whether the currently logged-in user can perform a given action.

``blx()->userSession->requirePermission($permission)``
	Requires that the currently logged-in user can perform a given action, or else a 503 (Unauthorized) exception is thrown.

``blx()->userSession->requireLogin()``
	Requires that the user is logged-in. Otherwise they are redirected to the login page, as defined by your ``'loginPath'`` config setting (set to “login” by default).
