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
import { TextControl, PanelBody, PanelRow, SelectControl, ToggleControl } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import './style.scss';
import {toolIconStyled, getBlockTypeOptions } from "./toolicons";
import { getSelectionOptions } from './variations';
import { getToolIconOptions } from './tooliconsmap';
import { getToolGroupOptions } from './toolgroupmap';

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

	const onChangeSelection = ( event ) => {
		setAttributes( { selection: event } );
	}

	const onChangeBlockType = ( event) => {
		setAttributes( { blocktype: event } );
	}

	const onChangeToolGroup = ( event ) => {
		setAttributes( { toolgroup: event } );
	}

	const onChangeToolIcon = ( event ) => {
		setAttributes( { toolicon: event } );
	}

	const onChangeShowMoreOptions = ( event ) => {
		setAttributes( { showMoreOptions: ! attributes.showMoreOptions });
	}

	const onChangeShowTransforms = ( event ) => {
		setAttributes( { showTransforms: ! attributes.showTransforms });
	}

	var toolicon = toolIconStyled( attributes.selection,
		attributes.blocktype,
		attributes.toolgroup,
		attributes.toolicon,
		attributes.showMoreOptions,
		attributes.showTransforms );

	var selectionOptions = getSelectionOptions();
	var blockTypeOptions = getBlockTypeOptions();
	var toolGroupOptions = getToolGroupOptions();
	var toolIconOptions = getToolIconOptions();


	return (
		<Fragment>
			<InspectorControls>
				<PanelBody>
					<PanelRow>
						<SelectControl label={__("Selection",'sb-toolicons-block')} value={attributes.selection} onChange={onChangeSelection} options={selectionOptions}  />
					</PanelRow>
					{ ('blocktype' === attributes.selection ) &&
					<PanelRow>
						<SelectControl label={__("Block type", 'sb-toolicons-block')} value={attributes.blocktype}
									   onChange={onChangeBlockType} options={blockTypeOptions}/>
					</PanelRow>
					}
					{ ('toolgroup' === attributes.selection) &&
					<PanelRow>
						<SelectControl label={__("Tool group", 'sb-toolicons-block')} value={attributes.toolgroup}
									   onChange={onChangeToolGroup} options={toolGroupOptions}/>
					</PanelRow>
					}

					{'toolicon' === attributes.selection &&

					<PanelRow>
						<SelectControl label={__("Icon", 'sb-toolicons-block')} value={attributes.toolicon}
									   onChange={onChangeToolIcon} options={toolIconOptions}/>
					</PanelRow>
					}
					<PanelRow>
						<ToggleControl
							label={ __( 'Show More options menu items', 'sb-toolicons-block' ) }
							checked={ !! attributes.showMoreOptions }
							onChange={ onChangeShowMoreOptions }

						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={ __( 'Show Transforms', 'sb-toolicons-block' ) }
							checked={ !! attributes.showTransforms }
							onChange={ onChangeShowTransforms }

						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>


			<div className={ attributes.className }>
				{ toolicon }
			</div>
		</Fragment>

	);

}


