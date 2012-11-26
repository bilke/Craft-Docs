UsersService
==============

UsersService provides the following APIs for dealing with user management:

``blx()->users->findUsers(UserCriteria $criteria)``
	Finds users that match the passed-in criteria. Returns an array of UserModel instances representing those users.

``blx()->users->findTotalUsers(UserCriteria $criteria)``
	Finds the total number of users that match the passed-in criteria.