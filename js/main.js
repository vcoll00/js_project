let firstImage = document.querySelector('#cupcakes');

firstImage.onclick = () => {
  if (firstImage.getAttribute('src') ===
    'images/cupcakes.jpg') {
    firstImage.setAttribute('src',
      'images/cupcakes_two.jpg');
  } else {
    firstImage.setAttribute('src',
      'images/cupcakes.jpg');
  }
}



const image = document.querySelector('#flower');

let rose = "images/flower.jpg";
let daisy = "images/daisy.jpg";

image.onmouseenter = (e) => {
  // change image
  e.target.setAttribute('src', rose);
};

image.onmouseleave = (e) => {
  // change image
  e.target.setAttribute('src', daisy);
};