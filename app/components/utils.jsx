import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router';

var styles = {
  centeredImageContainer: {
    'display': 'flex',
    'alignItems': 'center',
    'justifyContent': 'center',
    'height':'150px'
  },
  centeredImage: {
    'maxWidth': '100%',
    'maxHeight':'100%',
    'width':'auto',
    'height': 'auto',
    'display': 'block'
  },
  navContainer: {
    'textAlign': 'right'
  },
  navLinks: {
    'listStyle' : 'none',
    'marginLeft': 'auto',
    'marginRight': 0,
    'backgroundColor': '#fff',
    'display' : 'inline-block',
    'padding': '1.1em'
  },
  navLinkContainer: {
    'display': 'inline-block'
  },
  navLink: {
    "padding": '0.5em 1em',
    "textDecoration": 'none',
    "color": '#fff',
    "backgroundColor" : '#33cbd0',
    "border": '1px solid #eee',
    'borderRadius': '4px',
    'fontSize' : '1.2em',
    'margin' : '0.5em'
  },
  activeNavLink: {
    "color": '#33cbd0',
    "backgroundColor" : '#fff'
  }
}

/**
 * Loader
 * @description shows a Loader
 **/
export class Loader extends Component {
  render() {
    return (
      <div className="loader"/>
    );
  }
}

/**
 * Renders an image
 * @description Renders an image ensuring that it remains vertically and horiontally centered
 **/
export class CenteredImage extends Component {
  render() {
    return (
      <div style={styles.centeredImageContainer}>
        <img style={styles.centeredImage} src={this.props.image} alt={this.props.alt}/>
      </div>
    );
  }
}

/**
 * Navigation for spa pages
 **/
export class Navigation extends Component {
  render() {
 		return (
 			<nav style={styles.navContainer}>
        <ul style={styles.navLinks}>
            <li style={styles.navLinkContainer}>
              <IndexLink style={styles.navLink} activeStyle={styles.activeNavLink} to="/">Viewer</IndexLink>
            </li>

            <li style={styles.navLinkContainer}>
              <Link style={styles.navLink} activeStyle={styles.activeNavLink} to="/about">About</Link>
            </li>
        </ul>
      </nav>
 		);
 	}
}