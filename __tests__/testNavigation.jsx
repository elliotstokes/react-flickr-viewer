'use strict';

jest.unmock('../app/components/utils');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import {Navigation} from '../app/components/utils';

describe('Navigation', () => {

  it('should render the Navigation Bar', () => {

    var renderer = TestUtils.createRenderer();
    renderer.render(
    	<Navigation/>
    );
    const result = renderer.getRenderOutput();

    expect (result.type).toBe('nav');
    expect(result.props.children.props.children.length).toBe(2);
    expect(result.props.children.props.children[0].props.children.type.displayName).toBe('IndexLink');
    expect(result.props.children.props.children[1].props.children.type.displayName).toBe('Link');
  });

});