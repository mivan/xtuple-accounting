(function () {
	'use strict';

	var Backbone = require('backbone'),
		url = require('url'),
		org = url.parse(window.location.href).pathname.split('/')[1];
	Backbone.$ = window.$;

	var	TrialBalanceModel = require('./TrialBalanceModel');
	var TrialBalanceCollection = Backbone.Collection.extend({
			model: TrialBalanceModel,
			url: '/' + org + '/browser-api/v1/resources/TrialBalance/',
			parse : function	(resp)	{
        return resp.data.data;
    	}
		});

	module.exports = TrialBalanceCollection;

}());
