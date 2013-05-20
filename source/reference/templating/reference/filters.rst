Template Filters
================

On top of the template filters that `Twig comes with <http://twig.sensiolabs.org/doc/filters/index.html>`_, Craft provides a few of its own.

.. _t:

``translate`` or ``t``
    If the user’s preferred language doesn’t match your site’s language, Craft will look for a translation file for the user’s preferred language, and see if it contains a translation for the preceding string. (See :doc:`/templating/examples/translations`)

    If your text contains dynamic variables, add tokens to the string where they should go, and pass an object to the ``t`` filter that contains their values:

    .. code-block:: html

        <p>{{ "Welcome, {name}" | t({ name: user.friendlyName }) }}<p>


``number``
    Formats a number according to the user’s preferred language.


``currency``
    Formats a currency according to the user’s preferred language.


``percentage``
    Formats a percentage according to the user’s preferred language.


``datetime``
    Formats a date according to the user’s preferred language.

``intersect``
    Returns an array containing only the values that are also in a passed-in array.

    .. code-block:: html

        {% set ownedIngredients = [
            'vodka',
            'gin',
            'triple sec',
            'tonic',
            'grapefruit juice'
        ] %}

        {% set longIslandIcedTeaIngredients = [
            'vodka',
            'tequila',
            'rum',
            'gin',
            'triple sec',
            'sweet and sour mix',
            'Coke'
        ] %}

        {% set ownedLongIslandIcedTeaIngredients =
            ownedIngredients|intersect(longIslandIcedTeaIngredients)
        %}


``without``
    Returns an array without the specified element(s).

    .. code-block:: html

        {% set entries = craft.entries.section('articles').limit(3).find %}
        {% set firstEntry = entries[0] %}
        {% set remainingEntries = entries|without(firstEntry) %}


``filter``
    Removes any empty elements from an array and returns the modified array.


``ucfirst``
    Capitalizes the first character of a string.


``lcfirst``
    Lowercases the first character of a string.
