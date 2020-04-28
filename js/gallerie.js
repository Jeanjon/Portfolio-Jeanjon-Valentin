
var currentIndex = 0,
  items = $('.gallerie .pictures'),
  itemAmt = items.length;
var next;
var next2;
var next3;

$( "#carre2" ).click(function(event) {
	 event.preventDefault();
currentIndex += 1;


  if (currentIndex > itemAmt - 1) {
    currentIndex = itemAmt - 1;
	}
  else {

	   if ( next === undefined ) {
       next = $('.pictures').next()  ;
   }
 else {
		 next = next.next();

	}

	$(".gallerie").scrollTo(next, 1000, {easing:'easeInOutQuad' });

  }
});




$( "#carre1" ).click(function(event) {
 event.preventDefault();
currentIndex -= 1;



	    if (currentIndex > -1){

	   if ( next === undefined ) {
   next = $('.pictures').prev();

	   }

 else {
	 next = next.prev();

	}

	 $(".gallerie").scrollTo(next, 1000, {easing:'easeInQuad' } );

		}
		else{
			currentIndex = 0;
		}
});		
