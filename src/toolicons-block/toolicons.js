import { Toolbar, ToolbarItem, Button, Icon } from '@wordpress/components';
import { BlockControls, AlignmentToolbar} from '@wordpress/block-editor';
import { getBlockType } from '@wordpress/blocks';
import { BlockIcon  } from '@wordpress/editor';

import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';

import { blocktoolmap } from './blocktoolmap';

import { dragHandle, moveUp, moveDown } from './tooliconslist';
import * as toolgroup from "./toolgroups";
import { Transforms } from './transforms';


function getBlockTypeOptions( ) {
	return blocktoolmap.map( ( blocktool ) => MyBlockTypeOption( blocktool ));
	//var icons = block.tools.map( ( icon ) => MyToolBar( icon ) );
}
function MyBlockTypeOption( blocktool) {
	return {  label: blocktool.blockname, value: blocktool.blockname };
}

function copyIcon( icon ) {
	var groupIcon = {};
	groupIcon.icon = icon.icon;
	groupIcon.label = icon.label;
	groupIcon.description = icon.description;
	groupIcon.key = icon.key;
	groupIcon.text = icon.text;
	console.log( 'copyIcon');
	console.log( groupIcon );
	return groupIcon;
}

function MyIconOrText( icon ) {
	var iconOrText = '';
		if ( undefined !== icon.icon ) {
		iconOrText = <Icon icon={icon.icon} />
	}
	if ( undefined !== icon.text ) {
		iconOrText += icon.text;
	}
	return iconOrText;
}



function MyToolIcon( icon ) {
	//console.log(MyToolIcon.name);
	//console.log(icon);
	if ( undefined !== icon.tools) {
		//console.log( 'processing group');
		var groupIcon = copyIcon( icon );
		var iconGroup = MyToolIcon( groupIcon );
		//console.log( iconGroup );
		//console.log( 'after iconGroup');
		var nestedIcons = icon.tools.map( iconNested => MyToolIcon( iconNested ) );
		return ( <Fragment key={iconGroup.key}>
			{ iconGroup }
			<ul className="icons nested">
				{ nestedIcons }
			</ul>
		</Fragment> );
	} else {
		//console.log( 'iconkey' + icon.key );
		var iconOrText = MyIconOrText( icon );
		return (
			<li key={icon.key}>
				<span className={"tool"}>{iconOrText}</span>
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
	var iconOrText = MyIconOrText( icon );
	var classText = ( undefined === icon.text ) ? '' :  'text ';
	classText += icon.key ;
	return(
		<div className={classText} key={icon.key} >
			{iconOrText}
		</div>
	);
}

function aBlockTool( blocktool ) {
	console.log( "aBlockTool " + blocktool.blockname  );
	var icons = blocktool.tools.map( ( icon ) => MyToolIcon( icon ) );
	//var icons = 'icons';
	return( <li key={blocktool.blockname}>{blocktool.blockname} {icons}</li>);
}

function allBlockTools( blockname, showMoreOptions ) {
	//console.log( blocktoolmap);
	//console.log( blockname );
	//console.log( 'wtf');
	//console.trace();
	var blocktool = blocktoolmap.find( blocktool => blocktool.blockname === blockname );
	var moreOptions = '';
	if ( showMoreOptions ) {
		var moreOptions =  MyToolIcon( toolgroup.moreOptions );
	}
	///find( variation => variation.name === variation_name);
	//console.log( blocktool);
	//console.log( 'wtf2');
	var icons = blocktool.tools.map( ( icon ) => MyToolIcon( icon ) );

	return(
		<div>
			<ul className="icons" >
			{icons}
			{moreOptions}
			</ul>
		</div>
	);
}

/**
 * Most blocks have Move up and Move down icons.
 * Some have Move left and Move right.
 * @returns {JSX.Element}
 * @constructor
 */

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
	//console.log( blockName );
	var block = getBlockType( blockName);
	if ( !block) {
		return('');
	}
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

/**
 * Displays the moreOption icon regardless of the value of showMoreOptions.
 * It gets displayed for block toolbars.
 * @param showMoreOptions
 * @returns {JSX.Element|string}
 */

function blockToolbarMoreOptions( showMoreOptions=true ) {
	if ( showMoreOptions) {
		return( MyToolBar( toolgroup.moreOptions ));
	}
	return('');
}

function blockToolbar( blockName) {
	var block = blocktoolmap.find( blocktool => blocktool.blockname === blockName );
	var blockToolBar = blockToolbarControls( blockName );
	var icons = block.tools.map( ( icon ) => MyToolBarOrGroup( icon ) );
	var moreOptions = blockToolbarMoreOptions();
	return( <div className="blockToolbar">{blockToolBar}
	{icons}{moreOptions}</div> );
}

function toolIconStyled( iconname, blocktype, showMoreOptions, showTransforms ) {
	//var toolIcons = toolIconsList( props );
	var toolBar = blockToolbar( blocktype );
	var blockTools = allBlockTools( blocktype, showMoreOptions );
	//var blockTools = 'blockTools';
	var transforms = Transforms( blocktype, showTransforms );
	return(
		<Fragment>
			{toolBar}
			{blockTools}
			{transforms}
		</Fragment>
	);
}

export { toolIconStyled, getBlockTypeOptions };
