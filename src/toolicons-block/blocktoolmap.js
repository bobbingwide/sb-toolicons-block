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

	{ blockname: 'core/paragraph',
	  variation: null,
	  tools: [  toolicon.alignLeft, toolicon.alignCenter, toolicon.alignRight, toolicon.formatBold, toolicon.formatItalic, toolicon.link, toolicon.chevronDown ]
	},

	{
		blockname: 'core/heading',
		tools: [toolgroup.alignGroup, toolicon.formatBold, toolicon.formatItalic, toolicon.link],
		/* horizontal: [ h1, h2, h3, h4, h5, h6 ] */
	},

	{
		blockname: 'core/embed',
		tools: [],
		/* toolicon.positionLeft, toolicon.positionCenter, toolicon.positionRight], */

		vertical: [ icon.positionLeft, icon.positionCenter, icon.positionRight,]
		/* Not sure how wide-width and full-width icons work */
	},
	];

export { blocktoolmap } ;
