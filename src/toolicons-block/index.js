/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import { toolIconStyled } from './toolicons';
import edit from './edit';
import save from './save';
import variations from './variations';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
registerBlockType( 'oik-sb/toolicons', {
	/**
	 * This is the display title for your block, which can be translated with `i18n` functions.
	 * The block inserter will show this name.
	 */
	title: __( 'Toolbar icons', 'sb-toolicons-block' ),

	/**
	 * This is a short description for your block, can be translated with `i18n` functions.
	 * It will be shown in the Block Tab in the Settings Sidebar.
	 */
	description: __( 'Helps you to document tool icons for a block.', 'sb-toolicons-block' ),

	/**
	 * Blocks are grouped into categories to help users browse and discover them.
	 * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.
	 */
	category: 'widgets',

	/**
	 * An icon property should be specified to make it easier to identify a block.
	 * These can be any of WordPress’ Dashicons, or a custom svg element.
	 */
	icon: 'block-default',
	variations,



	keywords: [
		__( 'Icons', 'sb-toolicons-block' ),
		__( 'Blocks', 'sb-toolicons-block' ),
		__( 'Toolbar', 'sb-toolicons-block' ),
		__( 'Tools', 'sb-toolicons-block' ),
	],

	/**
	 * Optional block extended support features.
	 */
	supports: {
		// Removes support for an HTML mode.
		html: false,
	},

	// Set for each piece of dynamic data used in your block

	attributes: {

		selection: {
			type: 'string',
			default: 'blocktype'  /* 'toolgroup', 'toolicon' */
		},

		toolgroup: {
			type: 'string',
			default: 'moreOptions'
		},

		toolicon: {
			type: 'string',
			default: 'alignCenter'
		},

		blocktype: {
			type: 'string',
			default: 'core/paragraph'
		},

		showMoreOptions: {
			type: 'boolean',
			default: true
		},

		showTransforms: {
			type: 'boolean',
			default: true
		},


	},

	/*
	example: {
	},
	*/


	/**
	 * @see ./edit.js
	 */
	edit: edit,

	/**
	 * @see ./save.js
	 */
	save,
} );


