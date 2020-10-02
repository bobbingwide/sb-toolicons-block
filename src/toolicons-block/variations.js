import {blocktoolmap} from "./blocktoolmap";

import { group  } from '@wordpress/icons';


const variations = [
	{
		name: 'blocktype',
		attributes: { selection: 'blocktype' },
		title: 'Block toolbar',
		icon: 'block-default',
		description: 'Helps you to document tool icons for a block',
		scope: ['inserter']
	},

	{
		name: 'toolgroup',
	 	attributes: { selection: 'toolgroup'},
		title: 'Group toolbar',
		icon: group,
		description: 'Helps you to document a group of toolicons',
		scope: ['inserter']
	},

	{
		name: 'toolicon',
		attributes: {selection: 'toolicon'},
		title: 'Tool icon',
		icon: 'icon',
		description: 'Helps you to document a single tool icon',
		scope: ['inserter', 'block']
	}
];

function getSelectionOptions() {
	return variations.map((variation) => MySelectionOption(variation));
}
function MySelectionOption( variation ) {
	return	{ label: variation.title, value: variation.name};
}

function getBlockTypeOptions( ) {
	return blocktoolmap.map( ( blocktool ) => MyBlockTypeOption( blocktool ));
	//var icons = block.tools.map( ( icon ) => MyToolBar( icon ) );
}
function MyBlockTypeOption( blocktool) {
	return {  label: blocktool.blockname, value: blocktool.blockname };
}

export default variations;
export { getSelectionOptions };

