'use strict';

jest.unmock('../app/components/imageList');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import {ImageListLoader} from '../app/components/imageList';

describe('Image List with loader', () => {

  it('should show loader when loading', () => {
  	const images = [];
    const loading = true;

  	var renderer = TestUtils.createRenderer();
    renderer.render(
       <ImageListLoader isLoading={loading} images={images}/>
    );

    const result = renderer.getRenderOutput();
    expect(result.type.name).toBe('Loader');
  });

  it ('should render as a image list when not loading', () => {

    const images = [
    {
      "title": "Campionato Italiano Cake Design FIPGC 2016",
      "link": "https://www.flickr.com/photos/federazioneitalianapasticceri/25513374334/",
      "media": {"m":"https://farm2.staticflickr.com/1703/25513374334_22cb4e140c_m.jpg"},
      "date_taken": "2016-03-01T14:15:30-08:00",
      "description": " <p><a href=\"https://www.flickr.com/people/federazioneitalianapasticceri/\">International Federation Pastry<\/a> posted a photo:<\/p> <p><a href=\"https://www.flickr.com/photos/federazioneitalianapasticceri/25513374334/\" title=\"Campionato Italiano Cake Design FIPGC 2016\"><img src=\"https://farm2.staticflickr.com/1703/25513374334_22cb4e140c_m.jpg\" width=\"240\" height=\"160\" alt=\"Campionato Italiano Cake Design FIPGC 2016\" /><\/a><\/p> <p>Campionato Italiano Cake Design FIPGC 2016<br /> <br /> Campionato Italiano Cake Design FIPGC 2016<br /> <a href=\"http://www.federazionepasticceri.it\" rel=\"nofollow\">www.federazionepasticceri.it<\/a><\/p>",
      "published": "2016-03-29T17:42:46Z",
      "author": "nobody@flickr.com (International Federation Pastry)",
      "author_id": "93901612@N06",
      "tags": "pasticceria cakedesign "
    }
    ];
    const loading = false;

    var renderer = TestUtils.createRenderer();
    renderer.render(
       <ImageListLoader isLoading={loading} images={images}/>
    );

    const result = renderer.getRenderOutput();
    expect(result.type.name).toBe('ImageList');
  });
});