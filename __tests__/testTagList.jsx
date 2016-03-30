'use strict';

jest.unmock('../app/components/tags');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import {TagList} from '../app/components/tags';

describe('Tag List', () => {

  it('should render the tags list', () => {
   const tags = "tag1 tag2 tag3 tag4";

   var renderer = TestUtils.createRenderer();
    renderer.render(
       <TagList tags={tags}/>
    );
    const result = renderer.getRenderOutput();
    expect(result.type).toBe('ul');
    expect(result.props.children.length).toBe(4);
    expect(result.props.children[0].props.children).toBe('tag1');
    expect(result.props.children[1].props.children).toBe('tag2');
    expect(result.props.children[2].props.children).toBe('tag3');
    expect(result.props.children[3].props.children).toBe('tag4');
    
  });

  it ('should make some common replacements to the tag names', () => {
  	const tags = ":copyright:me uploaded:by=frank";

   var renderer = TestUtils.createRenderer();
    renderer.render(
       <TagList tags={tags}/>
    );
    const result = renderer.getRenderOutput();
    expect(result.type).toBe('ul');

    expect(result.props.children.length).toBe(2);
    expect(result.props.children[0].props.children).toBe('©me');
    expect(result.props.children[1].props.children).toBe('↑frank');
  });

});