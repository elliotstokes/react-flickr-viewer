
const publicPhotosUrl = "https://api.flickr.com/services/feeds/photos_public.gne?format=json";
var counter = 0;

function generateRandomName() {
  return "fcb" + counter++;
}

/**
 * Gets all the public photos from Flickr
 */
function getPublicPhotos() {
  return new Promise((resolve, reject) => {
    const callback = generateRandomName();

    window[callback] = (data) => {
      resolve(data.items);
      delete window[callback];
    }

    var script = document.createElement('script');
    script.addEventListener('error', (err) => reject(err));
    script.src = publicPhotosUrl + '&jsoncallback=' + callback;
    document.querySelector('head').appendChild(script);
  });  
};

const flickrApi = {
  getPublicPhotos : getPublicPhotos
};

export {flickrApi as default};
