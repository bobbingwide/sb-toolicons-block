/**
 * (C) Copyright Bobbing Wide 2020
 *
 * List of the icons that are used in the toolbars.
 * with the tooltip as the label
 * and a short description to explain the purpose of the tool.
 *
 */
import { __ } from '@wordpress/i18n';
import * as icon from '@wordpress/icons';
import { Path, SVG } from '@wordpress/components';
import { HeadingLevelIcon } from './heading-level-icon.js';
import {sprintf} from "../../../gutenberg-wordpress-source/packages/i18n/src";


const alignCenter =
		{ icon: icon.alignCenter,
			label: __( 'Align text center'),
			description: __( 'Align content centrally'),
			key: 'alignCenter'
		};
const alignLeft =
		{ icon: icon.alignLeft,
			label: __( 'Align text left'),
			description: __('Use the Align text left drop-down from the toolbar to align text to the left.' ),
			key: 'alignLeft'
		};

const alignRight =
	{ icon: icon.alignRight,
	label: __('Align text right'),
		description: __( 'Use the Align text right drop-down from the toolbar to align text to the right.' ),
		key: 'alignRight'
	};

const blockSettings =
	{ icon: null,
	label: __( 'Show block settings'),
	description: __('Show the block settings in the sidebar'),
	key: 'blockSettings'
};

const chevronDown =
	{
		icon: icon.chevronDown,
		label: __('More rich text controls'),
		description: __('View more rich text controls.'),
		key: 'chevronDown'
	};

const code =
	{
		icon: icon.code,
		label: __( 'Inline code'),
		description: __( 'Use inline code feature to format code snippets within your text.' ),
		key: 'code'
	};

const dragHandle =
	{
		icon: icon.dragHandle,
		label: __( 'Drag block'),
		description: __( 'Use to drag the selected block to another location'),
		key: 'dragHandle'
	};


const formatBold =
	{
		icon: icon.formatBold,
		label: __('Bold'),
		description: __('Use Bold to mark selected text as bold'),
		key: 'formatBold'
	};

const formatItalic =
	{
		icon: icon.formatItalic,
		label: __('Italic'),
		description: __('Use Italic to mark selected text as italic'),
		key: 'formatItalic'
	};

const formatStrikethrough =
	{
		icon: icon.formatStrikethrough,
		label: __( 'Strikethrough'),
		description: __( 'Use Strikethrough to strikethrough the selected text.'),
		key: 'formatStrikethrough'

	};

/*
  There should be 6 heading icons.
 */


const heading1 =
	{
		icon: <HeadingLevelIcon level="1" />,
		label: sprintf(	__( 'Heading %d' ),	1 ),
		description: __('Choose heading level 1.'),
		key: 'heading1'
	};

const heading2 =
	{
		icon: <HeadingLevelIcon level="2" />,
		label: sprintf(	__( 'Heading %d' ),	2 ),
		description: __('Choose heading level 2.'),
		key: 'heading2'
	};

const heading3 =
	{
		icon: <HeadingLevelIcon level="3" />,
		label: sprintf(	__( 'Heading %d' ),	3 ),
		description: __('Choose heading level 3.'),
		key: 'heading3'
	};

const heading4 =
	{
		icon: <HeadingLevelIcon level="4" />,
		label: sprintf(	__( 'Heading %d' ),	4 ),
		description: __('Choose heading level 4.'),
		key: 'heading4'
	};

const heading5 =
	{
		icon: <HeadingLevelIcon level="5" />,
		label: sprintf(	__( 'Heading %d' ),	5 ),
		description: __('Choose heading level 5.'),
		key: 'heading5'
	};

const heading6 =
	{
		icon: <HeadingLevelIcon level="6" />,
		label: sprintf(	__( 'Heading %d' ),	6 ),
		description: __('Choose heading level 6.'),
		key: 'heading6'
	};

/**
 * I had to copy this from Gutenberg - packages/components/src/toolbar/stories/index.js
 */
function InlineImageIcon() {
	return (
		<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
			<Path d="M4 18.5h16V17H4v1.5zM16 13v1.5h4V13h-4zM5.1 15h7.8c.6 0 1.1-.5 1.1-1.1V6.1c0-.6-.5-1.1-1.1-1.1H5.1C4.5 5 4 5.5 4 6.1v7.8c0 .6.5 1.1 1.1 1.1zm.4-8.5h7V10l-1-1c-.3-.3-.8-.3-1 0l-1.6 1.5-1.2-.7c-.3-.2-.6-.2-.9 0l-1.3 1V6.5zm0 6.1l1.8-1.3 1.3.8c.3.2.7.2.9-.1l1.5-1.4 1.5 1.4v1.5h-7v-.9z" />
		</SVG>
	);
}

const image =
	{
	icon: InlineImageIcon(),
	label: __('Inline image'),
	description: __( 'Insert an inline image.'),
	key: 'image'
	};

const link =
	{
		icon: icon.link,
		label: __('Link'),
		description: __('Use Link to create a hyperlink to your highlighted text.'),
		key: 'link'
	};

const moveDown =
	{
		icon: icon.chevronDown,
		label: __( 'Move down'),
		description: __( 'Move the block downwards'),
		key: 'moveDown'
	};

const moveUp =
	{
		icon: icon.chevronUp,
		label: __( 'Move up'),
		description: __( 'Move the block upwards'),
		key: 'moveUp'
	};

const positionLeft =
	{
		icon: icon.positionLeft,
		label: __( 'Align left'),
		description: __( 'Align to the left'),
		key: 'positionLeft'
	};
const positionCenter =
	{
		icon: icon.positionCenter,
		label: __( 'Align center'),
		description: __( 'Align in the center'),
		key: 'positionCenter'
	};
const positionRight =
	{
		icon: icon.positionRight,
		label: __( 'Align right'),
		description: __( 'Align to the right'),
		key: 'positionRight'
	};

const stretchWide =
	{ icon: icon.stretchWide,
		label: __( 'Wide width'),
		description: __( 'Increase the width of the block beyond the content size. Requires theme support.'),
		key: 'stretchWide'
	};

const stretchFullWidth =
	{ icon: icon.stretchFullWidth,
		label: __('Full width'),
		description: __( 'Extend the block to cover the full width of the screen. Requires theme support.'),
		key: 'stretchFullWidth'
	};

const subscript =
	{
		icon: icon.subscript,
		label: __('Subscript'),
		description: __( 'Use Subscript to add subscript to your highlighted text.'),
		key: 'subscript'
	};

const superscript =
	{
		icon: icon.superscript,
		label: __('Superscript'),
		description: __( 'Use Superscript to add superscript to your highlighted text.'),
		key: 'superscript'
	};

const textColor =
	{ icon: icon.textColor,
	 label: __('Text color'),
	description: __( 'Use Text color to change the color of the selected text'),
	key: 'textColor'
	};





export { alignCenter, alignLeft, alignRight, blockSettings, chevronDown, code,
	dragHandle, formatBold, formatItalic, formatStrikethrough,
	heading1, heading2, heading3, heading4, heading5, heading6, image, link,
	moveDown, moveUp,
	positionLeft, positionCenter, positionRight,
 subscript, superscript,
	stretchWide, stretchFullWidth, textColor };
