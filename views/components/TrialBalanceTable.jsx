/** @jsx React.DOM */

(function () {
  'use strict';

  var React = require('react'),
    Table = require('./Table.jsx'),
    TrialBalanceCollection = require('../../models/TrialBalanceCollection');

  var TrialBalanceTable = React.createClass({

    render: function () {
      var columns = ['id', 'account', 'period', 'beginningBalance', 'endingBalance', 'debits', 'credits'];

      return (
        <Table Collection={TrialBalanceCollection} cols={columns} title="Trial Balances"/>
      );
    }
  });

  module.exports = TrialBalanceTable;

}());
