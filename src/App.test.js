import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

jest.dontMock('./App.js');

describe('Testing Navbar in App', function () {
  it('should contain a Navbar', function () {
    let React = require('react/addons');
    let App = require('./App');
    let TestUtils = React.addons.TestUtils;

    // Render a Navbar into the document
    TestUtils.renderIntoDocument(
      <App />
    );

    expect(require('./components/Navbar').mock.calls.length).toBe(1);
  });
});

//test results: should contain a number? require('react/addons')
//needs fix

//learning how to test if child components exist in the app
// code structure from https://github.com/nim23/StackOverflow-Jest-React-Child-Test/blob/master/__tests__/DesignerPageWithMock-tests.js