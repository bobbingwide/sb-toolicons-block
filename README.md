# SB Toolicons block 
![banner](https://raw.githubusercontent.com/bobbingwide/sb-toolicons-block/master/assets/sb-toolicons-block-banner-772x250.jpg)
* Contributors:      bobbingwide
* Tags:              block, toolicons, toolbar, icons
* Requires at least: 5.5.1
* Tested up to:      5.5.1
* Stable tag:        0.1.0
* Requires PHP:      7.2.0
* License:           GPL-2.0-or-later
* License URI:       https://www.gnu.org/licenses/gpl-2.0.html

Helps you to document tool icons for a block.

## Description 
Use the Toolicons block ( oik-sb/toolicons ) to produce a list of toolicons for the block you're documenting.

## Installation 

1. Upload the plugin files to the `/wp-content/plugins/sb-toolicons-block` directory, or install the plugin through the WordPress plugins screen directly.
1. Activate the plugin through the 'Plugins' screen in WordPress

OR ( not yet available as the plugin is not in the Block Directory )

With WordPress 5.5 or Gutenberg 9.0.0 or higher, and the authority to install plugins:

1. In the block editor, open the block inserter.
1. Search for the block by typing 'toolicons'.
1. Click on the 'Add block' button for the SB Toolicons block.
1. The SB Toolicons block plugin will be installed and activated.
1. And the block will be inserted into your content.

## Frequently Asked Questions 

# Do I need to build this block? 
No. The plugin is delivered with the production version of the block.
If you do wish to modify the code then you can find instructions in the src folder.

## Screenshots 
1. tbc

## Upgrade Notice 
# 0.1.0 
First version that displays toolbars and their icons on the front-end for 8 of 131 core blocks.

# 0.0.0 
Initial version copied from sb-children-block, which uses wp-scripts and oik-blocks
where the use of `import { iconname } from '@wordpress/icons';` broke the Image block in Gutenberg 9.0.0

## Changelog 
# 0.1.0 
* Changed: Choose from 8 block types, https://github.com/bobbingwide/sb-toolicons-block/issues/1
* Changed: Option to Show More Options
* Changed: First attempt at internationalization and localization
* Changed: Supports various toolgroups
* Tested: With Gutenberg 9.0.0
* Tested: With WordPress 5.5.1
* Tested: With PHP 7.4


# 0.0.0 
* Added: Copied from sb-children-block
* Changed: Update from the toolicons block in oik-blocks
* Tested: With Gutenberg 9.0.0 ( built from source using node 12) and the delivered package.
* Tested: With WordPress 5.5.1
