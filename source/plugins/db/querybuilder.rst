The Query Builder
=================

Currently Craft only support MySQL, but there’s a good chance that we’ll add support for other database engines in the future, such as SQL Server and PostgreSQL. With that in mind, it’s important that we run all SQL queries through Craft’s query builder.

You can create a new query via ``craft()->db->createCommand()``, which returns a new DbCommand instance. DbCommand is based on Yii’s `CDbCommand <http://www.yiiframework.com/doc/api/1.1/CDbCommand>`_ class (See Yii’s `Query Builder <http://www.yiiframework.com/doc/guide/1.1/en/database.query-builder>`_  docs), with a few enhancements.

DbCommand Enhancements
----------------------

DbCommand enhances CDbCommand in the following ways:

- Automatically add the DB table prefix to table names, without requiring you to wrap the table name in ``{{`` and ``}}``
- Added support for specifying AND conditions as key/value arrays, e.g. ``where(array('id' => $id, 'enabled' => 1))``
- ``$type`` parameters get passed through ``DbHelper::generateColumnDefinition()``, so you can pass in attribute configs
- ``createTable()`` automatically adds the audit columns: id, dateCreated, dateUpdated, and uid.

We’ve also added the following methods to DbCommand:

``addSelect($columns = '*')``
	Adds additional columns to the query, without overwriting the existing ones (unlike ``select()``, which will clear any previously defined columns).

``addWhere($conditions, $params = array())``
	Adds additional conditions to the query, without overwriting the existing ones (unlike ``where()``, which will clear any previously defined conditions).

``insertAll($table, $columns, $vals)``
	Batch-inserts multiple rows at once. ``$columns`` should be an array of column names, and ``$vals`` should be an array of row value arrays.

``addColumnFirst($table, $column, $type)``
	Adds a new column to the beginning of a table.

``addColumnBefore($table, $column, $type, $before)``
	Adds a new column before another one.

``addColumnAfter($table, $column, $type, $after)``
	Adds a new column after another one.


