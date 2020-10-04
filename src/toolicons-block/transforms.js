/**
 * @copyright Bobbing Wide 2020
 * Displays the transforms list for each block type
 *
 */
import { getBlockType, getBlockTransforms, getPossibleBlockTransformations } from '@wordpress/blocks';
import { Fragment } from '@wordpress/element';
import { BlockIcon  } from '@wordpress/editor';
import { getBlockLink} from './blocklink';


function Transforms( blockName, showTransforms, showLinks=true ) {
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

	var transformList = possible.map( ( transform ) => TransformItem( transform, showLinks ) );
	return(
		<Fragment>
			<h3>{block.title} transforms to:</h3>
			<ul className={"transform"}>
			{transformList}
			</ul>
		</Fragment>
	);

}



function getTransformLink( transform ) {
	var url = getBlockLink( transform );
	return( <a key={transform.name} href={url}>{transform.title}</a> );
}

function TransformItem( transform, showLinks) {

	var linkortext = ( showLinks) ? getTransformLink( transform ) : transform.title;
	return (

		<li key={transform.name}>
			<BlockIcon icon={transform.icon}/>
			{linkortext}
		</li>);
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



