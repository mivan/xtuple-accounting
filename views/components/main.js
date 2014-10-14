/** @jsx React.DOM */
  'use strict';

  var React = require('react'),
    Backbone = require('backbone'),
    TrialBalanceTable = require('./TrialBalanceTable');

  Backbone.$ = window.$;
  Backbone.history.start();

  React.renderComponent(
    <TrialBalanceTable />,
    document.querySelector('Main')
  );
