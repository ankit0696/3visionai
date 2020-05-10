const items = document.querySelectorAll(".accordion a");

function toggleAccordion(){
  this.classList.toggle('active');
  this.nextElementSibling.classList.toggle('active');
}

items.forEach(item => item.addEventListener('click', toggleAccordion));


//navigation

// (function($) { // Begin jQuery
//   $(function() { // DOM ready
//     // If a link has a dropdown, add sub menu toggle.
//     // $('nav ul li a:not(:only-child)').click(function(e) {
//     //   $(this).siblings('.nav-dropdown').toggle();
//     //   // Close one dropdown when selecting another
//     //   $('.nav-dropdown').not($(this).siblings()).hide();
//     //   e.stopPropagation();
//     // });
//     // Clicking away from dropdown will remove the dropdown class
//     $('html').click(function() {
//       $('.nav-dropdown').hide();
//     });
//     // Toggle open and close nav styles on click
//     $('#nav-toggle').click(function() {
//       $('nav ul').slideToggle();
//     });
//     // Hamburger to X toggle
//     $('#nav-toggle').on('click', function() {
//       this.classList.toggle('active');
//     });
//   }); // end DOM ready
// })(jQuery); // end jQuery


// $(function() {
//   $(".toggle").on("click", function() {
//       if ($(".item").hasClass("active")) {
//           $(".item").removeClass("active");
//       } else {
//           $(".item").addClass("active");
//       }
//   });
// });


$(function () {
  $(document).scroll(function () {
    var $nav = $("#navbar");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

$(function() {
  $('.toggle').click(function(e) {
    e.stopPropagation();
    $(".item").toggleClass('active')
  });
  $('body').click(function(e) {
    if ($('.item').hasClass('active')) {
      $(".item").toggleClass('active')
    }
  })
});
