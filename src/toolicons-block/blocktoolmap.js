/**
 * This toolmap is intended to list all the toolbar icons for each block type.
 * There are currently 131 block types in WordPress core, including variations.
 * In oik-blocks we flattened variations to `blockname|variation`
 *
 * For each block we'll list the icons in the tools array.
 * If an icon is not in the tooliconslist it'll have to be added first.
 * As of Gutenberg 9 there were 182 icons in @wordpress/icons.
 */


import * as icon from '@wordpress/icons';
import * as toolicon from './tooliconslist';
import * as toolgroup from './toolgroups';

/**
 * Some blocks support left/right movement rather than up/down.
 * These have `leftright: true` attributes. e.g. core/button
 *
 * All blocks have toolgroup.moreoptions, so this can be added later.
 */
const blocktoolmap = [
	{
		blockname: 'core/archives',
		tools: [ toolgroup.changeAlignment ],
	},

	{
		blockname: 'core/audio',
		tools: [ toolgroup.changeAlignment, toolgroup.replaceGroup ]
	},

	{
		blockname: 'core/button',
		tools: [toolicon.link, toolicon.formatBold, toolicon.formatItalic, toolgroup.moreRichTextControls],
		leftright: true
	},

	{
		blockname: 'core/buttons',
		tools: [toolgroup.changeAlignment]
	},

	{ blockname: 'core/calendar',
		tools: [ toolgroup.changeAlignment]
	},

	{ blockname: 'core/block',
		tools: [ toolicon.converttoRegularBlocks]
	},

	{ blockname: 'core/categories', tools: [toolgroup.changeAlignment]},
	{ blockname: 'core/code', tools: []},
	{ blockname: 'core/column',
		tools: [ toolgroup.verticallyAlign],
		leftright: true
	},
	{ blockname: 'core/columns', tools: [toolgroup.changeAlignment, toolgroup.verticallyAlign]},
	{ blockname: 'core/cover', tools: [toolgroup.changeAlignment, toolicon.changeContentPosition, toolgroup.replaceGroup]},


	{
		blockname: 'core/embed',
		tools: [ toolgroup.changeAlignment, toolicon.editURL ],
		/* Not sure how wide-width and full-width icons work */
	},
	{ blockname: 'core/file', tools: [toolgroup.changeAlignment, toolgroup.replaceGroup]},
	{ blockname: 'core/freeform', tools: [toolicon.convertToBlocks]},
	{ blockname: 'core/gallery', tools: [toolgroup.changeAlignment]},
	{ blockname: 'core/group', tools: [toolgroup.changeAlignment]},


	{
	blockname: 'core/heading',
	tools: [toolgroup.headingGroup, toolgroup.alignmentToolbar, toolicon.formatBold, toolicon.formatItalic, toolicon.link, toolgroup.moreRichTextControls],
	},
	{ blockname: 'core/html', tools: [toolicon.html, toolicon.preview]},
	{ blockname: 'core/image', tools: [toolgroup.changeAlignment, toolicon.link, toolicon.crop, toolgroup.replaceGroup] },
	{ blockname: 'core/latest-comments', tools: [ toolgroup.changeAlignment ]},
	{ blockname: 'core/latest-posts', tools: [ toolgroup.changeAlignment, toolicon.list, toolicon.grid]},
	/*
	{ blockname: 'core/legacy-widget', NOT WORKING IN GUTENBERG 9.0.0
	 */
	{ blockname: 'core/list',
		tools: [toolicon.unordered, toolicon.ordered, toolicon.outdent, toolicon.indent,
		toolicon.formatBold, toolicon.formatItalic, toolicon.link, toolgroup.moreRichTextControls]
	},
	{ blockname: 'core/media-text',
		tools: [ toolgroup.changeAlignment,toolicon.medialeft, toolicon.mediaright,
			toolgroup.verticallyAlign, toolicon.link, toolgroup.replaceGroup ]
	},
	{blockname: 'core/more', tools: []},

	{ blockname: 'core/navigation', tools: [ toolgroup.changeAlignment, toolicon.openblocknavigator, toolicon.opencolorsselector ] },

	{ blockname: 'core/navigation-link', tools: [toolicon.link, toolicon.addsubmenu, toolicon.formatBold, toolicon.formatItalic, toolgroup.moreNavigationControls ],
		leftright: true },

	{blockname: 'core/nextpage', tools: []},

	{ blockname: 'core/paragraph',
		variation: null,
		tools: [  toolgroup.alignmentToolbar, toolicon.formatBold, toolicon.formatItalic, toolicon.link, toolgroup.moreRichTextControls ]
	},

	{ blockname: 'core/preformatted',
	  tools: [ toolicon.formatBold, toolicon.formatItalic, toolicon.link, toolgroup.moreRichTextControls ]
	},

	{blockname: 'core/pullquote',
	tools: [ toolgroup.changeAlignment, toolicon.formatBold, toolicon.formatItalic, toolicon.link, toolgroup.moreRichTextControls ]
	},

	{blockname: 'core/quote',
		variation: null,
		tools: [ toolgroup.alignmentToolbar, toolicon.formatBold, toolicon.formatItalic, toolicon.link, toolgroup.moreRichTextControls]
	},

	{ blockname: 'core/rss',
	tools: [ toolgroup.changeAlignment, toolicon.editRSSUrl, toolicon.list, toolicon.grid ]
	},

	{ blockname: 'core/search',
		tools: [toolgroup.changeAlignment, toolicon.toggleSearchLabel,
			toolgroup.changeButtonPosition,
			toolicon.searchbuttonWithIcon
			 ]
	},

	{blockname: 'core/separator', tools: []},

	];


export { blocktoolmap } ;
