AccountService
==============

AccountService provides the following APIs for dealing with user accounts:

``blx()->account->getUserById($id)``
	Returns a UserModel instance for a user with the ID passed in, or null if that user cannot be found.

``blx()->account->getUserByUsernameOrEmail($usernameOrEmail)``
	Returns a UserModel instance for a user whose username or email matches the passed-in string, or null if such a user cannot be found.

``blx()->account->getUserByVerificationCode($code)``
	Returns a UserModel instance for a user with an active verification code, or null if such a user cannot be found.

``blx()->account->getCurrentUser()``
	Returns a UserModel instance for the currently logged-in user, if there is one.

``blx()->account->isAdmin()``
	Returns whether the currently logged-in user is a system admin.

``blx()->account->saveUser(UserModel $user)``
	Saves a user based on a passed-in UserModel instance.

``blx()->account->sendVerificationEmail(UserModel $user)``
	Sends a verification email to the user represented by the passed-in UserModel instance.

``blx()->account->sendForgotPasswordEmail(UserModel $user)``
	Sends a “forgot password” email to the user represented by the passed-in UserModel instance.

``blx()->account->changePassword(UserModel $user)``
	Changes the password for the user repreesented by the passed-in Usermodel instance. The new password should be set on ``$user->newPassword``.

``blx()->account->activateUser(UserModel $user)``
	Activates the user account represented by the passed-in UserModel instance.

``blx()->account->unlockUser(UserModel $user)``
	Unlocks the user account represented by the passed-in UserModel instance.

``blx()->account->suspendUser(UserModel $user)``
	Suspends the user account represented by the passed-in UserModel instance.

``blx()->account->unsuspendUser(UserModel $user)``
	Unsuspends the user account represented by the passed-in UserModel instance.

``blx()->account->archiveUser(UserModel $user)``
	Archives the user account represented by the passed-in UserModel instance.
