/** @jsx React.DOM */
  'use strict';

  var React = require('react'),
    Table = require('xtuple-react-components').Table,
    TrialBalanceCollection = require('../../models/TrialBalanceCollection');

  var TrialBalanceTable = React.createClass({

    render: function () {
      // TODO: these columns could come from model
      var columns = ['id', 'account', 'period', 'beginningBalance', 'endingBalance', 'debits', 'credits'];
      return (
        <Table Collection={TrialBalanceCollection} cols={columns} title="Trial Balances"/>
      );
    }
  });

  module.exports = TrialBalanceTable;
