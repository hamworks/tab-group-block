import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import edit from './edit';
import save from './save';

import metadata from './block.json';

registerBlockType( 'tab-group-block/group', {
	attributes: metadata.attributes,
	title: __( 'Tab Group', 'tab-group-block' ),
	icon: 'calendar',
	category: 'layout',
	edit,
	save,
} );
