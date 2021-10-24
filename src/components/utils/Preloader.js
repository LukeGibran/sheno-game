let imageObj,
  loadedImage = 0;

function Preloader(elements, images) {
  for (var i = 0; i < images.length; i++) {
    imageObj = new Image();
    imageObj.src = images[i];
    imageObj.addEventListener("load", iLoad(elements[i], images[i]), false);
  }
}

function iLoad(el, img) {
    loadedImage++;
    el.src = img;
}

// image preload function should be called upon banner load.
export default Preloader;
