import { Toolbar, ToolbarItem, Button, Icon } from '@wordpress/components';
import { BlockControls, AlignmentToolbar} from '@wordpress/block-editor';

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

function MyToolIcon( icon ) {
	console.log( MyToolIcon.name );
	console.log( icon );
return(
	<li key={icon.key}>
		<Icon icon={icon.icon} />
		<span class={"label"}>{icon.label}</span>
		<span class={"description"}>{ icon.description}</span>
	</li>
);
}

function MyToolBar( icon ) {
	return(	<Icon icon={icon.icon} key={icon.id} />);
}

function aBlockTool( blocktool ) {
	console.log( "aBlockTool " + blocktool.blockname  );
	//var icons = blocktool.tools.map( ( icon ) => MyToolIcon( icon ) );
	var icons = 'icons';
	return( <li key={blocktool.blockname}>{blocktool.blockname} {icons}</li>);
}

function allBlockTools( blockname ) {
	console.log( blocktoolmap);
	console.log( blockname );
	console.log( 'wtf');
	//console.trace();
	var blocktool = blocktoolmap.find( blocktool => blocktool.blockname === blockname );
	///find( variation => variation.name === variation_name);
	console.log( blocktool);
	console.log( 'wtf2');
	var icons = blocktool.tools.map( ( icon ) => MyToolIcon( icon ) );
	return(
		<div>
			{blocktool.blockname}
			<ul class="icons" >
			{icons}
			</ul>
		</div>
	);
}

function blockToolbar( blockName) {
	var block = blocktoolmap.find( blocktool => blocktool.blockname === blockName );
	var icons = block.tools.map( ( icon ) => MyToolBar( icon ) );
	return( <div class="blockToolbar">{icons}</div> );
}

function toolIconStyled( iconname, ...props ) {
	//var toolIcons = toolIconsList( props );
	var toolBar = blockToolbar( 'core/heading');
	var blockTools = allBlockTools( 'core/heading');
	return(
		<Fragment>
			{toolBar}
			{blockTools}


		</Fragment>
	);
}

export { toolIconStyled };
