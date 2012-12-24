UsersService
============

UsersService provides the following APIs for dealing with user accounts:

``blx()->users->getUserById($id)``
	Returns a UserModel instance for a user with the ID passed in, or null if that user cannot be found.

``blx()->users->getUserByUsernameOrEmail($usernameOrEmail)``
	Returns a UserModel instance for a user whose username or email matches the passed-in string, or null if such a user cannot be found.

``blx()->users->getUserByVerificationCode($code)``
	Returns a UserModel instance for a user with an active verification code, or null if such a user cannot be found.

``blx()->users->findUsers(UserCriteria $criteria)``
	Finds users that match the passed-in criteria. Returns an array of UserModel instances representing those users.

``blx()->users->findTotalUsers(UserCriteria $criteria)``
	Finds the total number of users that match the passed-in criteria.

``blx()->users->saveUser(UserModel $user)``
	Saves a user based on a passed-in UserModel instance.

``blx()->users->sendVerificationEmail(UserModel $user)``
	Sends a verification email to the user represented by the passed-in UserModel instance.

``blx()->users->sendForgotPasswordEmail(UserModel $user)``
	Sends a “forgot password” email to the user represented by the passed-in UserModel instance.

``blx()->users->changePassword(UserModel $user)``
	Changes the password for the user repreesented by the passed-in Usermodel instance. The new password should be set on ``$user->newPassword``.

``blx()->users->activateUser(UserModel $user)``
	Activates the user account represented by the passed-in UserModel instance.

``blx()->users->unlockUser(UserModel $user)``
	Unlocks the user account represented by the passed-in UserModel instance.

``blx()->users->suspendUser(UserModel $user)``
	Suspends the user account represented by the passed-in UserModel instance.

``blx()->users->unsuspendUser(UserModel $user)``
	Unsuspends the user account represented by the passed-in UserModel instance.

``blx()->users->archiveUser(UserModel $user)``
	Archives the user account represented by the passed-in UserModel instance.
