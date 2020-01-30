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

namespace  HAMWORKS\Tab_Group_Block;

defined( 'ABSPATH' ) || exit;

function init() {
	$asset_file = include( dirname( __FILE__ ) . '/build/index.asset.php' );
	wp_register_script(
		'tab-group-block',
		plugins_url( 'build/index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version']
	);
	wp_register_style( 'tab-group-block', plugins_url( 'build/index.css', __FILE__ ) );
	register_block_type( 'tab-group-block/group', array(
		'editor_script' => 'tab-group-block',
		'editor_style'  => 'tab-group-block',
		'style'  => 'tab-group-block',
	) );
	register_block_type( 'tab-group-block/panel', array(
		'editor_script' => 'tab-group-block',
		'editor_style'  => 'tab-group-block',
		'style'  => 'tab-group-block',
	) );
}

add_action( 'init', function () {
	init();
} );
