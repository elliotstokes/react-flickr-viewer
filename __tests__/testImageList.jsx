'use strict';

jest.unmock('../app/components/imageList');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import {ImageList} from '../app/components/imageList';

describe('Image List', () => {

  it('should render the image details', () => {
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
      "tags": "pasticceria cakedesign internationalpastrycompetition pasticceriaitaliana pastryworld internationalpastry corsidipasticceria worldpastrychampionship pasticceriainternazionale federazionepasticceri associazionepasticceri eccellenzeitaliane associazionepasticceria associazionenazionalepasticceri corsicakedesign campionatomondialecakedesign federazionepasticceriitaliani federazioneitalianacakedesign campionatomondialepasticceria associazionecakedesign campionatoitalianopasticceria fipfederazionepasticceria worldpastry internationalpastryfederation campionatomondialegelateria campionatomondialecioccolateria nazionalepasticceri associazionenazionalecakedesign campionedelmondodipasticceria expopasticceria expofederazionepasticceri eccellenzeitalianepasticceria eccellenzeitalianecakedesign campionimondopasticceria pasticceriitaliani accademiaitalianachef nazionalepasticceriitaliani pastryworldchampionship cakedesignersworldchampionship internationalpastryassociation internationalpastryicecreamchocolateassociation worldpastrycompetition pastryinternational pastryinternationalschool internationalpastryschool pastrychampionship worldpastryinternational internationalicecreamcompetition internationalchocolatecompetition internationalcakedesigncompetition worldcakedesign worldtrophypastry worldchampionpastry worldpastryassociation federationinternationaledelapatisserie associationpatisserie pastryassociation pastryworldassociation pasteleriainternational pasteleríaasociación pasteleríaasociacióninternacional campeonatodelmundodepastelería campeondelmundopasteleria campeonatomundialdecakedesign championnatdumondepatisserie championdumondepatisserie finalechampionnatdumondepatisserie worldassociationpastry federationinternationalpatisserie associationinternationalpatisserie worldtrophypastryicecreamchocolate fipfederazione"
     },
     {
      "title": "Söll 2016",
      "link": "https://www.flickr.com/photos/131914450@N06/25513374774/",
      "media": {"m":"https://farm2.staticflickr.com/1656/25513374774_3de1494998_m.jpg"},
      "date_taken": "2016-03-27T12:57:44-08:00",
      "description": " <p><a href=\"https://www.flickr.com/people/131914450@N06/\">burgerking1975<\/a> posted a photo:<\/p> <p><a href=\"https://www.flickr.com/photos/131914450@N06/25513374774/\" title=\"Söll 2016\"><img src=\"https://farm2.staticflickr.com/1656/25513374774_3de1494998_m.jpg\" width=\"240\" height=\"135\" alt=\"Söll 2016\" /><\/a><\/p> ",
      "published": "2016-03-29T17:42:47Z",
      "author": "nobody@flickr.com (burgerking1975)",
      "author_id": "131914450@N06",
      "tags": ""
     }
  	];

  	var renderer = TestUtils.createRenderer();
    renderer.render(
       <ImageList images={images}/>
    );

    const result = renderer.getRenderOutput();
    expect(result.type).toBe('ul');
    expect(result.props.children.length).toBe(2);
    expect(result.props.children[0].props.children.props.details).toEqual(images[0]);
    expect(result.props.children[1].props.children.props.details).toEqual(images[1]);
  });

});