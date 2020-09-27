/**
 * This toolmap is intended to list all the toolbar icons for each block type
 * There being 131 block types in WordPress core, including variations.
 * In oik-blocks we flattened variations to `blockname|variation`
 */


import * as icon from '@wordpress/icons';
import * as toolicon from './tooliconslist';

const blocktoolmap = [

	{ blockname: 'core/paragraph',
	  variation: null,
	  tools: [  toolicon.alignLeft, toolicon.alignCenter, toolicon.alignRight ]
	},
	{
		blockname: 'core/heading',
		tools: [toolicon.heading, toolicon.alignLeft, toolicon.alignCenter, toolicon.alignRight],
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
