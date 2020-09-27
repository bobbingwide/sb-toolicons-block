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

const heading =
	{
		icon: icon.heading,
		label: __('Heading'),
		description: __('Choose the heading level.'),
		key: heading
	};


export { alignCenter, alignLeft, alignRight, heading };
