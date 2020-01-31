import * as React from 'react';
import { BlockEditProps, createBlock } from '@wordpress/blocks';
import { useDispatch, useSelect } from '@wordpress/data';
import { BlockAttributes } from './block';
import { InnerBlocks } from '@wordpress/block-editor';
import { Button, ButtonGroup } from '@wordpress/components';
import { get, last } from 'lodash';

const PANEL = 'tab-group-block/panel';

const Edit: React.FC<BlockEditProps<BlockAttributes>> = ( { attributes, setAttributes, clientId } ) => {
	const innerBlocks = useSelect( ( select ) => select( 'core/block-editor' ).getBlocks( clientId ) );
	const selectedBlockClientId = useSelect( ( select ) => select( 'core/block-editor' ).getSelectedBlockClientId() );
	const { replaceInnerBlocks, removeBlock, selectBlock } = useDispatch( 'core/block-editor' );
	return (
		<>
			<div className="tab-group-block">
				<nav>
					<div className="tab-group-block__tabs" role="tablist">
						{ innerBlocks.map( ( innerBlock, i ) => (
							<a
								href={ innerBlock.attributes.anchor }
								className={ `tab-group-block__tab ${ selectedBlockClientId === innerBlock.clientId ? 'tab-group-block__tab--selected' : '' }` }
								key={ i }
								onClick={ () => selectBlock( innerBlock.clientId ) }
							>
								{ innerBlock.attributes.label }
							</a>
						) ) }
					</div>
				</nav>

				<InnerBlocks
					allowedBlocks={ [ PANEL ] }
					template={ [ [ PANEL ] ] }
				/>
			</div>

			<ButtonGroup>
				<Button isDefault onClick={ (): void => {
					replaceInnerBlocks( clientId, [ ...innerBlocks, createBlock( PANEL ) ] );
				} }>Add Tab</Button>
				{
					innerBlocks.length > 1 ?
						<Button isDefault onClick={ (): void => {
							const targetClientId: string = get( last( innerBlocks ), 'clientId', '' );
							removeBlock( targetClientId );
						} }>Remove Tab</Button> :
						null
				}

			</ButtonGroup>

		</>
	);
};

export default Edit;
