// @flow

import React, {Component} from 'react';

const styles = {
  tagList: {
    'listStyle' : 'none',
    'padding' : 0,
    'margin' : 0
  },
  tagItem: {
    'backgroundColor': '#cfd6d9',
    'borderRadius' : '4px',
    'padding': '2px 4px',
    'margin' : '1px 1px',
    'listStyle': 'none',
    'display': 'inline-block',
    'textOverflow': 'ellipsis',
    'whiteSpace': 'nowrap',
    'maxWidth': '100%',
    'overflow': 'hidden',
    'fontSize': '0.7em'
  }
};

/**
 * Tag list Component
 * @description Renders a list of tags passed in as a space delimeted list
 **/
export class TagList extends Component {

  generateTagTitle(tag: string) {
    return tag
      .replace(/:copyright:/i, '\u00A9')
      .replace(/uploaded:by=/i, '\u2191');
  }

  render() {
    return (
      <ul style={styles.tagList}>
         {this.props.tags.split(' ').map((tag, index) => <li key={index} style={styles.tagItem}>{this.generateTagTitle(tag)}</li> )}
      </ul>
    );
  }
}
