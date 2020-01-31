import * as React from 'react';
import { BlockSaveProps } from '@wordpress/blocks';
import { BlockAttributes } from './block';
import { InnerBlocks } from '@wordpress/block-editor';

const Save: React.FC<BlockSaveProps<BlockAttributes>> = ( { attributes } ) => {
	return (
		<div>
			<nav>
				<div className="tab-group-block__tabs" role="tablist">
					{ attributes.tabs.map( ( { label, anchor }, i ) => (
						<a
							href={ `#${ anchor }` }
							className={ `tab-group-block__tab` }
							key={ i }
						>
							{ label }
						</a>
					) ) }
				</div>
			</nav>
			<InnerBlocks.Content />
		</div>
	);
};

export default Save;

