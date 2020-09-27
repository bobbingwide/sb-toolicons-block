/**
 * List of the icons that implement toolgroups in the toolbar
 *
 * with the tooltip as the label
 * and a short description to explain the purpose of the tool.
 *
 */

import { __ } from '@wordpress/i18n';
import { alignLeft } from '@wordpress/icons';
import * as toolicon from './tooliconslist';

const alignmentToolbar =
	{
		icon: alignLeft,
		label: __( 'Change text alignment' ),
		description: __( 'Use Change text alignment to choose how to align the text.'),
		tools: [ toolicon.alignLeft, toolicon.alignCenter, toolicon.alignRight],
		key: 'alignGroup'
	};

/*

const headingGroup =
	{
		icon: toolicon.heading2,
		label: __( 'Change heading level'),
		description: __( 'Use Change heading level to choose the heading level.'),
		tools: [ toolicon.heading1, toolicon.heading2, toolicon.heading3],
		key: 'headingGroup'
	}

 */

export { alignmentToolbar };
