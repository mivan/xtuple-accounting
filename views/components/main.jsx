/** @jsx React.DOM */

(function () {
	'use strict';

	var React = require('react'),
    Backbone = require('backbone'),
    TrialBalanceTable = require('./TrialBalanceTable.jsx');

	Backbone.$ = window.$;
	Backbone.history.start();

	React.renderComponent(
		<TrialBalanceTable />,
		document.querySelector('Main')
	);

}());
