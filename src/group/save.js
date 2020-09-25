import { InnerBlocks } from '@wordpress/block-editor';

const Save = ( { attributes } ) => {
	return (
		<div>
			<nav>
				<div className="tab-group-block__tabs" role="tablist">
					{ attributes.tabs.map( ( { label, anchor }, i ) => (
						<a
							href={ `#${ anchor }` }
							data-target={ `${ anchor }` }
							className={ `tab-group-block__tab` }
							key={ i }
						>
							{ label }
						</a>
					) ) }
				</div>
			</nav>
			<div className="tab-group-block__contents">
				<InnerBlocks.Content />
			</div>
		</div>
	);
};

export default Save;
