<?php
/**
 * Plugin Name:     Tab_Group_Block
 * Plugin URI:      https://github.com/team-hamworks/tab-group-block
 * Description:     tab-group-block.
 * Author:          hamworks
 * Author URI:      https://ham.works
 * Text Domain:     tab-group-block
 * Domain Path:     /languages
 * Version: 0.0.6
 * @package         Tab_Group_Block
 */

namespace HAMWORKS\Tab_Group_Block;

defined( 'ABSPATH' ) || exit;

function init() {
	register_block_type_from_metadata( __DIR__ . '/src/group/block.json' );
	register_block_type_from_metadata( __DIR__ . '/src/panel/block.json' );

}

add_action( 'init', function () {
	init();
} );
