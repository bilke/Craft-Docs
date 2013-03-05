UserSessionService
==================

UserSessionService provides the following APIs for dealing with the user session:

``craft()->userSession->getUser()``
	Returns a UserModel instance for the currently logged-in user, if there is one.

``craft()->userSession->setFlash($category, $message)``
	Sets a flash message for a given category.

``craft()->userSession->setNotice($message)``
	Sets a flash message with the category “notice”.

``craft()->userSession->setError($message)``
	Sets a flash message with the category “error”.

``craft()->userSession->isGuest()``
	Returns whether the current user is not logged in.

``craft()->userSession->isLoggedIn()``
	Returns whether the current user is logged in.

``craft()->userSession->isAdmin()``
	Returns whether the currently logged-in user is a system admin.

``craft()->userSession->checkPermission($permission)``
	Returns whether the currently logged-in user can perform a given action.

``craft()->userSession->requirePermission($permission)``
	Requires that the currently logged-in user can perform a given action, or else a 503 (Unauthorized) exception is thrown.

``craft()->userSession->requireLogin()``
	Requires that the user is logged-in. Otherwise they are redirected to the login page, as defined by your ``'loginPath'`` config setting (set to “login” by default).
