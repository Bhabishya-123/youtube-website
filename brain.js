//brain used for slideshow image that will change image on click of next and prev button
var index = 1;
slideshow(index);

function slideshow(n) {
    var i;
    var slide = document.getElementsByClassName("mySlides");

    for (var i = 0; i < slide.length; i++) {
        slide[i].style.display = 'none';
    }

    if (n > slide.length) { index = 1 }
    if (n < 1) { index = slide.length }
    slide[index - 1].style.display = 'block';
}


function plusSlides(n) {
    slideshow(index += n);
}


//brain used for auto next image
var x = 0;
var images = new Array("./images/0.jpg","./images/1.jpg","./images/2.jpg","./images/3.jpg"); 

function auto()
  {
    x++;
    if (x == images.length)
       x=0;
    document.querySelector('.mySlides img').src=images[x];      
  }

  setInterval(auto, 3000);

  //for dropdown issue
var element1 = document.querySelector(".drop");
var target1 = document.querySelector(".hide");
element1.addEventListener('click', function(){
	if(target1.style.display=='none'){
    target1.style.display = 'block';
  }
  else{
    target1.style.display = 'none';
  }
});