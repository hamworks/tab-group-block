import { InnerBlocks } from '@wordpress/block-editor';

const save = () => {
	return (
		<div>
			<InnerBlocks.Content />
		</div>
	);
};

export default save;
