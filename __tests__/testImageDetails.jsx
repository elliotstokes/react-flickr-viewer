'use strict';

jest.unmock('../app/components/imageView');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import {ImageDetails} from '../app/components/imageView';

describe('Image Details', () => {

  it('should render the image details', () => {
    const details = {
      title: "title",
      author: "nobody@nobody.com (username)"
    };

    const imageDetails = TestUtils.renderIntoDocument(
       <ImageDetails details={details}/>
    );

    const imageDetailsNode = ReactDOM.findDOMNode(imageDetails);
    const title = TestUtils.findRenderedDOMComponentWithTag(imageDetails, 'h2');
    expect(title.textContent).toEqual('title\u00A0by\u00A0username');
    
  });

  it('should render the image details with no title', () => {
    const details = {
      title: "",
      author: "nobody@nobody.com (username)"
    };

    const imageDetails = TestUtils.renderIntoDocument(
       <ImageDetails details={details}/>
    );

    const imageDetailsNode = ReactDOM.findDOMNode(imageDetails);
    const title = TestUtils.findRenderedDOMComponentWithTag(imageDetails, 'h2');
    expect(title.textContent).toEqual('Unknown\u00A0by\u00A0username');
    
  });

});