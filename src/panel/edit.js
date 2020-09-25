import { InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';
import { useSelect } from '@wordpress/data';

const Edit = ( { attributes, setAttributes, clientId } ) => {
	const { hasChildBlocks } = useSelect(
		( select ) => {
			const { getBlockOrder } = select( 'core/block-editor' );
			return {
				hasChildBlocks: getBlockOrder( clientId ).length > 0,
			};
		},
		[ clientId ]
	);

	const onChangeLabel = ( label ) => setAttributes( { label } );
	return (
		<>
			<InspectorControls>
				<PanelBody title={ 'Tab Block Option' }>
					<TextControl
						value={ attributes.label }
						onChange={ onChangeLabel }
					/>
				</PanelBody>
			</InspectorControls>
			<div>
				<InnerBlocks
					renderAppender={
						hasChildBlocks
							? undefined
							: () => <InnerBlocks.ButtonBlockAppender />
					}
				/>
			</div>
		</>
	);
};

export default Edit;
