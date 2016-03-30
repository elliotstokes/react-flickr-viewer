'use strict';

jest.unmock('../app/components/utils');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import {CenteredImage} from '../app/components/utils';

describe('CenteredImage', () => {

  it('should render the CenteredImage', () => {

  	const image = 'http://path.to/image.jpg';
  	const alt = 'alttext';

  	var renderer = TestUtils.createRenderer();
    renderer.render(
       <CenteredImage image={image} alt={alt}/>
    );
    const result = renderer.getRenderOutput();

    expect(result.type).toBe('div');
    expect(result.props.children.type).toBe('img');
    expect(result.props.children.props.src).toBe(image);
    expect(result.props.children.props.alt).toBe(alt);
  });
});