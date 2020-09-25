import { Toolbar, ToolbarItem, Button, Icon } from '@wordpress/components';
import { BlockControls, AlignmentToolbar} from '@wordpress/block-editor';

import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';


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
	return( <div className={ props.className } >


			<Icon icon={ alignLeft} />
			<Icon icon={ alignCenter} />
			<Icon icon={ alignRight } />
			<Icon icon={ positionLeft} />
			<Icon icon={positionCenter} />
			<Icon icon={positionRight} />
		</div>
	);
}

function toolIconStyled( iconname, ...props ) {
	var toolIcons = toolIconsList( props );
	return(
		<Fragment>
			{ toolIcons}
		</Fragment>
	);
}

export { toolIconStyled };
