'use strict';
const ReactDOM = require('react-dom');
const expect = require('chai').expect;
const App = require('../src/app');
const React = require('react');
const TestUtils = require('react-addons-test-utils');

describe( 'app', function() {
  describe( 'rendering', function() {
    it('renders a form', function() {
      const app = TestUtils.renderIntoDocument(<App />);
      const form = ReactDOM.findDOMNode(app).querySelector('form');
      expect(form).to.have.length(1);
    });
  });
});
