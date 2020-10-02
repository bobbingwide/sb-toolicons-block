/**
 *
 * Toolicons selection list for the toolicons block.
 * How do other people make a custom selection list using icons and text?
 *
 */

import { tooliconsmap }  from "./tooliconslist";

function getToolIconOptions( ) {
	return tooliconsmap.map( ( toolicon ) => MyToolIconOption( toolicon ));
	//var icons = block.tools.map( ( icon ) => MyToolBar( icon ) );
}
function MyToolIconOption( toolicon ) {
	return {  label: toolicon.label, value: toolicon.key };
}

export { getToolIconOptions};

