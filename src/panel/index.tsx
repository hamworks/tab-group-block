import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { BlockAttributes } from './block';
import edit from './edit';
import save from './save';

registerBlockType<BlockAttributes>( 'tab-group-block/panel', {
	attributes: {
		label: {
			type: 'string',
			default: 'tab',
		},
	},
	parent: [ 'tab-group-block/group' ],
	title: __( 'Tab Panel', 'tab-group-block' ),
	icon: 'calendar',
	category: 'layout',
	supports: {
		inserter: false,
		reusable: false,
		html: false,
		anchor: true,
	},
	edit,
	save,
} );
