/** @jsx React.DOM */
jest.dontMock('../public/js/app.built.js').TrialBalanceTable;

/*
  Test the TableHeader React Component
*/
describe('TableHeader Component Test', function () {
  var React = require('react/addons'),
    Table = require('../public/js/app.built.js').TrialBalanceTable,
    TestUtils = require('react-test-utils'),
    table;

  describe('Test rendering of TableHeader Component', function () {
    table = TestUtils.renderIntoDocument(TrialBalanceTable(null));

    it('Ensure component can be rendered', function () {
      expect(table).toBeDefined();
    });
  });
});
