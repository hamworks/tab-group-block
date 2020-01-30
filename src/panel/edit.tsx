import * as React from 'react';
import { BlockEditProps } from '@wordpress/blocks';
import { BlockAttributes } from './block';
import { InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { Button, ButtonGroup, PanelBody } from '@wordpress/components';

const edit: React.FC<BlockEditProps<BlockAttributes>> = ( { attributes, setAttributes } ) => {
	return (
		<>
			<InspectorControls>
				<PanelBody title={ 'Price Table Option' } >
					<p>Options.</p>
				</PanelBody>
			</InspectorControls>
			<div>
				<InnerBlocks />
			</div>

		</>
	);
};

export default edit;
