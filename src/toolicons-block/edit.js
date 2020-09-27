/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * These imports were added using the best guess technique.
 * @TODO Confirm what they should be!
 */
import { ServerSideRender } from '@wordpress/editor';
import { Fragment} from '@wordpress/element';
import { InspectorControls } from '@wordpress/block-editor';
//const { InspectorControls } = wp.blockEditor;
// deprecated.js?ver=cd9e35508705772fbc5e2d9736bde31b:177 wp.editor.InspectorControls is deprecated. Please use wp.blockEditor.InspectorControls instead.
import { TextControl, PanelBody, PanelRow, SelectControl } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import './style.scss';
import {toolIconStyled, getBlockTypeOptions } from "./toolicons";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @param {Object} [props]           Properties passed from the editor.
 * @param {string} [props.className] Class name generated for the block.
 *
 * @return {WPElement} Element to render.
 */
export default function edit ( { attributes, className, isSelected, setAttributes } )   {
	console.log( "edit being called");
	const onChangeToolicon = ( event ) => {
		setAttributes( { toolicon: event } );
	}

	const onChangeBlockType = ( event) => {
		setAttributes( { blocktype: event } );
	}

	var toolicon = toolIconStyled( attributes.toolicon, attributes.blocktype);
	var blockTypeOptions = getBlockTypeOptions();
	return (
		<Fragment>
			<InspectorControls>
				<PanelBody>
					<SelectControl label={__("Block type",'sb-toolicons-block')} value={attributes.blocktype} onChange={onChangeBlockType} options={blockTypeOptions}  />
				</PanelBody>
			</InspectorControls>


			<div className={ attributes.className }>
				{ toolicon }
			</div>
		</Fragment>

	);

}


