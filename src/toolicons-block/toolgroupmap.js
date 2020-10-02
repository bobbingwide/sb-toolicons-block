/**
 * Toolgroup variation for the toolicons block
 *
 * This displays the toolbar/dropdown menu for a specific toolgroup.
 *
 * headingGroup and
 *
 */

import {
	alignmentToolbar,
	changeAlignment,
	headingGroup,
	moreOptions,
	moreRichTextControls,
	replaceGroup, verticallyAlign, cropGroup
} from "./toolgroups";

const toolgroupmap = [ alignmentToolbar, moreRichTextControls, headingGroup, moreOptions, changeAlignment, replaceGroup, verticallyAlign, cropGroup];


function getToolGroupOptions( ) {
	return toolgroupmap.map( ( toolgroup ) => MyToolGroupOption( toolgroup ));
	//var icons = block.tools.map( ( icon ) => MyToolBar( icon ) );
}
function MyToolGroupOption( toolgroup) {
	return {  label: toolgroup.label, value: toolgroup.key };
}

export { getToolGroupOptions, toolgroupmap };
