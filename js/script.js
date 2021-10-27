let currentImageIndex = 0;

  const images = ['ballon.jpg', 'sea.jpg', 'house.jpg', 'flowers.jpg'];

  let frontImageElementName = '1';
  let backImageElementName = '2';

  function swapElementsNames()
  {
    [backImageElementName, frontImageElementName] 
      = [frontImageElementName, backImageElementName];
  }

  //set initial image
  updateFrontImage();
  setOpacityForElement(frontImageElementName, 1);

  //switch image to next
  function nextImage() {
    // Hide the current image.
    setOpacityForElement(frontImageElementName, 0);
    
    // Swap images.
    swapElementsNames();

    // Increment current image index and update the front image.
    incrementCurrentImageIndex();
    updateFrontImage();

    setOpacityForElement(frontImageElementName, 1);
  }

  //switch image to previous image
  function prevImage() {
    // TODO: Implement
    setOpacityForElement(frontImageElementName, 0);

    // Swap images.
    swapElementsNames();

    decrementCurrentImageIndex();
    updateFrontImage();
    setOpacityForElement(frontImageElementName, 1);
  }

  // update current image
  function updateFrontImage() {
    // TODO: Check index.
    let element = document.getElementById(frontImageElementName);
    // TODO: Check element to null
    element.src = `asset/${images[currentImageIndex]}`;
  }

  function setOpacityForElement(name, opacity)
  {
    let element = document.getElementById(name);
    element.style.opacity = opacity;
  }

  function incrementCurrentImageIndex() {
    currentImageIndex++;
    
    if ( currentImageIndex >= images.length ) {
      currentImageIndex = 0;
    } 
  }

  function decrementCurrentImageIndex() {
    currentImageIndex--;

    if ( currentImageIndex < 0 ) {
      currentImageIndex = images.length - 1;
    }
  }