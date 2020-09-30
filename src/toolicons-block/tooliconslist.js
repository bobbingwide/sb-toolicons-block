/**
 * (C) Copyright Bobbing Wide 2020
 *
 * List of the icons that are used in the toolbars.
 * with the tooltip as the label
 * and a short description to explain the purpose of the tool.
 * Where the toolbar item is plain text ( not an icon) then we use text:
 *
 * For styling of the description: see
 * See https://developers.google.com/style/ui-elements
 *
 */
import { __, sprintf } from '@wordpress/i18n';
import * as icon from '@wordpress/icons';
import { Path, SVG } from '@wordpress/components';
import { HeadingLevelIcon } from './heading-level-icon.js';
import * as valign from './vertical-align-icons';

import {__experimentalAlignmentMatrixControl as AlignmentMatrixControl } from '@wordpress/components';

const addToReusable =
	{
		icon: icon.reusableBlock,
		label: __( 'Add to Reusable blocks','sb-toolicons-block'),
		description: __( 'Create a Reusable block.','sb-toolicons-block'),
		key: 'addToReusable'
};

const alignCenter =
		{ icon: icon.alignCenter,
			label: __( 'Align text center','sb-toolicons-block'),
			description: __( 'Align content centrally.','sb-toolicons-block'),
			key: 'alignCenter'
		};

const alignLeft =
		{ icon: icon.alignLeft,
			label: __( 'Align text left','sb-toolicons-block'),
			description: __('Use the Align text left drop-down from the toolbar to align text to the left.','sb-toolicons-block'),
			key: 'alignLeft'
		};

const alignRight =
	{ icon: icon.alignRight,
	label: __('Align text right','sb-toolicons-block'),
		description: __( 'Use the Align text right drop-down from the toolbar to align text to the right.','sb-toolicons-block'),
		key: 'alignRight'
	};

const blockSettings =
	{
		text: '',
	label: __( 'Show More Settings','sb-toolicons-block'),
	description: __('Show the block settings in the sidebar.','sb-toolicons-block'),
	key: 'blockSettings'
};

const changeContentPosition =
	{
		/* icon: <AlignmentMatrixControl.Icon value='center' />,*/
		label: __( 'Change content position'),
		description: __( 'Change the position of the content'),
		key: 'changeContentPosition'
	};

const chevronDown =
	{
		icon: icon.chevronDown,
		label: __('More rich text controls','sb-toolicons-block'),
		description: __('View more rich text controls.','sb-toolicons-block'),
		key: 'chevronDown'
	};

const code =
	{
		icon: icon.code,
		label: __( 'Inline code','sb-toolicons-block'),
		description: __( 'Use inline code feature to format code snippets within your text.','sb-toolicons-block'),
		key: 'code'
	};

const convertToBlocks =
	{
		text: __('Convert to blocks', 'sb-toolicons-block'),
		label: __( 'Convert to blocks', 'sb-toolicons-block'),
		description: __( 'Use Convert to blocks to convert the classic block to blocks'),
		key: 'convertToBlocks'
	};

const copy =
	{  text: '',
		label: __('Copy','sb-toolicons-block'),
		description: __( 'Copy the block to the clipboard.','sb-toolicons-block'),
		key: 'copy'
	};

const dragHandle =
	{
		icon: icon.dragHandle,
		label: __( 'Drag block','sb-toolicons-block'),
		description: __( 'Use to drag the selected block to another location.','sb-toolicons-block'),
		key: 'dragHandle'
	};

const duplicate =
	{
		text: '',
		label: __('Duplicate','sb-toolicons-block'),
		description: __( 'Use Duplicate to create a copy of the block.','sb-toolicons-block'),
		key: 'duplicate'
	};

const editAsHTML =
	{
		 text: '',
		label: __('Edit as HTML','sb-toolicons-block'),
		description: __( 'Edit the HTML of the block.','sb-toolicons-block'),
		key: 'editAsHTML'
	};

const editURL =
	{
		icon: icon.edit,
		label: __('Edit URL','sb-toolicons-block'),
		description: __( 'Use Edit URL to change the embed URL in the embed block. Overwrite the existing URL and click on the “Embed” Button on the right.','sb-toolicons-block'),
		key: 'editURL'
	};


const formatBold =
	{
		icon: icon.formatBold,
		label: __('Bold','sb-toolicons-block'),
		description: __('Use Bold to mark selected text as bold.','sb-toolicons-block'),
		key: 'formatBold'
	};

