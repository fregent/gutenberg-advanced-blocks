<?php
/**
 * Plugin Name:       Gutenberg Advanced Blocks
 * Plugin URI:        https://github.com/fregent/gutenberg-advanced-blocks
 * Description:       Une suite de blocs Gutenberg avancés et réutilisables.
 * Version:           1.0.0
 * Author:            Ton Nom
 * License:           MIT
 * License URI:       https://opensource.org/licenses/MIT
 * Text Domain:       gab
 * Requires at least: 6.4
 * Requires PHP:      8.1
 */

defined( 'ABSPATH' ) || exit;

define( 'GAB_VERSION', '1.0.0' );
define( 'GAB_PATH', plugin_dir_path( __FILE__ ) );
define( 'GAB_URL', plugin_dir_url( __FILE__ ) );

/**
 * Enregistre tous les blocs du plugin.
 */
function gab_register_blocks(): void {
    $blocks = [ 'hero', 'section', 'card', 'accordion', 'accordion-item', 'tabs' ];

    foreach ( $blocks as $block ) {
        $block_path = GAB_PATH . 'build/blocks/' . $block;
        if ( file_exists( $block_path . '/block.json' ) ) {
            register_block_type( $block_path );
        }
    }
}
add_action( 'init', 'gab_register_blocks' );