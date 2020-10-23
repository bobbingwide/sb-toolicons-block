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

import * as search from './search-block-icons';

/**
 * Copied from Gutenberg 9.0.0 on 2020/10/02
 * packages/block-library/src/navigation-link/icons.js
 *
 * Added viewBox= attribute to ToolbarSubmenuIcon
 */

export const ToolbarSubmenuIcon = () => (
	<SVG xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
		<Path d="M2 12c0 3.6 2.4 5.5 6 5.5h.5V19l3-2.5-3-2.5v2H8c-2.5 0-4.5-1.5-4.5-4s2-4.5 4.5-4.5h3.5V6H8c-3.6 0-6 2.4-6 6zm19.5-1h-8v1.5h8V11zm0 5h-8v1.5h8V16zm0-10h-8v1.5h8V6z" />
	</SVG>
);

export const ItemSubmenuIcon = () => (
	<SVG
		xmlns="http://www.w3.org/2000/svg"
		width="12"
		height="12"
		viewBox="0 0 24 24"
		transform="rotate(90)"
	>
		<Path d="M8 5v14l11-7z" />
		<Path d="M0 0h24v24H0z" fill="none" />
	</SVG>
);

export const addsubmenu =
	{
		icon: ToolbarSubmenuIcon,
		label: __( 'Add submenu', 'sb-toolicons-block'),
		description: __( 'Add a submenu to the navigation', 'sb-toolicons-block'),
		key: 'addsubmenu'
	};
const addToReusable =
	{
		icon: icon.reusableBlock,
		label: __( 'Add to Reusable blocks','sb-toolicons-block'),
		description: __( 'Create a Reusable block.','sb-toolicons-block'),
		key: 'addToReusable'
};

export const alignCenter =
		{ icon: icon.alignCenter,
			label: __( 'Align text center','sb-toolicons-block'),
			description: __( 'Align content centrally.','sb-toolicons-block'),
			key: 'alignCenter'
		};

export const alignLeft =
		{ icon: icon.alignLeft,
			label: __( 'Align text left','sb-toolicons-block'),
			description: __('Use the Align text left drop-down from the toolbar to align text to the left.','sb-toolicons-block'),
			key: 'alignLeft'
		};

export const alignRight =
	{ icon: icon.alignRight,
	label: __('Align text right','sb-toolicons-block'),
		description: __( 'Use the Align text right drop-down from the toolbar to align text to the right.','sb-toolicons-block'),
		key: 'alignRight'
	};

const apply =
	{ text: __('Apply', 'sb-toolicons-block'),
		label: __( 'Apply', 'sb-toolicons-block'),
		description: __( 'Apply the changes'),
		key: 'apply'
	};

const aspectRatio =
	{
		icon: icon.aspectRatio,
		label: __( 'Aspect ratio', 'sb-toolicon-block'),
		description: __( 'Adjust the aspect ratio', 'sb-toolicon-block'),
		key: 'aspectRatio'
	};

const blockSettings =
	{
		text: '',
	label: __( 'Show More Settings','sb-toolicons-block'),
	description: __('Show the block settings in the sidebar.','sb-toolicons-block'),
	key: 'blockSettings'
};

export const searchbuttonInside =
	{
		icon: search.buttonInside,
		label: __( 'Button inside','sb-toolicons-block'),
		description: __('Show the Search button on the inside.','sb-toolicons-block'),
		key: 'searchbuttonInside'
	};

export const searchbuttonOnly =
	{
		icon: search.buttonOnly,
		label: __( 'Button only','sb-toolicons-block'),
		description: __('Show the Search button only.','sb-toolicons-block'),
		key: 'searchbuttonOnly'
	};

export const searchbuttonOutside =
	{
		icon: search.buttonOutside,
		label: __( 'Button outside','sb-toolicons-block'),
		description: __('Show the Search button on the outside.','sb-toolicons-block'),
		key: 'searchbuttonOutside'
	};