const formatItalic =
	{
		icon: icon.formatItalic,
		label: __('Italic','sb-toolicons-block'),
		description: __('Use Italic to mark selected text as italic.','sb-toolicons-block'),
		key: 'formatItalic'
	};

const formatStrikethrough =
	{
		icon: icon.formatStrikethrough,
		label: __( 'Strikethrough','sb-toolicons-block'),
		description: __( 'Use Strikethrough to strikethrough the selected text.','sb-toolicons-block'),
		key: 'formatStrikethrough'

	};

const group =
	{
		text: '',
		label: __('Group','sb-toolicons-block'),
		description: __( 'Transform the selected block(s) into a group.','sb-toolicons-block'),
		key: 'group'
	};



/*
  There should be 6 heading icons.
 */


const heading1 =
	{
		icon: <HeadingLevelIcon level="1" />,
		// translators: %d: heading level e.g: "1", "2", "3"
		label: sprintf(	__( 'Heading %d','sb-toolicons-block'),	1 ),
		description: __('Choose heading level 1.','sb-toolicons-block'),
		key: 'heading1'
	};

const heading2 =
	{
		icon: <HeadingLevelIcon level="2" />,
		label: sprintf(	__( 'Heading %d','sb-toolicons-block'),	2 ),
		description: __('Choose heading level 2.','sb-toolicons-block'),
		key: 'heading2'
	};

const heading3 =
	{
		icon: <HeadingLevelIcon level="3" />,
		label: sprintf(	__( 'Heading %d','sb-toolicons-block'),	3 ),
		description: __('Choose heading level 3.','sb-toolicons-block'),
		key: 'heading3'
	};

const heading4 =
	{
		icon: <HeadingLevelIcon level="4" />,
		label: sprintf(	__( 'Heading %d','sb-toolicons-block'),	4 ),
		description: __('Choose heading level 4.','sb-toolicons-block'),
		key: 'heading4'
	};

const heading5 =
	{
		icon: <HeadingLevelIcon level="5" />,
		label: sprintf(	__( 'Heading %d','sb-toolicons-block'),	5 ),
		description: __('Choose heading level 5.','sb-toolicons-block'),
		key: 'heading5'
	};

const heading6 =
	{
		icon: <HeadingLevelIcon level="6" />,
		label: sprintf(	__( 'Heading %d','sb-toolicons-block'),	6 ),
		description: __('Choose heading level 6.','sb-toolicons-block'),
		key: 'heading6'
	};

const html =
	{
		text: __( 'HTML', 'sb-toolicons-block'),
		label: __( 'HTML' ),
		description: __( 'Display the custom HTML'),
		key: 'html'
	}

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
	label: __('Inline image','sb-toolicons-block'),
	description: __( 'Insert an inline image.','sb-toolicons-block'),
	key: 'image'
	};

const insertAfter =
	{
		text: '',
		label: __( 'Insert After','sb-toolicons-block'),
		description: __( 'Insert a new block after the selected block(s).','sb-toolicons-block'),
		key: 'insertAfter'
	};

const insertBefore =
	{
		text: '',
		label: __( 'Insert Before','sb-toolicons-block'),
		description: __( 'Insert a new block before the selected block(s).','sb-toolicons-block'),
		key: 'insertBefore'
	};

const link =
	{
		icon: icon.link,
		label: __('Link','sb-toolicons-block'),
		description: __('Use Link to create a hyperlink to your highlighted text.','sb-toolicons-block'),
		key: 'link'
	};

const moveDown =
	{
		icon: icon.chevronDown,
		label: __( 'Move down','sb-toolicons-block'),
		description: __( 'Move the block downwards','sb-toolicons-block'),
		key: 'moveDown'
	};

const moveTo =
	{
		text: '',
		label: __( 'Move To','sb-toolicons-block'),
		description: __(' Use Move To to move a block. Up/Down or Left/Right','sb-toolicons-block'),
		key: 'moveTo',
	};

const moveUp =
	{
		icon: icon.chevronUp,
		label: __( 'Move up','sb-toolicons-block'),
		description: __( 'Move the block upwards','sb-toolicons-block'),
		key: 'moveUp'
	};

const media =
	{
		icon: icon.media,
		label: __('Open Media Library','sb-toolicons-block'),
		description: __( 'Choose from the Media library.','sb-toolicons-block'),
		key: 'media'
	};

