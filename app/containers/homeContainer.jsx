// @flow

import React, { Component } from 'react';
import { ImageListLoader } from '../components/imageList';
import flickrApi from '../helpers/flickrApi';
import type { Detail } from '../helpers/flickrApi';

const styles = {
  refreshButton : {
     "padding": '0.5em 1em',
     "textDecoration": 'none',
     "color": '#fff',
     "backgroundColor" : '#33cbd0',
     "border": '1px solid #eee',
     'borderRadius': '4px',
     'fontSize' : '1.2em',
     'margin' : '0.5em'
  }
}

type Props = { }

type State = {
  images: Detail[],
  isLoading:bool
}

export class HomeContainer extends Component {

  state: State;
  props: Props;

	constructor(props: Props) {
		super(props);
		this.state = { images: [], isLoading: true };
	}

	refreshClicked() {
		this.setState({ images: [], isLoading: true });
		this.getImagesFromFlickr();
	}

  getImagesFromFlickr() {
  	flickrApi.getPublicPhotos().then(images => this.setState({ isLoading:false, images: images }));
  }

  componentDidMount() {
      this.getImagesFromFlickr();
  }

  render() {
    return (
    	<section>
    		<button style={styles.refreshButton} onClick={this.refreshClicked.bind(this)}>Refresh</button>
    	  <ImageListLoader isLoading={this.state.isLoading} images={this.state.images}/>
    	</section>
    )
  }
}
