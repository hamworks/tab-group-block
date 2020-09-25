import { createBlock } from '@wordpress/blocks';
import { useDispatch, useSelect } from '@wordpress/data';
import { InnerBlocks } from '@wordpress/block-editor';
import { Button, ButtonGroup, IconButton } from '@wordpress/components';
import { get, isEqual, last } from 'lodash';

const PANEL = 'tab-group-block/panel';

const Edit = ( { attributes, setAttributes, clientId } ) => {
	const innerBlocks = useSelect( ( select ) =>
		select( 'core/block-editor' ).getBlocks( clientId )
	);
	const tabs = innerBlocks.map( ( { attributes: { label, anchor } } ) => ( {
		label,
		anchor,
	} ) );
	//todo fix me.
	if ( ! isEqual( attributes.tabs, tabs ) ) {
		setAttributes( { tabs } );
	}

	const selectedBlockClientId = useSelect( ( select ) =>
		select( 'core/block-editor' ).getSelectedBlockClientId()
	);
	const { replaceInnerBlocks, removeBlock, selectBlock } = useDispatch(
		'core/block-editor'
	);
	return (
		<>
			<div className="tab-group-block">
				<nav>
					<div className="tab-group-block__tabs" role="tablist">
						{ innerBlocks.map( ( innerBlock, i ) => (
							<div
								className={ `tab-group-block__tab ${
									selectedBlockClientId ===
									innerBlock.clientId
										? 'tab-group-block__tab--selected'
										: ''
								}` }
								key={ i }
							>
								<a
									href=""
									onClick={ ( e ) => {
										e.preventDefault();
										selectBlock( innerBlock.clientId );
									} }
								>
									{ innerBlock.attributes.label }
								</a>
								<IconButton icon={ 'trash' } />
							</div>
						) ) }
					</div>
				</nav>
				<div className="tab-group-block__contents">
					<InnerBlocks
						allowedBlocks={ [ PANEL ] }
						template={ [ [ PANEL ] ] }
					/>
				</div>
			</div>

			<ButtonGroup>
				<Button
					isDefault
					onClick={ () => {
						replaceInnerBlocks( clientId, [
							...innerBlocks,
							createBlock( PANEL, {
								label: 'Tab',
								anchor: 'tab',
							} ),
						] );
					} }
				>
					Add Tab
				</Button>
				{ innerBlocks.length > 1 ? (
					<Button
						isDefault
						onClick={ () => {
							const targetClientId = get(
								last( innerBlocks ),
								'clientId',
								''
							);
							removeBlock( targetClientId );
						} }
					>
						Remove Tab
					</Button>
				) : null }
			</ButtonGroup>
		</>
	);
};

export default Edit;
