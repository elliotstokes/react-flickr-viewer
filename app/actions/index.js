import flickrApi from '../helpers/flickrApi';

export const REQUEST_IMAGES = 'REQUEST_MAGES'
export const RECEIVE_IMAGES = 'RECEIVE_IMAGES'

export function requestImages(query) {
  return {
    type: SELECT_IMAGES,
    query
  }
}

export function receiveImages(query, items) {
  return {
    type: RECEIVE_IMAGES,
    query,
    images: items
  }
}

export function fetchImages(query) {

  return function (dispatch) {
    dispatch(requestImages(query))

    return flickrApi.getPublicPhotos()
    .then(items => {
      dispatch(receivePosts(query, items));
    });

  }
}