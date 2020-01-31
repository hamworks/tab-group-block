import * as React from 'react';
import { BlockSaveProps } from '@wordpress/blocks';
import { BlockAttributes } from './block';
import { InnerBlocks } from '@wordpress/block-editor';

const save: React.FC<BlockSaveProps<BlockAttributes>> = ( { attributes } ) => {
	return (
		<div>
			<InnerBlocks.Content />
		</div>
	);
};

export default save;

