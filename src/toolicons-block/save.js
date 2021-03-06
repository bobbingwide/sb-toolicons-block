import {toolIconStyled} from "./toolicons";

import { blocktoolmap } from "./blocktoolmap";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save( { attributes } ) {
	//console.log( "toolicons save being called. But why?");
	//console.log( blocktoolmap);
	//console.log( attributes );
	var toolicon = toolIconStyled( attributes.selection,
		attributes.blocktype,
		attributes.toolgroup,
		attributes.toolicon,
		attributes.showToolbar,
		attributes.showDropDownMenus,
		attributes.showMoreOptions,
		attributes.showTransforms,
		attributes.showLinks,
		attributes.showAllIcons,
		attributes.showIconOnly);
	return( <div> { toolicon } </div> );
}
