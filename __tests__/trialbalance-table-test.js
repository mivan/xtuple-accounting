/** @jsx React.DOM */
jest.dontMock('../public/js/app.built.js').TrialBalanceTable;

/*
  Test the TableHeader React Component
*/
describe('TrialBalance Table Component Test', function () {
  var React = require('react/addons'),
    TestUtils = require('react-test-utils');

  describe('Test rendering of TableHeader Component', function () {

    xit('Ensure component can be rendered', function () {
      var TrialBalanceTable = require('../views/components/TrialBalanceTable'),
        table = TestUtils.renderIntoDocument(TrialBalanceTable(null));
      expect(table).toBeDefined();
    });
  });
});
