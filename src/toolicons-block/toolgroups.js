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
import { buttonOutside } from './search-block-icons';

const alignmentToolbar =
	{
		icon: alignLeft,
		label: __( 'Change text alignment','sb-toolicons-block'),
		description: __( 'Use Change text alignment to choose how to align the text.','sb-toolicons-block'),
		tools: [ toolicon.alignLeft, toolicon.alignCenter, toolicon.alignRight],
		key: 'alignmentToolbar'
	};

const moreRichTextControls =
	{
		icon: chevronDown,
	 	label: __( 'More rich text controls','sb-toolicons-block'),
		description: __('Find more text controls in this dropdown.','sb-toolicons-block'),
		tools: [ toolicon.code, toolicon.image, toolicon.formatStrikethrough, toolicon.subscript, toolicon.superscript, toolicon.textColor],
		key: 'moreRichTextControls'
	};

const moreNavigationControls =
	{
		icon: chevronDown,
		label: __( 'More rich text controls','sb-toolicons-block'),
		description: __('Find more text controls in this dropdown.','sb-toolicons-block'),
		tools: [ toolicon.image, toolicon.formatStrikethrough],
		key: 'moreNavigationControls'
	};


const headingGroup =
	{
		icon: <HeadingLevelIcon level="2" />,
		label: __( 'Change heading level','sb-toolicons-block'),
		description: __( 'Use Change heading level to choose the heading level.','sb-toolicons-block'),
		tools: [ toolicon.heading1, toolicon.heading2, toolicon.heading3, toolicon.heading4, toolicon.heading5, toolicon.heading6 ],
		key: 'headingGroup',
		horizontal: true
	};

const moreOptions =
	{
		icon: moreVertical,
		label: __( 'More options','sb-toolicons-block'),
		description: __( 'Display more options','sb-toolicons-block'),
		tools: [ toolicon.blockSettings, toolicon.copy, toolicon.duplicate, toolicon.insertAfter, toolicon.insertBefore,
			toolicon.moveTo, toolicon.editAsHTML, toolicon.group, toolicon.addToReusable, toolicon.removeBlock ],
		key: 'moreOptions'
	};



const changeAlignment =
	{ icon: positionCenter,
		label: __( 'Change alignment','sb-toolicons-block'),
		description: __( 'Use Change alignment to choose the alignment','sb-toolicons-block'),
		tools: [toolicon.positionLeft, toolicon.positionCenter, toolicon.positionRight, toolicon.stretchWide, toolicon.stretchFullWidth],
		key: 'changeAlignment'
	};

const replaceGroup =
	{
		text: __( 'Replace','sb-toolicons-block'),
		label: __( 'Replace','sb-toolicons-block'),
		description: __( 'Replace the selected file.','sb-toolicons-block'),
		tools: [ toolicon.media, toolicon.upload],
		key: 'replaceGroup'
	};

const verticallyAlign =
	{
		icon: toolicon.verticalAlignTop.icon,
		label: __( 'Change vertical alignment', 'sb-toolicons-block'),
		description: __( 'Change the vertical alignment of the columns', 'sb-toolicons-block'),
		tools: [toolicon.verticalAlignTop, toolicon.verticalAlignCenter, toolicon.verticalAlignBottom ],
		key: 'verticallyAlign'
	};

const cropGroup =
	{
		icon: toolicon.crop,
		label: __( 'Crop image', 'sb-toolicons-block'),
		description: __( 'Crop the image.', 'sb-toolicons-block'),
		tools: [ changeAlignment, toolicon.zoom, toolicon.aspectRatio, toolicon.rotate, toolicon.apply, toolicon.cancel] ,
		key: 'cropGroup',
		horizontal: true
	};

const changeButtonPosition =
	{
		icon: buttonOutside,
		label: __( 'Change button position', 'sb-toolicons-block'),
		description: __( 'Change the position of the Search button', 'sb-toolicons-block'),
		tools: [ toolicon.nobutton, toolicon.searchbuttonOutside, toolicon.searchbuttonInside, toolicon.searchbuttonOnly],
		key: 'changeButtonPosition',

	};


export { alignmentToolbar, moreNavigationControls, moreRichTextControls, headingGroup,
	moreOptions, changeAlignment, replaceGroup, verticallyAlign, cropGroup, changeButtonPosition};
