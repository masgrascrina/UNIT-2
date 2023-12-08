
var imagini = document.getElementById('slideshow').getElementsByTagName('img');
var index = 0;
var intervalID;

function startSlideshow() {
  showImage(index);
  intervalID = setInterval(nextImage, 3000);
}

function showImage(i) {
  for (var j = 0; j < imagini.length; j++) {
    imagini[j].style.display = 'none';
  }
  imagini[i].style.display = 'block';
}

function nextImage() {
  index++;
  if (index === imagini.length) {
    index = 0;
  }
  showImage(index);
}

for (var i = 0; i < imagini.length; i++) {
  imagini[i].ondblclick = function() {
    clearInterval(intervalID);
  };
}