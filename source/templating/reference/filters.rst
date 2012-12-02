Template Filters
================

On top of the template filters that `Twig comes with <http://twig.sensiolabs.org/doc/filters/index.html>`_, Blocks provides a few of its own.

``translate`` or ``t``
	If the user’s preferred language doesn’t match your site’s language, Blocks will look for a translation file for the user’s preferred language, and see if it contains a translation for the preceding string.

``number``
	Formats a number according to the user’s preferred language.

``currency``
	Formats a currency according to the user’s preferred language.

``percentage``
	Formats a percentage according to the user’s preferred language.

``datetime``
	Formats a date according to the user’s preferred language.

``without(element)`` or ``without([element1, element2])``
	Returns an array without the specified element(s).

``filter``
	Removes any empty elements from an array and returns the modified array.

``ucfirst``
	Capitalizes the first character of a string.

``lcfirst``
	Lowercases the first character of a string.
