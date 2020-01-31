import * as React from 'react';
import { BlockEditProps } from '@wordpress/blocks';
import { BlockAttributes } from './block';
import { InnerBlocks, InspectorControls, RichText } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';

const edit: React.FC<BlockEditProps<BlockAttributes>> = ( { attributes, setAttributes } ) => {
	const onChangeLabel = ( label: string ) => setAttributes( { label } );
	return (
		<>
			<InspectorControls>
				<PanelBody title={ 'Tab Block Option' } >
					<TextControl value={ attributes.label } onChange={ onChangeLabel } />
				</PanelBody>
			</InspectorControls>
			<div>
				<InnerBlocks />
			</div>
		</>
	);
};

export default edit;
