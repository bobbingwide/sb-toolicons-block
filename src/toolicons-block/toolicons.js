import { Toolbar, ToolbarItem, Button, Icon } from '@wordpress/components';
import { BlockControls, AlignmentToolbar} from '@wordpress/block-editor';
import { getBlockType } from '@wordpress/blocks';
import { BlockIcon  } from '@wordpress/editor';

import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';

import { blocktoolmap } from './blocktoolmap';
import {
	alignLeft,
	alignCenter,
	alignRight,
	positionLeft,
	positionCenter,
	positionRight,

} from '@wordpress/icons';

import { dragHandle, moveUp, moveDown} from './tooliconslist';


function getBlockTypeOptions( ) {
	return blocktoolmap.map( ( blocktool ) => MyBlockTypeOption( blocktool ));
	//var icons = block.tools.map( ( icon ) => MyToolBar( icon ) );
}
function MyBlockTypeOption( blocktool) {
	return {  label: blocktool.blockname, value: blocktool.blockname };
}

/**
 * Displays the icon for the selected tool
 */

function toolIconStuff() {
	return (
		<Fragment>
			<BlockControls>
				<AlignmentToolbar

				/>
			</BlockControls>
			<BlockControls
				controls={[
					{
						icon: 'editor-table',
						title: __('Display as table'),

					}
				]}
			/>
		</Fragment>
	);
}

function toolIconsList( props ) {
	return( <div className="block-editor-block-toolbar" >


			<Icon icon={ alignLeft} />
			<Icon icon={ alignCenter} />
			<Icon icon={ alignRight } />
			<Icon icon={ positionLeft} />
			<Icon icon={positionCenter} />
			<Icon icon={positionRight} />
		</div>
	);
}

function copyIcon( icon ) {
	var groupIcon = {};
	groupIcon.icon = icon.icon;
	groupIcon.label = icon.label;
	groupIcon.description = icon.description;
	groupIcon.key = icon.key;
	console.log( 'copyIcon');
	console.log( groupIcon );
	return groupIcon;
}



function MyToolIcon( icon ) {
	console.log(MyToolIcon.name);
	console.log(icon);
	if ( undefined !== icon.tools) {
		console.log( 'processing group');
		var groupIcon = copyIcon( icon );
		var iconGroup = MyToolIcon( groupIcon );
		console.log( iconGroup );
		console.log( 'after iconGroup');
		var nestedIcons = icon.tools.map( iconNested => MyToolIcon( iconNested ) );
		return ( <Fragment key={iconGroup.key}>
			{ iconGroup }
			<ul className="icons nested">
				{ nestedIcons }
			</ul>
		</Fragment> );
	} else {
		console.log( 'iconkey' + icon.key );
		return (
			<li key={icon.key}>
				<Icon icon={icon.icon} />
				<span className={"label"}>{icon.label}</span>
				<span className={"description"}>{icon.description}</span>
			</li>
		);
	}
}
/*

				*/

/**
 * If this is a single icon display it, otherwise display the default icon.
 * @param icon
 * @constructor
 */

function MyToolBarOrGroup( icon ) {
	//console.log( icon );
	if ( undefined !== icon.tools ) {
		return( MyToolBar( icon ));
	} else {
		return( MyToolBar( icon ));
	}
}

/**
 * We need to give it a class name so that it can be styled.
 * How it is done in the editor?
 *
 * @param icon
 * @returns {JSX.Element}
 * @constructor
 */
function MyToolBar( icon ) {
	return(
		<div className={icon.key} key={icon.key} >
		<Icon icon={icon.icon} />
		</div>
		);
}

function aBlockTool( blocktool ) {
	console.log( "aBlockTool " + blocktool.blockname  );
	var icons = blocktool.tools.map( ( icon ) => MyToolIcon( icon ) );
	//var icons = 'icons';
	return( <li key={blocktool.blockname}>{blocktool.blockname} {icons}</li>);
}

function allBlockTools( blockname ) {
	console.log( blocktoolmap);
	console.log( blockname );
	//console.log( 'wtf');
	//console.trace();
	var blocktool = blocktoolmap.find( blocktool => blocktool.blockname === blockname );
	///find( variation => variation.name === variation_name);
	console.log( blocktool);
	//console.log( 'wtf2');
	var icons = blocktool.tools.map( ( icon ) => MyToolIcon( icon ) );
	return(
		<div>
			<ul className="icons" >
			{icons}
			</ul>
		</div>
	);
}

function MoveUpDownIcons() {
	var up = MyToolBar( moveUp );
	var down = MyToolBar( moveDown );
	return(
		<div className="moveUpDown">
			{up}
			{down}
		</div>	);
}


/**
 * Displays the block Toolbar controls
 * - block icon
 * - drag icon ( number 6 domino )
 * - Move up/move down
 *
 * Not sure why I can't use BlockIcon here!
 * @param blockName
 * @returns {JSX.Element}
 */

function blockToolbarControls( blockName ) {
	console.log( blockName );
	var block = getBlockType( blockName);
	var dragHandleIcon = MyToolBar( dragHandle);
	var moveUpDown = MoveUpDownIcons();
	return(
/* components-toolbar-group block-editor-block-toolbar__block-controls */
<Fragment>
	<div className={blockName}>
		<Icon icon={block.icon.src} />
	</div>
	{ dragHandleIcon }
	{ moveUpDown}
</Fragment>
	);
}

function blockToolbar( blockName) {
	var block = blocktoolmap.find( blocktool => blocktool.blockname === blockName );
	var blockToolBar = blockToolbarControls( blockName );
	var icons = block.tools.map( ( icon ) => MyToolBarOrGroup( icon ) );
	return( <div className="blockToolbar">{blockToolBar}
	{icons}</div> );
}

function toolIconStyled( iconname, blocktype ) {
	//var toolIcons = toolIconsList( props );
	var toolBar = blockToolbar( blocktype);

	var blockTools = allBlockTools( blocktype);
	//var blockTools = 'blockTools';
	return(
		<Fragment>
			{toolBar}
			{blockTools}


		</Fragment>
	);
}

export { toolIconStyled, getBlockTypeOptions };
