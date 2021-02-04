/*obsługa linku zobacz więcej/mniej*/


$(document).ready(function () {
    $('.technologie').hide();
});

$(document).ready(function () {
   $('#wiecej').click(function(e) {
      e.target.innerText =
			e.target.innerText == 'Zobacz więcej' ? 'Zobacz mniej' : 'Zobacz więcej';
 
   }); 
});

$(document).ready(function () {
   $('#wiecej').click(function () {
      $(".technologie").fadeToggle(1500); 
   });
});


/*english version*/
$(document).ready(function () {
    $('.technologie-en').hide();
});

$(document).ready(function () {
   $('#more').click(function(e) {
      e.target.innerText =
			e.target.innerText == 'See more' ? 'Show less' : 'See more';
 
   }); 
});

$(document).ready(function () {
   $('#more').click(function () {
      $(".technologie-en").fadeToggle(1500); 
   });
});