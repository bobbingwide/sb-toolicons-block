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
	console.log( className );

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

	const onChangeShowToolbar = ( event ) => {
		setAttributes( { showToolbar: ! attributes.showToolbar });
	}

	const onChangeShowDropDownMenus = ( event ) => {
		setAttributes( { showDropDownMenus: ! attributes.showDropDownMenus });
	}

	const onChangeShowMoreOptions = ( event ) => {
		setAttributes( { showMoreOptions: ! attributes.showMoreOptions });
	}

	const onChangeShowTransforms = ( event ) => {
		setAttributes( { showTransforms: ! attributes.showTransforms });
	}

	const onChangeShowLinks = ( event ) => {
		setAttributes( { showLinks: ! attributes.showLinks });
	}

	const onChangeShowAllIcons = ( event ) => {
		setAttributes( { showAllIcons: ! attributes.showAllIcons });
	}

	const onChangeShowIconOnly = ( event ) => {
		console.log( "Toggle showIconOnly");
		setAttributes( { showIconOnly: ! attributes.showIconOnly });
	}

	var toolicon = toolIconStyled( attributes.selection,
		attributes.blocktype,
		attributes.toolgroup,
		attributes.toolicon,
		attributes.showToolbar,
		attributes.showDropDownMenus,
		attributes.showMoreOptions,
		attributes.showTransforms,
		attributes.showLinks,
		attributes.showAllIcons,
		attributes.showIconOnly);

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
						<ToggleControl
							label={__('Show all icons', 'sb-toolicons-block')}
							checked={!!attributes.showAllIcons}
							onChange={onChangeShowAllIcons}
						/>
					</PanelRow>
					}


					{'toolicon' === attributes.selection &&

					<PanelRow>
						<SelectControl label={__("Icon", 'sb-toolicons-block')} value={attributes.toolicon}
									   onChange={onChangeToolIcon} options={toolIconOptions}/>
					</PanelRow>
					}

					{'toolicon' === attributes.selection &&
					<PanelRow>
						<ToggleControl
							label={__('Show icon only', 'sb-toolicons-block')} checked={!!attributes.showIconOnly}
							onChange={onChangeShowIconOnly}
						/>
					</PanelRow>
					}

					{'toolicon' !== attributes.selection &&
					<PanelRow>
						<ToggleControl
							label={__('Show toolbar', 'sb-toolicons-block')}
							checked={!!attributes.showToolbar}
							onChange={onChangeShowToolbar}
						/>
					</PanelRow>
					}
					{'toolicon' !== attributes.selection &&
						<PanelRow>
						<ToggleControl
						label={__('Show Drop down menus', 'sb-toolicons-block')}
						checked={!!attributes.showDropDownMenus}
						onChange={onChangeShowDropDownMenus}

						/>
						</PanelRow>
					}

					{('blocktype' === attributes.selection) &&
					<PanelRow>
						<ToggleControl
							label={__('Show More options menu items', 'sb-toolicons-block')}
							checked={!!attributes.showMoreOptions}
							onChange={onChangeShowMoreOptions}

						/>
					</PanelRow>
					}
					{('blocktype' === attributes.selection) &&

						<PanelRow>
						<ToggleControl
						label={__('Show Transforms', 'sb-toolicons-block')}
						checked={!!attributes.showTransforms}
						onChange={onChangeShowTransforms}

						/>
						</PanelRow>
					}
					{('blocktype' === attributes.selection && attributes.showTransforms) &&

					<PanelRow>
						<ToggleControl
							label={__('Show Links', 'sb-toolicons-block')}
							checked={!!attributes.showLinks}
							onChange={onChangeShowLinks}

						/>
					</PanelRow>
					}
				</PanelBody>
			</InspectorControls>


			<div className={ attributes.className }>
				{ toolicon }
			</div>
		</Fragment>

	);

}


