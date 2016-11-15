// @flow

import React, {Component} from 'react';
import {Navigation} from '../components/utils';

const styles = {
    mainContainer: {
      'margin': '0 auto',
      'maxWidth': '60em'
    },
    headerContainer: {
      'textAlign': 'center'
    },
    header: {
      'fontSize': '3.5em',
      'color': '#33cbd0',
      'textShadow': '#00989D 1px 1px, #00989D 2px 2px, #00989D 3px 3px, #00989D 4px 4px, #00989D 5px 5px, #00989D 6px 6px, #00989D 7px 7px'
    }
}

type Props = {
  children: Element<any>
}

export const MainContainer = ({ children } : Props) =>
  <div style={styles.mainContainer}>
    <header style={styles.headerContainer}>
      <h1 style={styles.header}>Flickr Viewer</h1>
      <Navigation/>
    </header>
    { children }
  </div>;
