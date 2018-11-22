// $( document ).ready(function() {
 
// 		$(function() {
// 		  $('a[href*=#]').on('click', function(e) {
// 		    e.preventDefault();
// 		    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
// 		  });
// 		});

// });


//  Animation 

var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);
wow.init();


// Quanitity Selector

function increaseValue() {
	var value = parseInt(document.getElementById('number').value, 10);
	value = isNaN(value) ? 0 : value;
	value++;
	document.getElementById('number').value = value;
  }
  
  function decreaseValue() {
	var value = parseInt(document.getElementById('number').value, 10);
	value = isNaN(value) ? 0 : value;
	value < 1 ? value = 1 : '';
	value--;
	document.getElementById('number').value = value;
  }


  // Quanitity Selector for Related products ( Number 1)

function plus1() {
	var value = parseInt(document.getElementById('num1').value, 10);
	value = isNaN(value) ? 0 : value;
	value++;
	document.getElementById('num1').value = value;
  }
  
  function minus1() {
	var value = parseInt(document.getElementById('num1').value, 10);
	value = isNaN(value) ? 0 : value;
	value < 1 ? value = 1 : '';
	value--;
	document.getElementById('num1').value = value;
  }

// Quanitity Selector for Related products ( Number 2)

function plus2() {
	var value = parseInt(document.getElementById('num2').value, 10);
	value = isNaN(value) ? 0 : value;
	value++;
	document.getElementById('num2').value = value;
  }
  
  function minus2() {
	var value = parseInt(document.getElementById('num2').value, 10);
	value = isNaN(value) ? 0 : value;
	value < 1 ? value = 1 : '';
	value--;
	document.getElementById('num2').value = value;
  }


 // Quanitity Selector for Related products ( Number 3)

 function plus3() {
	var value = parseInt(document.getElementById('num3').value, 10);
	value = isNaN(value) ? 0 : value;
	value++;
	document.getElementById('num3').value = value;
  }
  
  function minus3() {
	var value = parseInt(document.getElementById('num3').value, 10);
	value = isNaN(value) ? 0 : value;
	value < 1 ? value = 1 : '';
	value--;
	document.getElementById('num3').value = value;
  }

// Active 


