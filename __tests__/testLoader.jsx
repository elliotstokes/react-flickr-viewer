'use strict';

jest.unmock('../app/components/utils');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import {Loader} from '../app/components/utils';

describe('Loader', () => {

  it('should render the Loader', () => {

   var renderer = TestUtils.createRenderer();
    renderer.render(
       <Loader/>
    );
    const result = renderer.getRenderOutput();

    expect (result.type).toBe('div');
    expect (result.props.className).toBe('loader');
  });
});