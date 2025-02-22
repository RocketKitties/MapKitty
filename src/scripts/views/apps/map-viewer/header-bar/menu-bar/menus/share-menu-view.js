/******************************************************************************\
|                                                                              |
|                               share-menu-view.js                             |
|                                                                              |
|******************************************************************************|
|                                                                              |
|        This is a view for displaying share dropdown menus.                   |
|                                                                              |
|        Author(s): Abe Megahed                                                |
|                                                                              |
|        This file is subject to the terms and conditions defined in           |
|        'LICENSE.md', which is part of this source code distribution.         |
|                                                                              |
|******************************************************************************|
|        Copyright (C) 2016 - 2025, Megahed Labs LLC, www.sharedigm.com        |
\******************************************************************************/

import ShareMenuView from '../../../../../../views/apps/common/header-bar/menu-bar/menus/share-menu-view.js';

export default ShareMenuView.extend({

	//
	// attributes
	//

	events: {
		'click .share-by-invitation': 'onClickShareByInvitation',
		'click .share-by-topic': 'onClickShareByTopic',
		'click .share-by-message': 'onClickShareByMessage',
		'click .share-by-link': 'onClickShareByLink',
		'click .share-by-email': 'onClickShareByEmail'
	},

	//
	// querying methods
	//

	enabled: function() {
		let hasSelectedItems = this.parent.app.hasSelectedItems();
		let hasSelectedPhotos = this.parent.app.hasSelectedLayerItems('photos');
		let hasSelectedVideos = this.parent.app.hasSelectedLayerItems('videos');
		let hasSelected = hasSelectedItems || hasSelectedPhotos || hasSelectedVideos;
		let isSaved = this.parent.app.hasActiveModel() && this.parent.app.getActiveModel().isSaved();
		let hasShareable = hasSelected || isSaved;

		return {
			'share-by-index': hasShareable,
			'share-by-invitation': hasShareable,
			'share-by-topic': hasShareable,
			'share-by-message': hasShareable,

			// share with anyone
			//
			'share-by-link': hasShareable,
			'share-by-email': hasShareable		
		};
	},

	//
	// mouse event handling methods
	//

	onClickShareByInvitation: function() {
		this.parent.app.shareWithConnections();
	},

	onClickShareByTopic: function() {
		this.parent.app.shareByTopic();
	},

	onClickShareByMessage: function() {
		this.parent.app.shareByMessage();
	},

	onClickShareByLink: function() {
		this.parent.app.shareByLink();
	},

	onClickShareByEmail: function() {
		this.parent.app.shareByEmail();
	}
});