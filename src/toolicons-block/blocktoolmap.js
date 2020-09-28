/**
 * This toolmap is intended to list all the toolbar icons for each block type.
 * There are currently 131 block types in WordPress core, including variations.
 * In oik-blocks we flattened variations to `blockname|variation`
 *
 * For each block we'll list the icons in the tools array.
 * If an icon is not in he tooliconslist it'll have to be added first.
 * As of Gurenberg 9 there were 182 icons in @wordpress/icons.
 */


import * as icon from '@wordpress/icons';
import * as toolicon from './tooliconslist';
import * as toolgroup from './toolgroups';

const blocktoolmap = [
	{
		blockname: 'core/archives',
		tools: [ toolgroup.changeAlignment, toolgroup.moreOptions ],
	},

	{
		blockname: 'core/audio',
		tools: [ toolgroup.changeAlignment, toolicon.replace, toolgroup.moreOptions ]
	},

	{
		blockname: 'core/embed',
		tools: [ toolgroup.changeAlignment, toolicon.editURL, toolgroup.moreOptions ],
		/* Not sure how wide-width and full-width icons work */
	},

	{
	blockname: 'core/heading',
	tools: [toolgroup.headingGroup, toolgroup.alignmentToolbar, toolicon.formatBold, toolicon.formatItalic, toolicon.link, toolgroup.moreRichTextControls],
	},

	{ blockname: 'core/paragraph',
	  variation: null,
	  tools: [  toolgroup.alignmentToolbar, toolicon.formatBold, toolicon.formatItalic, toolicon.link, toolgroup.moreRichTextControls, toolgroup.moreOptions ]
	},

	{blockname: 'core/quote',
		variation: null,
		tools: [ toolgroup.alignmentToolbar]
	},

	];

export { blocktoolmap } ;
