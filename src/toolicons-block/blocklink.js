/**
 * Block link logic copied and cobbled from oik-blocks blocks/oik-blocklist/blocklist.js
 * @param block
 * @returns {string}
 */

//const { select } = wp.data;

/* Returns homeUrl with trailing slash.

 */
function getHomeUrl() {
	var windowLocationHref = window.location.href;
	var originPathName = window.location.origin + window.location.pathname;
	var homeUrl = originPathName.replace( 'wp-admin/post.php', '');
	return homeUrl;
}

function getPrefixOld() {
	var prefix = null;
	var siteurl = select('core/editor').getPermalinkParts();

	if ( siteurl !== null ) {

		console.log(siteurl);
		var postType = select( 'core/editor').getCurrentPostType();
		console.log( postType );

		prefix = siteurl.prefix.replace( postType, 'block');
	} else {
		console.log( "SiteURL's null");
	}
	return prefix;
}

export function getBlockLink( block, linkToWordPressOrg=false ) {
	//console.log( 'getBlockLink');
	//console.log( block);
	var blockLink = null;
	if ( linkToWordPressOrg) {
		blockLink = WordPressOrgBlockLink( block );
	} else {
		var blockTitle = block.title.replace( / /g, '-' );
		blockTitle = blockTitle.toLowerCase();
		var blockName = block.name.replace( '/', '-' );
		var prefix = getHomeUrl() + 'block/';
		blockLink = `${prefix}${blockTitle}-${blockName}`;
	}
	return blockLink;
}

/**
 *
 *
 * @param block
 * @returns {string}
 * @constructor
 */
function WordPressOrgBlockLink( block ) {
	var prefix = 'https://wordpress.org/support/article/';
	// @TODO We need to cater for embeds as well
	// It's `core-embed` up to WordPress 5.5.x and Gutenberg 8.x
	var blockName = block.name.replace( 'core/', '');
	blockname =	blockname.replace( '/', '-' );
	blockname = blockname.
	return( prefix + blockName);
}