export const searchbuttonWithIcon =
	{
		icon: search.buttonWithIcon,
		label: __( 'Use button with icon', 'sb-toolicons-block'),
		description: __( 'When selected uses the search icon, otherwise uses a text label that you enter.', 'sb-toolicons-block'),
		key: 'searchbuttonWithIcon'
	};


const cancel =
	{ text: __('Cancel', 'sb-toolicons-block'),
		label: __( 'Cancel', 'sb-toolicons-block'),
		description: __( 'Cancel the changes'),
		key: 'cancel'
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

export const converttoRegularBlocks =
	{
		text: __( 'Convert to Regular Blocks', 'sb-toolicons-block'),
		label: __( 'Convert to Regular Blocks', 'sb-toolicons-block'),
		description: __( 'Convert a reusable block back to regular blocks', 'sb-toolicons-block'),
		key: 'converttoRegularBlocks'
	};

const copy =
	{  text: '',
		label: __('Copy','sb-toolicons-block'),
		description: __( 'Copy the block to the clipboard.','sb-toolicons-block'),
		key: 'copy'
	};

const crop =
	{
		icon: icon.crop,
		label: __('Crop', 'sb-toolicons-block'),
		description: __( 'Crop the image.', 'sb-toolicons-block'),
		key: 'crop'
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


export const editRSSUrl =
	{
		icon: icon.edit,
		label: __('Edit RSS URL','sb-toolicons-block'),
		description: __( 'Use Edit RSS URL to change the URL for the RSS feed. Overwrite the existing URL and click on the “Use URL” Button on the right.','sb-toolicons-block'),
		key: 'editRSSUrl'
	};

export const editTable =
	{
		icon: icon.table,
		label: __( 'Edit table', 'sb-toolicons-block'),
		description: __( 'Edit the tables rows or columns', 'sb-toolicons-block'),
		key: 'editTable'
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

export const grid =
	{
		icon: icon.grid,
		label: __('Grid view','sb-toolicons-block'),
		description: __( 'Display the content in a grid','sb-toolicons-block'),
		key: 'grid'
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

export const indent =
	{
		icon: icon.formatIndent,
		label: __('Indent list item', 'sb-toolicons-block'),
		description: __( 'Indent the selected list item', 'sb-toolicons-block'),
		key: 'indent'
	};

export const info =
	{
		icon: icon.info,
		label: __( 'Content structure', 'sb-toolicons-block'),
		description: __( 'Display summary information about the content', 'sb-toolicons-block'),
		key: 'info'
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

export const list =
	{
		icon: icon.list,
		label: __('List view', 'sb-toolicons-block'),
		description: __('View as a list.', 'sb-toolicons-block'),
		key: 'list'
	};

const moveDown =
	{
		icon: icon.chevronDown,
		label: __( 'Move down','sb-toolicons-block'),
		description: __( 'Move the block downwards','sb-toolicons-block'),
		key: 'moveDown'
	};

export const moveLeft =
	{
		icon: icon.chevronLeft,
		label: __( 'Move left','sb-toolicons-block'),
		description: __( 'Move the block to the left','sb-toolicons-block'),
		key: 'moveLeft'
	};

export const moveRight =
	{
		icon: icon.chevronRight,
		label: __( 'Move right','sb-toolicons-block'),
		description: __( 'Move the block to the right','sb-toolicons-block'),
		key: 'moveRight'
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

export const medialeft =
	{
		icon: icon.pullLeft,
		label: __( 'Show media left', 'sb-toolicons-block'),
		description: __( 'Show media on the left hand side', 'sb-toolicons-block'),
		key: 'medialeft'
	};

export const mediaright =
	{
		icon: icon.pullRight,
		label: __( 'Show media right', 'sb-toolicons-block'),
		description: __( 'Show media on the right hand side', 'sb-toolicons-block'),
		key: 'mediaright'
	};

/* Copied from Gutenberg 9.1.0 on 2020/10/21 packages/block-editor/src/components/block-navigation/dropdown.js
*/

const MenuIcon = (
	<SVG
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		width="24"
		height="24"
	>
		<Path d="M13.8 5.2H3v1.5h10.8V5.2zm-3.6 12v1.5H21v-1.5H10.2zm7.2-6H6.6v1.5h10.8v-1.5z" />
	</SVG>
);

export const menuicon =
	{
		icon: MenuIcon,
		label: __( 'Block navigation', 'sb-toolicons-block'),
		description: __( 'View the hierarchy of blocks', 'sb-toolicons-block'),
		key: 'menuicon'
	};

export const moreToolsAndOptions =
	{
		icon: icon.moreVertical,
		label: __( 'More tools and options', 'sb-toolicons-block'),
		description: __( 'Display more tools and options', 'sb-toolicons-block'),
		key: 'moreToolsAndOptions'
	};

export const nobutton =
	{ icon: search.noButton,
	label: __( 'No button', 'sb-toolicons-block'),
	description: __( "Don't display a Search button", 'sb-toolicons-block' ),
	key: 'nobutton',
	};

/**
 * Copied from Gutenberg 9.0.0 on 2020/10/02 - packages/block-library/src/navigation/use-block-navigator.js
 * @type {JSX.Element}
 */

const NavigatorIcon = (
	<SVG
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		width="24"
		height="24"
	>
		<Path d="M13.8 5.2H3v1.5h10.8V5.2zm-3.6 12v1.5H21v-1.5H10.2zm7.2-6H6.6v1.5h10.8v-1.5z" />
	</SVG>
);


export const openblocknavigator =
	{
		icon: NavigatorIcon,
		label: __( 'Open block navigator', 'sb-toolicons-block'),
		description: __( 'Open the block navigator modal dialog'),
		key: 'openblocknavigator'
	};

/**
 * Copied from Gutenberg on 2020/10/02 - from packages/block-library/src/navigation/block-colors-selector.js
 * @returns {JSX.Element}
 * @constructor
 */
const ColorSelectorSVGIcon = () => (
	<SVG xmlns="https://www.w3.org/2000/svg" viewBox="0 0 20 20">
		<Path d="M7.434 5l3.18 9.16H8.538l-.692-2.184H4.628l-.705 2.184H2L5.18 5h2.254zm-1.13 1.904h-.115l-1.148 3.593H7.44L6.304 6.904zM14.348 7.006c1.853 0 2.9.876 2.9 2.374v4.78h-1.79v-.914h-.114c-.362.64-1.123 1.022-2.031 1.022-1.346 0-2.292-.826-2.292-2.108 0-1.27.972-2.006 2.71-2.107l1.696-.102V9.38c0-.584-.42-.914-1.18-.914-.667 0-1.112.228-1.264.647h-1.701c.12-1.295 1.307-2.107 3.066-2.107zm1.079 4.1l-1.416.09c-.793.056-1.18.342-1.18.844 0 .52.45.837 1.091.837.857 0 1.505-.545 1.505-1.256v-.515z" />
	</SVG>
);

export const opencolorsselector =
	{
		icon: ColorSelectorSVGIcon,
		label: __('Open colors selector', 'sb-toolicons-block'),
		description: __( 'Open the dialog to select colors', 'sb-toolicons-block'),
		key: 'opencolorsselector'
	};

export const ordered =
	{
		icon: icon.formatListNumbered,
		label: __('Convert to ordered list', 'sb-toolicons-block'),
		description: __( 'Convert the selected list to an ordered list', 'sb-toolicons-block'),
		key: 'ordered'
	};

export const outdent =
	{
		icon: icon.formatOutdent,
		label: __('Outdent list item', 'sb-toolicons-block'),
		description: __( 'Outdent the selected list item', 'sb-toolicons-block'),
		key: 'outdent'
	};

export const plus =
	{
		icon: icon.plus,
		label: __( 'Add block', 'sb-toolicons-block'),
		description: __( 'Add a block using the block inserter', 'sb-toolicons-block'),
		key: 'plus',
	}

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
		description: __( 'Preview the formatted HTML', 'sb-toolicons-block'),
		key: 'preview'
	};

export const previewPost =
	{
		text: __( 'Preview', 'sb-toolicons-block'),
		label: __( 'Preview','sb-toolicons-block'),
		description: __( 'Preview the post', 'sb-toolicons-block'),
		key: 'previewPost'
	};

export const redo =
	{
		icon: icon.redo,
		label: __('Redo', 'sb-toolicon-block'),
		description: __( 'Redo the most recent undone change.', 'sb-toolicon-block'),
		key: 'redo'
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
		text: __( "Replace", 'sb-toolicons-block'),
		label: __( 'Replace','sb-toolicons-block'),
		description: __( 'Replace the existing file.','sb-toolicons-block'),
		key: 'replace'
	};

const rotate =
	{
		icon: icon.rotateLeft,
		label: __( 'Rotate', 'sb-toolicons-block'),
		description: __( 'Rotate the image', 'sb-toolicons-block'),
		key: 'rotate'
	};
/** Copied from Gutenberg 9.1.0 on 2020/10/23 - packages/block-editor/src/components/tool-selector/index.js
 *
 * @type {JSX.Element}
 */
const selectIcon = (
	<SVG
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
	>
		<Path d="M9.4 20.5L5.2 3.8l14.6 9-2 .3c-.2 0-.4.1-.7.1-.9.2-1.6.3-2.2.5-.8.3-1.4.5-1.8.8-.4.3-.8.8-1.3 1.5-.4.5-.8 1.2-1.2 2l-.3.6-.9 1.9zM7.6 7.1l2.4 9.3c.2-.4.5-.8.7-1.1.6-.8 1.1-1.4 1.6-1.8.5-.4 1.3-.8 2.2-1.1l1.2-.3-8.1-5z" />
	</SVG>
);


export const select =
	{ icon: selectIcon,
		label: __( 'Select','sb-toolicons-block'),
		description: __( 'Use the Select tool','sb-toolicons-block'),
		key: 'select'
	};


export const settings =
	{ icon: icon.cog,
		label: __( 'Settings','sb-toolicons-block'),
		description: __( 'Show/hide settings.','sb-toolicons-block'),
		key: 'settings'
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

export const switchToDraft =
	{
		text: __( 'Switch to draft', 'sb-toolicons-block'),
		label: __( 'Switch to draft', 'sb-toolicons-block'),
		description: __('Save the content as a draft', 'sb-toolicons-block'),
		key: 'switchToDraft'
	};

export const tableColumnAfter =
	{
		icon: icon.tableColumnAfter,
		label: __('Insert column after', 'sb-toolicons-block'),
		description: __('Insert a column after the selected column', 'sb-toolicons-block'),
		key: 'tableColumnAfter'
	};

export const tableColumnBefore =
	{
		icon: icon.tableColumnBefore,
		label: __('Insert column before', 'sb-toolicons-block'),
		description: __('Insert a column before the selected column', 'sb-toolicons-block'),
		key: 'tableColumnBefore'
	};

export const tableColumnDelete =
	{
		icon: icon.tableColumnDelete,
		label: __('Delete column', 'sb-toolicons-block'),
		description: __('Delete the selected column', 'sb-toolicons-block'),
		key: 'tableColumnDelete'
	};

export const tableRowAfter =
	{
		icon: icon.tableRowAfter,
		label: __('Insert row after', 'sb-toolicons-block'),
		description: __('Insert a row after the selected column', 'sb-toolicons-block'),
		key: 'tableRowAfter'
	};
export const tableRowBefore =
	{
		icon: icon.tableRowBefore,
		label: __('Insert row before', 'sb-toolicons-block'),
		description: __('Insert a row before the selected column', 'sb-toolicons-block'),
		key: 'tableRowBefore'
	};

export const tableRowDelete =
	{
		icon: icon.tableRowDelete,
		label: __('Delete row', 'sb-toolicons-block'),
		description: __('Delete the selected row', 'sb-toolicons-block'),
		key: 'tableRowDelete'
	};

const textColor =
	{ icon: icon.textColor,
	 label: __('Text color','sb-toolicons-block'),
	description: __( 'Use Text color to change the color of the selected text','sb-toolicons-block'),
	key: 'textColor'
	};

export const toggleSearchLabel =
	{ icon: search.toggleLabel,
	label: __( 'Toggle search label', 'sb-toolicons-block'),
	description: __( 'Toggle the display of the label', 'sb-toolicons-block'),
	key: 'toggleSearchLabel'
	};

export const tools =
	{
		icon: icon.edit,
		label: __( 'Tools', 'sb-toolicon-block'),
		description: __( 'Choose the method for selecting and interacting with blocks.'),
		key: 'tools'
	};

export const undo =
	{
		icon: icon.undo,
		label: __('Undo', 'sb-toolicon-block'),
		description: __( 'Undo the most recent change.', 'sb-toolicon-block'),
		key: 'undo'
	};

export const unordered =
	{
		icon: icon.formatListBullets,
		label: __('Convert to unordered list', 'sb-toolicons-block'),
		description: __( 'Convert the list to a bulleted/ unordered list', 'sb-toolicons-block'),
		key: 'unordered'
	};

const upload =
	{
		icon: icon.upload,
		label: __('Upload','sb-toolicons-block'),
		description: __( 'Upload a file.','sb-toolicons-block'),
		key: 'upload'
	};

export const update =
	{
		text: __('Update', 'sb-toolicons-block'),
		label: __('Update','sb-toolicons-block'),
		description: __( 'Update the post. Save your changes','sb-toolicons-block'),
		key: 'update'
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

export const zoom =
	{
		icon: icon.search,
		label: __( 'Zoom', 'sb-toolicons-block'),
		description: __( 'Zoom in or out.', 'sb-toolicons-block'),
		key: 'zoom'
	};


export { addToReusable, apply, aspectRatio,
	blockSettings,
	cancel, changeContentPosition, chevronDown, code, convertToBlocks, copy, crop,
	dragHandle, duplicate,
	editAsHTML, editURL,
	formatBold, formatItalic, formatStrikethrough,
	group,
	heading1, heading2, heading3, heading4, heading5, heading6, html,
	image, insertAfter, insertBefore,
	link,
	media, moveDown, moveTo, moveUp,
	positionLeft, positionCenter, positionRight, preview,
	removeBlock, replace, rotate,
 	subscript, superscript,	stretchWide, stretchFullWidth,
	textColor,
	upload,
	verticalAlignTop, verticalAlignCenter, verticalAlignBottom,

};

var tooliconsmap = [
	addsubmenu,	addToReusable, alignCenter, alignLeft, alignRight, apply, aspectRatio,
	blockSettings, searchbuttonInside, searchbuttonOnly, searchbuttonOutside, searchbuttonWithIcon,
	cancel, changeContentPosition, chevronDown, code, convertToBlocks, converttoRegularBlocks, copy, crop,
	dragHandle, duplicate,
	editAsHTML, editRSSUrl, editTable, editURL,
	formatBold, formatItalic, formatStrikethrough,
	grid, group,
	heading1, heading2, heading3, heading4, heading5, heading6, html,
	image, indent, info, insertAfter, insertBefore,
	link, list,
	media, medialeft, mediaright, menuicon, moreToolsAndOptions, moveDown, moveLeft, moveRight, moveTo, moveUp,
	nobutton,
	openblocknavigator, opencolorsselector, ordered, outdent,
	plus, positionLeft, positionCenter, positionRight, preview, previewPost,
	redo, removeBlock, replace, rotate,
	select, settings, subscript, superscript,	stretchWide, stretchFullWidth, switchToDraft,
	tableColumnAfter, tableColumnBefore, tableColumnDelete,
	tableRowAfter, tableRowBefore, tableRowDelete,
	textColor, toggleSearchLabel,
	tools,
	undo, unordered, update, upload,
	verticalAlignTop, verticalAlignCenter, verticalAlignBottom,
	zoom
	];

export { tooliconsmap };

/*
export { default as Icon } from './icon';

y export { default as alignCenter } from './library/align-center';
n export { default as alignJustify } from './library/align-justify';  - icon for post-content block
y export { default as alignLeft } from './library/align-left';
y export { default as alignRight } from './library/align-right';
export { default as archive } from './library/archive';
export { default as arrowDown } from './library/arrow-down';
export { default as arrowLeft } from './library/arrow-left';
export { default as arrowRight } from './library/arrow-right';
export { default as arrowUp } from './library/arrow-up';
export { default as atSymbol } from './library/at-symbol';
export { default as aspectRatio } from './library/aspect-ratio';
export { default as audio } from './library/audio';
export { default as backup } from './library/backup';
? export { default as blockDefault } from './library/block-default';
export { default as blockTable } from './library/block-table';
export { default as box } from './library/box';
export { default as brush } from './library/brush';
export { default as button } from './library/button';
export { default as calendar } from './library/calendar';
export { default as camera } from './library/camera';
export { default as cancelCircleFilled } from './library/cancel-circle-filled';
export { default as capturePhoto } from './library/capture-photo';
export { default as captureVideo } from './library/capture-video';
export { default as category } from './library/category';
export { default as chartBar } from './library/chart-bar';
export { default as chartLine } from './library/chart-line';
export { default as check } from './library/check';
export { default as chevronBackIOS } from './library/chevron-back-ios';
export { default as chevronDown } from './library/chevron-down';
export { default as chevronLeft } from './library/chevron-left';
export { default as chevronRight } from './library/chevron-right';
export { default as chevronUp } from './library/chevron-up';
export { default as classic } from './library/classic';
export { default as closeCircleFilled } from './library/close-circle-filled';
export { default as close } from './library/close';
export { default as closeSmall } from './library/close-small';
export { default as cloudUpload } from './library/cloud-upload';
export { default as cloud } from './library/cloud';
export { default as code } from './library/code';
export { default as cog } from './library/cog';
export { default as column } from './library/column';
export { default as columns } from './library/columns';
export { default as comment } from './library/comment';
export { default as controlsRepeat } from './library/controls-repeat';
export { default as cover } from './library/cover';
export { default as create } from './library/create';
export { default as crop } from './library/crop';
export { default as currencyDollar } from './library/currency-dollar';
export { default as currencyEuro } from './library/currency-euro';
export { default as currencyPound } from './library/currency-pound';
export { default as desktop } from './library/desktop';
export { default as dragHandle } from './library/drag-handle';
export { default as download } from './library/download';
? export { default as edit } from './library/edit';
export { default as expand } from './library/expand';
export { default as external } from './library/external';
export { default as file } from './library/file';
export { default as flipHorizontal } from './library/flip-horizontal';
export { default as flipVertical } from './library/flip-vertical';
export { default as formatBold } from './library/format-bold';
export { default as formatIndent } from './library/format-indent';
export { default as formatIndentRTL } from './library/format-indent-rtl';
export { default as formatItalic } from './library/format-italic';
export { default as formatListBullets } from './library/format-list-bullets';
export { default as formatListBulletsRTL } from './library/format-list-bullets-rtl';
export { default as formatListNumbered } from './library/format-list-numbered';
export { default as formatListNumberedRTL } from './library/format-list-numbered-rtl';
export { default as formatLtr } from './library/format-ltr';
export { default as formatOutdent } from './library/format-outdent';
export { default as formatOutdentRTL } from './library/format-outdent-rtl';
export { default as formatRtl } from './library/format-rtl';
export { default as formatStrikethrough } from './library/format-strikethrough';
export { default as fullscreen } from './library/fullscreen';
export { default as gallery } from './library/gallery';
export { default as globe } from './library/globe';
export { default as grid } from './library/grid';
export { default as group } from './library/group';
export { default as handle } from './library/handle';
export { default as heading } from './library/heading';
export { default as help } from './library/help';
export { default as inbox } from './library/inbox';
export { default as institution } from './library/institution';
export { default as home } from './library/home';
export { default as html } from './library/html';
export { default as image } from './library/image';
y export { default as info } from './library/info';
export { default as insertAfter } from './library/insert-after';
export { default as insertBefore } from './library/insert-before';
export { default as keyboardClose } from './library/keyboard-close';
export { default as keyboardReturn } from './library/keyboard-return';
export { default as layout } from './library/layout';
export { default as lifesaver } from './library/lifesaver';
export { default as link } from './library/link';
export { default as linkOff } from './library/link-off';
export { default as list } from './library/list';
export { default as loop } from './library/loop';
export { default as mapMarker } from './library/map-marker';
export { default as media } from './library/media';
export { default as mediaAndText } from './library/media-and-text';
export { default as megaphone } from './library/megaphone';
export { default as menu } from './library/menu';
export { default as minus } from './library/minus';
export { default as mobile } from './library/mobile';
export { default as more } from './library/more';
export { default as moreHorizontal } from './library/more-horizontal';
export { default as moreHorizontalMobile } from './library/more-horizontal-mobile';
export { default as moreVertical } from './library/more-vertical';
export { default as navigation } from './library/navigation';
export { default as pageBreak } from './library/page-break';
export { default as page } from './library/page';
export { default as paragraph } from './library/paragraph';
export { default as payment } from './library/payment';
export { default as percent } from './library/percent';
export { default as positionCenter } from './library/position-center';
export { default as positionLeft } from './library/position-left';
export { default as positionRight } from './library/position-right';
export { default as pencil } from './library/pencil';
export { default as people } from './library/people';
export { default as pin } from './library/pin';
export { default as plugins } from './library/plugins';
export { default as plusCircleFilled } from './library/plus-circle-filled';
export { default as plusCircle } from './library/plus-circle';
? export { default as plus } from './library/plus';
export { default as postComments } from './library/post-comments';
export { default as postCommentsCount } from './library/post-comments-count';
export { default as postCommentsForm } from './library/post-comments-form';
export { default as postDate } from './library/post-date';
export { default as postExcerpt } from './library/post-excerpt';
export { default as postFeaturedImage } from './library/post-featured-image';
export { default as postList } from './library/post-list';
export { default as postTitle } from './library/post-title';
export { default as preformatted } from './library/preformatted';
export { default as pullLeft } from './library/pull-left';
export { default as pullRight } from './library/pull-right';
export { default as pullquote } from './library/pullquote';
export { default as quote } from './library/quote';
export { default as receipt } from './library/receipt';
export { default as redo } from './library/redo';
export { default as replace } from './library/replace';
export { default as resizeCornerNE } from './library/resize-corner-n-e';
export { default as reusableBlock } from './library/reusable-block';
export { default as rotateLeft } from './library/rotate-left';
export { default as rotateRight } from './library/rotate-right';
export { default as rss } from './library/rss';
export { default as search } from './library/search';
export { default as separator } from './library/separator';
export { default as share } from './library/share';
export { default as shortcode } from './library/shortcode';
export { default as stack } from './library/stack';
export { default as starEmpty } from './library/star-empty';
export { default as starFilled } from './library/star-filled';
export { default as starHalf } from './library/star-half';
export { default as store } from './library/store';
export { default as stretchFullWidth } from './library/stretch-full-width';
export { default as shipping } from './library/shipping';
export { default as stretchWide } from './library/stretch-wide';
export { default as subscript } from './library/subscript';
export { default as superscript } from './library/superscript';
export { default as tableColumnAfter } from './library/table-column-after';
export { default as tableColumnBefore } from './library/table-column-before';
export { default as tableColumnDelete } from './library/table-column-delete';
export { default as tableRowAfter } from './library/table-row-after';
export { default as tableRowBefore } from './library/table-row-before';
export { default as tableRowDelete } from './library/table-row-delete';
export { default as table } from './library/table';
export { default as tag } from './library/tag';
export { default as textColor } from './library/text-color';
export { default as tablet } from './library/tablet';
export { default as title } from './library/title';
? export { default as tool } from './library/tool';
export { default as trash } from './library/trash';
export { default as typography } from './library/typography';
export { default as undo } from './library/undo';
export { default as update } from './library/update';
export { default as upload } from './library/upload';
export { default as verse } from './library/verse';
export { default as video } from './library/video';
export { default as warning } from './library/warning';
export { default as widget } from './library/widget';
export { default as wordpress } from './library/wordpress';

*/
