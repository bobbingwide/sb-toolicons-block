/**
 * @copyright Bobbing Wide 2020
 * Displays the transforms list for each block type
 *
 */
import { getBlockType, getBlockTransforms, getPossibleBlockTransformations } from '@wordpress/blocks';
import { Fragment } from '@wordpress/element';
import { BlockIcon  } from '@wordpress/editor';


function Transforms( blockName, showTransforms ) {
	if ( !showTransforms ) {
		return('');
	}
	var block = getBlockType( blockName);
	if ( !block ) {
		return('');
	}
	/**
	 * I'm not sure what getBlockTransforms is intended to do but
	 * it doesn't return what I expected.
	 * var transformsFrom = getBlockTransforms( "from", blockName);
	 */
	var blocks = [ block ];
	var possible = getPossibleBlockTransformations( blocks );
	/*
	const possibleBlockTransformations =
		filter(
			getPossibleBlockTransformations( blocks ),
			( block ) => block && !! itemsByName[ block.name ]
		);

	 */

	var transformList = possible.map( ( transform ) => <li key={transform.name}>
		<BlockIcon icon={transform.icon} />
		{transform.title}
		</li> );
	return(
		<Fragment>
			<h3>{block.title} transforms to:</h3>
			<ul className={"transform"}>
			{transformList}
			</ul>
		</Fragment>
	);

}
/*
import { Toolbar, ToolbarItem, Button, Icon } from '@wordpress/components';
import { BlockControls, AlignmentToolbar} from '@wordpress/block-editor';

import { BlockIcon  } from '@wordpress/editor';

import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';

import { blocktoolmap } from './blocktoolmap';

import { dragHandle, moveUp, moveDown } from './tooliconslist';
import * as toolgroup from "./toolgroups";

 */

export { Transforms };



