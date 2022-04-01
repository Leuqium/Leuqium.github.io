// Colcade

// element as first argument
var grid = document.querySelector('.grid');
var colc = new Colcade( grid, {
columns: '.grid-col',
items: '.grid-item'
});

// selector string as first argument
var colc = new Colcade( '.grid', {
    columns: '.grid-col',
    items: '.grid-item'
});

// Hide
$(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
      $('footer').fadeOut();
    } else {
      $('footer').fadeIn();
    }
});