const positionLeft =
	{
		icon: icon.positionLeft,
		label: __( 'Align left','sb-toolicons-block'),
		description: __( 'Align to the left','sb-toolicons-block'),
		key: 'positionLeft'
	};
const positionCenter =
	{
		icon: icon.positionCenter,
		label: __( 'Align center','sb-toolicons-block'),
		description: __( 'Align in the center','sb-toolicons-block'),
		key: 'positionCenter'
	};
const positionRight =
	{
		icon: icon.positionRight,
		label: __( 'Align right','sb-toolicons-block'),
		description: __( 'Align to the right','sb-toolicons-block'),
		key: 'positionRight'
	};

const preview =
	{
		text: __( 'Preview', 'sb-toolicons-block'),
		label: __( 'Preview','sb-toolicons-block'),
		decscription: __( 'Preview the formatted HTML'),
		key: 'preview'
	};

const removeBlock =
	{
		text: '',
		label: __('Remove block','sb-toolicons-block'),
		description: __( 'Delete the block.','sb-toolicons-block'),
		key: 'removeBlock'
	};

const replace =
	{
		text: __( "Replace"),
		label: __( 'Replace','sb-toolicons-block'),
		description: __( 'Replace the existing file.','sb-toolicons-block'),
		key: 'replace'
	};

const stretchWide =
	{ icon: icon.stretchWide,
		label: __( 'Wide width','sb-toolicons-block'),
		description: __( 'Increase the width of the block beyond the content size. Requires theme support.','sb-toolicons-block'),
		key: 'stretchWide'
	};

const stretchFullWidth =
	{ icon: icon.stretchFullWidth,
		label: __('Full width','sb-toolicons-block'),
		description: __( 'Extend the block to cover the full width of the screen. Requires theme support.','sb-toolicons-block'),
		key: 'stretchFullWidth'
	};

const subscript =
	{
		icon: icon.subscript,
		label: __('Subscript','sb-toolicons-block'),
		description: __( 'Use Subscript to add subscript to your highlighted text.','sb-toolicons-block'),
		key: 'subscript'
	};

const superscript =
	{
		icon: icon.superscript,
		label: __('Superscript','sb-toolicons-block'),
		description: __( 'Use Superscript to add superscript to your highlighted text.','sb-toolicons-block'),
		key: 'superscript'
	};

const textColor =
	{ icon: icon.textColor,
	 label: __('Text color','sb-toolicons-block'),
	description: __( 'Use Text color to change the color of the selected text','sb-toolicons-block'),
	key: 'textColor'
	};

const upload =
	{
		icon: icon.upload,
		label: __('Upload','sb-toolicons-block'),
		description: __( 'Upload a file.','sb-toolicons-block'),
		key: 'upload'
	};

const verticalAlignBottom =
	{
		icon: valign.alignBottom,
		label: 	__('Vertically Align Bottom', 'sb-toolicons-block'),
	description:__('Vertically align the columns to the bottom', 'sb-toolicons-block'),
	key:'verticalAlignBottom'
};

const verticalAlignCenter =
	{
		icon: valign.alignCenter,
		label: 	__('Vertically Align Middle', 'sb-toolicons-block'),
		description:__('Vertically align the columns to the middle', 'sb-toolicons-block'),
		key:'verticalAlignCenter'
	};

const verticalAlignTop =
	{
		icon: valign.alignTop,
		label: 	__('Vertically Align Top', 'sb-toolicons-block'),
		description:__('Vertically align the columns', 'sb-toolicons-block'),
		key:'verticalAlignTop'
	};


export { addToReusable, alignCenter, alignLeft, alignRight,
	blockSettings,
	changeContentPosition, chevronDown, code, convertToBlocks, copy,
	dragHandle, duplicate,
	editAsHTML, editURL,
	formatBold, formatItalic, formatStrikethrough,
	group,
	heading1, heading2, heading3, heading4, heading5, heading6, html,
	image, insertAfter, insertBefore,
	link,
	media, moveDown, moveTo, moveUp,
	positionLeft, positionCenter, positionRight, preview,
	replace, removeBlock,
 	subscript, superscript,	stretchWide, stretchFullWidth,
	textColor,
	upload,
	verticalAlignTop, verticalAlignCenter, verticalAlignBottom
};
