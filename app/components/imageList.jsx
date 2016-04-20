import React, {Component} from 'react';
import {Loader} from './utils';
import {ImageView} from './imageView';

const styles = {
  imageList: {
    'boxSizing': 'border-box',
    'display': 'flex',
    'flexWrap': 'wrap',
    'padding' : 0,
    'margin' : 0,
    'listStyle': 'none'
  },
  imageListItem: {
    'boxSizing': 'border-box',
    'display': 'flex',
    'padding': '0.5em 0.5em 1em 0.5em'
  }
}

/**
 * Image List with Loader
 * @description will display a loader when loading and a list of images when not
 **/
export const ImageListLoader = (props) =>
  props.isLoading ? <Loader/> : <ImageList images={props.images}/>;

/**
 * Image List Class
 * @description Maintains a list of ImageViews
 * @class
 **/
export const ImageList = (props) =>
  <ul role="nav" style={styles.imageList}>
    {props.images.map((flickrImg, index) => <li className="list-item" style={styles.imageListItem} key={index}><ImageView  details={flickrImg}/></li>)}
  </ul>;