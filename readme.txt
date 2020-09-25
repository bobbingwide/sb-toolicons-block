=== SB Toolicons block ===
Contributors:      bobbingwide
Tags:              block, toolicons
Requires at least: 5.5.1
Tested up to:      5.5.1
Stable tag:        0.0.0
Requires PHP:      7.2.0
License:           GPL-2.0-or-later
License URI:       https://www.gnu.org/licenses/gpl-2.0.html

Helps you to document tool icons for a block.

== Description ==
Use the Toolicons block ( oik-sb/toolicons ) to produce a list of toolicons for the block you're documenting.

== Installation ==

1. Upload the plugin files to the `/wp-content/plugins/sb-toolicons-block` directory, or install the plugin through the WordPress plugins screen directly.
1. Activate the plugin through the 'Plugins' screen in WordPress

OR

With WordPress 5.5 or Gutenberg 9.0.0 or higher, and the authority to install plugins:

1. In the block editor, open the block inserter.
1. Search for the block by typing 'toolicons'.
1. Click on the 'Add block' button for the SB Toolicons block.
1. The SB Toolicons block plugin will be installed and activated.
1. And the block will be inserted into your content.

== Frequently Asked Questions ==

= Do I need to build this block? =
No. The plugin is delivered with the production version of the block.
If you do wish to modify the code then you can find instructions in the src folder.

== Screenshots ==
1. tbc

== Upgrade Notice ==
= 0.0.0 =
Initial version copied from sb-children-block, which uses wp-scripts and oik-blocks
where the use of `import { iconname } from '@wordpress/icons';` broke the Image block in Gutenberg 9.0.0

== Changelog ==
= 0.0.0 =
* Added: Copied from sb-children-block
* Changed: Update from the toolicons block in oik-blocks
* Tested: With Gutenberg 9.0.0 ( built from source using node 12) and the delivered package.
* Tested: With WordPress 5.5.1
