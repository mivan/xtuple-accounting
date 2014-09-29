(function () {
	'use strict';

	var Backbone = require('backbone'),
		TrialBalanceModel = require('./TrialBalanceModel'),
		TrialBalanceCollection = Backbone.Collection.extend({
			model: TrialBalanceModel,
			url : 'balances'
		});

	module.exports = TrialBalanceCollection;

}());
