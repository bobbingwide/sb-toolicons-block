/**
 * (C) Copyright Bobbing Wide 2020
 *
 * List of the icons that are used in the toolbars.
 * with the tooltip as the label
 * and a short description to explain the purpose of the tool.
 *
 */

import { __ } from '@wordpress/i18n';
import * as icon from '@wordpress/icons';


const alignCenter =
		{ icon: icon.alignCenter,
			label: __( 'Align text center'),
			description: __( 'Align content centrally'),
			key: 'alignCenter'
		};
const alignLeft =
		{ icon: icon.alignLeft,
			label: __( 'Align text left'),
			description: __('Use the Align text left drop-down from the toolbar to align text to the left.' ),
			key: 'alignLeft'
		};

const alignRight =
	{ icon: icon.alignRight,
	label: __('Align text right'),
		description: __( 'Use the Align text right drop-down from the toolbar to align text to the right.' ),
		key: 'alignRight'
	};

const chevronDown =
	{
		icon: icon.chevronDown,
		label: __('More rich text controls'),
		description: __('View more rich text controls.'),
		key: 'chevronDown'
	};


const formatBold =
	{
		icon: icon.formatBold,
		label: __('Bold'),
		description: __('Use Bold to mark selected text as bold'),
		key: 'formatBold'
	};

const formatItalic =
	{
		icon: icon.formatItalic,
		label: __('Italic'),
		description: __('Use Italic to mark selected text as italic'),
		key: 'formatItalic'
	};

/* @TODO This should be the h2 icon
  There should be 6 heading icons.
 */

const heading =
	{
		icon: icon.heading,  /* @TODO This should be the h2 icon */
		label: __('Heading'),
		description: __('Choose the heading level.'),
		key: 'heading'
	};

const link =
	{
		icon: icon.link,
		label: __('Link'),
		description: __('Use Link to create a hyperlink to your highlighted text.'),
		key: 'link'
	};





export { alignCenter, alignLeft, alignRight, chevronDown, formatBold, formatItalic, heading, link };
