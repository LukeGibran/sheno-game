let imageObj,
  loadedImage = 0;

function Preloader(elements, images) {
  var promise = new Promise((res, rej) => {
    var i;
    for (i = 0; i < images.length; i++) {
      imageObj = new Image();
      imageObj.src = images[i];
      imageObj.addEventListener("load", iLoad(elements[i], images[i]), false);
    }
    if (i === images.length) {
      return res("Success");
    } else {
      return rej("Something went wrong");
    }
  });

  return promise
}

function iLoad(el, img) {
  loadedImage++;
  el.src = img;
}

// image preload function should be called upon banner load.
export default Preloader;
