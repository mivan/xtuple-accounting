(function () {
	'use strict';

	var Backbone = require('backbone'),
		TrialBalanceModel = Backbone.Model.extend({
			defaults: {
				id: '123',
				account: '01-01-1210-01',
				period: '01/04/2014',
				beginningBalance: '200,000',
				endingBalance: '400,000',
				debits: '1000',
				credits: '4000'
			},
			idAttribute: 'id'
		});

	module.exports = TrialBalanceModel;

}());
