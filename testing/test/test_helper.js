/*
    Set up testing environment to run like a browser in the command line
    Need to build 'renderComponent' to render given react class
    Build helper to simulate event
    Set up chai-jquery
*/

import jsdom from 'jsdom';
import _$ from 'jquery';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import chai, { expect } from 'chai';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers';
import chaiJquery from 'chai-jquery';

// Environment
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>'); // DOM
global.window = global.document.defaultView; // Window
global.navigator = {userAgent: 'node.js'}; // Navigator
const $ = _$(global.window); //jQuery

// Build renderComponent
function renderComponent(ComponentClass, props, state) {
    const componentInstance = TestUtils.renderIntoDocument(
        <Provider store={createStore(reducers, state)}>
            <ComponentClass {...props} />
        </Provider>
    );

    return $(ReactDOM.findDOMNode(componentInstance)); // produces HTML
}

// Helper to simulate events
$.fn.simulate = function(eventName, value) {
    if (value) {
        this.val(value);
    }

    TestUtils.Simulate[eventName](this[0]);
}

// Set up chai-jquery
chaiJquery(chai, chai.util, $);

export { renderComponent, expect };
