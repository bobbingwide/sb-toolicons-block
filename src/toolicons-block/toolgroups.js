/**
 * List of the icons that implement toolgroups in the toolbar
 *
 * with the tooltip as the label
 * and a short description to explain the purpose of the tool.
 *
 * Note: Some tools toggle depending on the state.
 * Some tools may not be present for every block due to block settings.
 * e.g. editAsHTML toggles with editVisually.
 * The embed block doesn't support editAsHTML.
 *
 */

import { __ } from '@wordpress/i18n';
import { alignLeft, chevronDown, moreVertical, positionCenter } from '@wordpress/icons';
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
	{
		icon: chevronDown,
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
		tools: [ toolicon.blockSettings, toolicon.copy, toolicon.duplicate, toolicon.insertAfter, toolicon.insertBefore,
			toolicon.moveTo, toolicon.editAsHTML, toolicon.group, toolicon.addToReusable, toolicon.removeBlock ],
		key: 'moreOptions'
	};

const changeAlignment =
	{ icon: positionCenter,
		label: __( 'Change alignment'),
		description: __( 'Use Change alignment to choose the alignment'),
		tools: [toolicon.positionLeft, toolicon.positionCenter, toolicon.positionRight, toolicon.stretchWide, toolicon.stretchFullWidth],
		key: 'changeAlignment'
	};

const replaceGroup =
	{
		text: __( 'Replace'),
		label: __( 'Replace' ),
		description: __( 'Replace the selected file.'),
		tools: [ toolicon.media, toolicon.upload],
		key: 'replaceGroup'
	}

export { alignmentToolbar, moreRichTextControls, headingGroup, moreOptions, changeAlignment, replaceGroup };
