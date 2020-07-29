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
  $('.content').click(function(e) {
    if ($('.item').hasClass('active')) {
      $(".item").toggleClass('active')
    }
  })
});

$(document).ready(function(){
  $('.slider-container').slick({
    prevArrow:"<img class='a-left control-c prev slick-prev' src='./img/back.svg'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='./img/next.svg'>",
    dots: true,
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
  $('.banner-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    arrows:false,
    autoplaySpeed: 4000,
    autoplay:true,
    pauseOnHover:false,
    pauseOnFocus:false

  });
});


var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #fff }";
  document.body.appendChild(css);
};


// $(document).ready(function() {
//   var urls = ['./img/header.jpg', './img/header-2.jpg'];

//   var cout = 1;
//   $('.header-main').css('background-image', 'linear-gradient(to bottom, rgba(95, 95, 95, 0.5), rgba(94, 94, 94, 0.3)),url("' + urls[0] + '")');
//   setInterval(function() {
//     $('.header-main').css('background-image', 'linear-gradient(to bottom, rgba(95, 95, 95, 0.5), rgba(94, 94, 94, 0.3)),url("' + urls[cout] + '")');
//     cout == urls.length-1 ? cout = 0 : cout++;
//   }, 5000);

// });

