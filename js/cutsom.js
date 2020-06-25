const items = document.querySelectorAll(".accordion a");

function toggleAccordion(){
  this.classList.toggle('active');
  this.nextElementSibling.classList.toggle('active');
}

items.forEach(item => item.addEventListener('click', toggleAccordion));



$(function () {
  $(document).scroll(function () {
    var $nav = $("#navbar");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

$(function() {
  $('.toggle').click(function(e) {
    e.stopPropagation();
    $(".item").toggleClass('active');
    $("#navbar").toggleClass('unscrolled-active')
  });
  $('body').click(function(e) {
    if ($('.item').hasClass('active')) {
      $(".item").toggleClass('active')
    }
  })
});

$(document).ready(function(){
  $('.slider-container').slick({
    prevArrow:"<img class='a-left control-c prev slick-prev' src='./img/back.svg'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='./img/next.svg'>",
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
      
});
