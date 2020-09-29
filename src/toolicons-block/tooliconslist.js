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

const addToReusable =
	{
		icon: icon.reusableBlock,
		label: __( 'Add to Reusable blocks'),
		description: __( 'Create a Reusable block.'),
		key: 'addToReusable'
};

const alignCenter =
		{ icon: icon.alignCenter,
			label: __( 'Align text center'),
			description: __( 'Align content centrally.'),
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
	{
		text: '',
	label: __( 'Show More Settings'),
	description: __('Show the block settings in the sidebar.'),
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

const copy =
	{  text: '',
		label: __('Copy'),
		description: __( 'Copy the block to the clipboard.'),
		key: 'copy'
	};

const dragHandle =
	{
		icon: icon.dragHandle,
		label: __( 'Drag block'),
		description: __( 'Use to drag the selected block to another location.'),
		key: 'dragHandle'
	};

const duplicate =
	{
		text: '',
		label: __('Duplicate'),
		description: __( 'Use Duplicate to create a copy of the block.'),
		key: 'duplicate'
	};

const editAsHTML =
	{
		 text: '',
		label: __('Edit as HTML'),
		description: __( 'Edit the HTML of the block.'),
		key: 'editAsHTML'
	};

const editURL =
	{
		icon: icon.edit,
		label: __('Edit URL'),
		description: __( 'Use Edit URL to change the embed URL in the embed block. Overwrite the existing URL and click on the “Embed” Button on the right.'),
		key: 'editURL'
	};


const formatBold =
	{
		icon: icon.formatBold,
		label: __('Bold'),
		description: __('Use Bold to mark selected text as bold.'),
		key: 'formatBold'
	};

const formatItalic =
	{
		icon: icon.formatItalic,
		label: __('Italic'),
		description: __('Use Italic to mark selected text as italic.'),
		key: 'formatItalic'
	};

const formatStrikethrough =
	{
		icon: icon.formatStrikethrough,
		label: __( 'Strikethrough'),
		description: __( 'Use Strikethrough to strikethrough the selected text.'),
		key: 'formatStrikethrough'

	};

const group =
	{
		text: '',
		label: __('Group'),
		description: __( 'Transform the selected block(s) into a group.'),
		key: 'group'
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

const insertAfter =
	{
		text: '',
		label: __( 'Insert After'),
		description: __( 'Insert a new block after the selected block(s).'),
		key: 'insertAfter'
	};

const insertBefore =
	{
		text: '',
		label: __( 'Insert Before'),
		description: __( 'Insert a new block before the selected block(s).'),
		key: 'insertBefore'
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

const moveTo =
	{
		text: '',
		label: __( 'Move To'),
		description: __(' Use Move To to move a block. Up/Down or Left/Right' ),
		key: 'moveTo',
	};

const moveUp =
	{
		icon: icon.chevronUp,
		label: __( 'Move up'),
		description: __( 'Move the block upwards'),
		key: 'moveUp'
	};

const media =
	{
		icon: icon.media,
		label: __('Open Media Library'),
		description: __( 'Choose from the Media library.'),
		key: 'media'
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

const removeBlock =
	{
		text: '',
		label: __('Remove block'),
		description: __( 'Delete the block.'),
		key: 'removeBlock'
	};

const replace =
	{
		text: __( "Replace"),
		label: __( 'Replace'),
		description: __( 'Replace the existing file.'),
		key: 'replace'
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

const upload =
	{
		icon: icon.upload,
		label: __('Upload'),
		description: __( 'Upload a file.'),
		key: 'upload'
	};


export { addToReusable, alignCenter, alignLeft, alignRight,
	blockSettings,
	chevronDown, code, copy,
	dragHandle, duplicate,
	editAsHTML, editURL,
	formatBold, formatItalic, formatStrikethrough,
	group,
	heading1, heading2, heading3, heading4, heading5, heading6,
	image, insertAfter, insertBefore,
	link,
	media, moveDown, moveTo, moveUp,
	positionLeft, positionCenter, positionRight,
	replace, removeBlock,
 	subscript, superscript,	stretchWide, stretchFullWidth,
	textColor,
	upload };
