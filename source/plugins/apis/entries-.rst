EntriesService
==============

EntriesService provides the following APIs for dealing with entries:

``craft()->entries->findEntries(EntryCriteria $criteria)``
	Finds entries that match the passed-in criteria. Returns an array of EntryModel instances representing those entries.

``craft()->entries->findEntry(EntryCriteria $criteria)``
	Finds the first entry that matches the passed-in criteria. Returns an EntryModel instance representing that entry, or null if no entry can be found.

``craft()->entries->findTotalEntries(EntryCriteria $criteria)``
	Finds the total number of entries that match the passed-in criteria.

``craft()->entries->saveEntry(EntryModel $entry)``
	Saves an entry based on a passed-in EntryModel instance.

``craft()->entries->getTagsByEntryId($id)``
	Returns an array of EntryTagModel instances representing the tags associated with an entry, based on the passed-in entry ID.
