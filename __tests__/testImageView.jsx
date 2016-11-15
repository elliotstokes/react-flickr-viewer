'use strict';

jest.unmock('../app/components/imageView');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import {ImageView} from '../app/components/imageView';

describe('Image View', () => {

  it('should render the image view', () => {
    const details = {
      title: "title",
      author: "nobody@nobody.com (username)",
      media: {m: 'http://link.to/image.jpg'},
      tags: '1 2 3 4'
    };

    var renderer = TestUtils.createRenderer();
    renderer.render(
       <ImageView details={details}/>
    );
    const result = renderer.getRenderOutput();

    expect(result.type).toBe('section');
    expect(result.props.children[0].props).toEqual({ src: 'http://link.to/image.jpg', alt: 'title' });
    expect(result.props.children[1].props.details).toEqual(details);
  });

  it ('should not render the tags container when none are provided', () => {
  	const details = {
      title: "title",
      author: "nobody@nobody.com (username)",
      media: {m: 'http://link.to/image.jpg'},
      tags: ''
    };

    var renderer = TestUtils.createRenderer();
    renderer.render(
       <ImageView details={details}/>
    );
    const result = renderer.getRenderOutput();
   	expect(result.props.children[2]).toBe(undefined);
  });

  it ('should change colour when mouseover', () => {
    const details = {
      title: "title",
      author: "nobody@nobody.com (username)",
      media: {m: 'http://link.to/image.jpg'},
      tags: ''
    };

    var renderer = TestUtils.createRenderer();
    renderer.render(
       <ImageView details={details}/>
    );
    const resultBefore = renderer.getRenderOutput();
    expect(resultBefore.props.style.backgroundColor).toBe('#fff');

    resultBefore.props.onMouseOver({ preventDefault: () => {} });

    const resultAfter = renderer.getRenderOutput();
    expect(resultAfter.props.style.backgroundColor).toBe('#E6E6E6');

  });


});
