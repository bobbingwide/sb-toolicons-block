/**
 * List of the icons that implement toolgroups in the toolbar
 *
 * with the tooltip as the label
 * and a short description to explain the purpose of the tool.
 *
 */

import { __ } from '@wordpress/i18n';
import { alignLeft, chevronDown, moreVertical } from '@wordpress/icons';
import * as toolicon from './tooliconslist';
import { HeadingLevelIcon } from './heading-level-icon';

const alignmentToolbar =
	{
		icon: alignLeft,
		label: __( 'Change text alignment' ),
		description: __( 'Use Change text alignment to choose how to align the text.'),
		tools: [ toolicon.alignLeft, toolicon.alignCenter, toolicon.alignRight],
		key: 'alignmentToolbar'
	};

const moreRichTextControls =
	{ icon: chevronDown,
	 label: __( 'More rich text controls' ),
	description: __('Find more text controls in this dropdown.'),
	tools: [ toolicon.code, toolicon.image, toolicon.formatStrikethrough, toolicon.subscript, toolicon.superscript, toolicon.textColor],
	key: 'moreRichTextControls'
	};

const headingGroup =
	{
		icon: <HeadingLevelIcon level="2" />,
		label: __( 'Change heading level'),
		description: __( 'Use Change heading level to choose the heading level.'),
		tools: [ toolicon.heading1, toolicon.heading2, toolicon.heading3, toolicon.heading4, toolicon.heading5, toolicon.heading6 ],
		key: 'headingGroup'
	};

const moreOptions =
	{
		icon: moreVertical,
		label: __( 'More options'),
		description: __( 'Display more options'),
		tools: [ toolicon.blockSettings ],
		key: 'moreOptions'
	};

export { alignmentToolbar, moreRichTextControls, headingGroup, moreOptions };
