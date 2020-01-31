import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { BlockAttributes } from './block';
import edit from './edit';
import save from './save';

registerBlockType<BlockAttributes>( 'tab-group-block/group', {
	attributes: {
		tabs: {
			type: 'array',
			default: [
				{ label: 'new' },
			],
		},
	},
	title: __( 'Tab Group', 'tab-group-block' ),
	icon: 'calendar',
	category: 'layout',
	edit,
	save,
} );
