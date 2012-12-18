AccountsService
===============

AccountsService provides the following APIs for dealing with user accounts:

``blx()->accounts->getUserById($id)``
	Returns a UserModel instance for a user with the ID passed in, or null if that user cannot be found.

``blx()->accounts->getUserByUsernameOrEmail($usernameOrEmail)``
	Returns a UserModel instance for a user whose username or email matches the passed-in string, or null if such a user cannot be found.

``blx()->accounts->getUserByVerificationCode($code)``
	Returns a UserModel instance for a user with an active verification code, or null if such a user cannot be found.

``blx()->accounts->saveUser(UserModel $user)``
	Saves a user based on a passed-in UserModel instance.

``blx()->accounts->sendVerificationEmail(UserModel $user)``
	Sends a verification email to the user represented by the passed-in UserModel instance.

``blx()->accounts->sendForgotPasswordEmail(UserModel $user)``
	Sends a “forgot password” email to the user represented by the passed-in UserModel instance.

``blx()->accounts->changePassword(UserModel $user)``
	Changes the password for the user repreesented by the passed-in Usermodel instance. The new password should be set on ``$user->newPassword``.

``blx()->accounts->activateUser(UserModel $user)``
	Activates the user account represented by the passed-in UserModel instance.

``blx()->accounts->unlockUser(UserModel $user)``
	Unlocks the user account represented by the passed-in UserModel instance.

``blx()->accounts->suspendUser(UserModel $user)``
	Suspends the user account represented by the passed-in UserModel instance.

``blx()->accounts->unsuspendUser(UserModel $user)``
	Unsuspends the user account represented by the passed-in UserModel instance.

``blx()->accounts->archiveUser(UserModel $user)``
	Archives the user account represented by the passed-in UserModel instance.
