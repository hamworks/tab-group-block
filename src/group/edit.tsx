import * as React from 'react';
import { BlockEditProps, createBlock } from '@wordpress/blocks';
import { useSelect, useDispatch } from '@wordpress/data';
import { BlockAttributes } from './block';
import { InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { Button, ButtonGroup, PanelBody } from '@wordpress/components';
const PANEL = 'tab-group-block/panel';

const Edit: React.FC<BlockEditProps<BlockAttributes>> = ( { attributes, setAttributes, clientId } ) => {
	const innerBlocks = useSelect( ( select ) => {
		return select( 'core/block-editor' ).getBlocks( clientId );
	} );
	const { replaceInnerBlocks } = useDispatch( 'core/block-editor' );
	return (
		<>
			<InspectorControls>
				<PanelBody title={ 'Price Table Option' }>
					<p>Options.</p>
				</PanelBody>
			</InspectorControls>
			<div>
				<InnerBlocks
					allowedBlocks={ [ PANEL ] }
					template={ [ [ PANEL ] ] }
				/>
			</div>

			<ButtonGroup>
				<Button isDefault onClick={ (): void => {
					replaceInnerBlocks( clientId, [ ...innerBlocks, createBlock( PANEL ) ] );
				} }>Add Tab</Button>
			</ButtonGroup>

		</>
	);
};

export default Edit;
