/**
 *
 * Toolicons selection list for the toolicons block.
 * How do other people make a custom selection list using icons and text?
 *
 */

import { tooliconsmap }  from "./tooliconslist";

/**
 * This array should be sorted by value
 *
 * @returns {{label: *, value: *}[]}
 */
function getToolIconOptions( ) {
	var toolicons = tooliconsmap.map( ( toolicon ) => MyToolIconOption( toolicon ));
	toolicons = toolicons.sort( ( a, b ) => a.value.localeCompare( b.value ) );
	//block_types = block_types.sort( (a, b) => a.title.localeCompare(b.title));
	return toolicons;
}
function MyToolIconOption( toolicon ) {
	return {  label: toolicon.label, value: toolicon.key };
}

export { getToolIconOptions};

