jQuery(document).ready(function($) {
    $(window).scroll(function() {
      var scrollPos = $(window).scrollTop(),
        navbar = $('.navbar');
  
      if (scrollPos > 50) {
        navbar.addClass('alt-color');
      } else {
        navbar.removeClass('alt-color');
      }
    });
  });

  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})