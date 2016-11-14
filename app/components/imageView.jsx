// @flow

import React, { Component } from 'react';
import { TagList } from './tags';
import { CenteredImage } from './utils';
import dateFormatter from '../helpers/dateFormatter';
import type { Detail } from '../helpers/flickrApi';

const styles = {
  imageDetailsHeader: {
    'fontSize' : '0.9em'
  },
  imageDetailsParagraph: {
    'fontSize' : '0.8em'
  },
  imageViewContainer: {
    'backgroundColor': '#fff',
    'boxSizing': 'border-box',
    'display': 'flex',
    'flexDirection': 'column',
    'padding': '1em',
    'width': '100%',
    'border': '1px solid #eee',
    'transition' : 'background-color 0.4s ease',
    'overflow' : 'hidden',
    'boxShadow': '10px 10px 33px -11px rgba(0,0,0,0.75)',
    'borderRadius': '4px'
  },
  tagListContainer: {
    'marginTop' : 'auto'
  },
  detailsLink: {
  	'fontWeight': 700,
  	'color': '#000'
  }
}

type Props = {
  details: Detail
}

type State = {
  hovered: bool
}

/**
 * Component used to show a single Flickr Image and Metadata
 **/
export class ImageView extends Component {

  props: Props;
  state: State;

  constructor(props: Props) {
    super(props);
    this.state = {hovered:false};
  }

  moveOver(isOver: bool) {
    this.setState({hovered:isOver});
  }

  render() {
    const style = Object.assign({}, styles.imageViewContainer, this.state.hovered ? {'backgroundColor' : '#E6E6E6'} : {});
    return (
      <section style={style} onMouseOver={ this.moveOver.bind(this, true) } onMouseOut={ this.moveOver.bind(this, false) }>
        <CenteredImage src={ this.props.details.media.m } alt={ this.props.details.title }/>
        <ImageDetails details={this.props.details}></ImageDetails>
        {function() {
          if (this.props.details.tags && this.props.details.tags.trim().length > 0) {
            return (
              <div style={ styles.tagListContainer }>
                <TagList tags={ this.props.details.tags }/>
              </div>
            );
          }
        }.call(this)}
      </section>
    );
  }
}

/**
 * Renders the Metadata associated with a Flickr Image
 **/
export class ImageDetails extends Component {

  getUsernameFromDetails(details: Detail) {
    let match = details.author.match(/\(([^\)]+)\)/);
    return match && match.length > 1 ? match[1] : 'Unknown'
  }

  getTitleFromDetails(details: Detail) {
    return (details.title && details.title.trim().length > 0) ? details.title : "Unknown";
  }

  getDescriptionFromDetails(details: Detail) {
    const takenDate = dateFormatter.formatLongDate(details.date_taken);
    const publishedDate = dateFormatter.formatLongDate(details.published);
    return `Image taken on ${takenDate} and published on ${publishedDate}.`;
  }

  getProfileUrlFromDetails(details: Detail) {
  	return 'https://www.flickr.com/people/' + details.author_id;
  }

  render() {
    return (
      <aside>
        <h2 style={styles.imageDetailsHeader}>
          <DetailsLink url={ this.props.details.link }>{ this.getTitleFromDetails(this.props.details) }</DetailsLink>
          &nbsp;by&nbsp;
          <DetailsLink url={ this.getProfileUrlFromDetails(this.props.details) }>{ this.getUsernameFromDetails(this.props.details) }</DetailsLink>
        </h2>
        <p style={styles.imageDetailsParagraph}>
          { this.getDescriptionFromDetails(this.props.details) }
        </p>
      </aside>
    );
  }
}

type LinkProps = {
  children?: Element<any>,
  url: string
}

const DetailsLink = ({ url, children } : LinkProps) => (
	<a style={ styles.detailsLink } href={ url } target="_blank">{ children }</a>
);
