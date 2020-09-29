<?php
/**
 * Plugin Name:     SB Toolicons block
 * Plugin URI: 		https://www.oik-plugins.com/oik-plugins/sb-toolicons-block
 * Description:     Helps you to document tool icons for a block.
 * Version:         0.1.0
 * Author:          bobbingwide
 * Author URI: 		https://www.bobbingwide.com/about-bobbing-wide
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     sb-toolicons-block
 *
 * @package         sb-toolicons-block
 */

/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */
function sb_toolicons_block_block_init() {
	$dir = dirname( __FILE__ );

	$script_asset_path = "$dir/build/index.asset.php";
	if ( ! file_exists( $script_asset_path ) ) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "sb/toolicons-block" block first.'
		);
	}
	$index_js     = 'build/index.js';
	$script_asset = require( $script_asset_path );
	wp_register_script(
		'sb-toolicons-block-block-editor',
		plugins_url( $index_js, __FILE__ ),
		$script_asset['dependencies'],
		$script_asset['version']
	);

	/*
	 * Localise the script by loading the required strings for the build/index.js file
	 * from the locale specific .json file in the languages folder
	 */
	$ok = wp_set_script_translations( 'sb-toolicons-block-block-editor', 'sb-toolicons-block' , $dir .'/languages' );

	$editor_css = 'build/index.css';
	wp_register_style(
		'sb-toolicons-block-block-editor',
		plugins_url( $editor_css, __FILE__ ),
		array(),
		filemtime( "$dir/$editor_css" )
	);

	$style_css = 'build/style-index.css';
	wp_register_style(
		'sb-toolicons-block-block',
		plugins_url( $style_css, __FILE__ ),
		array(),
		filemtime( "$dir/$style_css" )
	);

	register_block_type( 'oik-sb/toolicons', array(
		'editor_script' => 'sb-toolicons-block-block-editor',
		'editor_style'  => 'sb-toolicons-block-block-editor',
		'style'         => 'sb-toolicons-block-block',
		//'render_callback'=>'sb_toolicons_block_dynamic_block',
		'attributes' => [
			'depth' => [ 'type' => 'string'],
			'className' => [ 'type' => 'string'],
		]
	) );
}
add_action( 'init', 'sb_toolicons_block_block_init' );
