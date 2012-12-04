BlockTypesService
=================

BlockTypesService provides the following APIs for dealing with block types:

``blx()->blockTypes->getAllBlockTypes()``
	Returns all installed block types.

``blx()->blockTypes->getBlockType($class)``
	Returns a block type by its class handle, or null if no such block type exists.

``blx()->blockTypes->populateBlockType(BaseBlockModel $block, $entity)``
	Instantiates a new block type based on the passed-in ``$block`` block model, determining which block type to use based on ``$block->type``, and setting the block type’s settings based on ``$block->settings``.
