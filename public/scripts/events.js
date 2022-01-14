$(()=> {

  const clickReset = function() {
    const $filmClasses = $('.fa-film').attr('class').split(' ');
    for (const aClass of $filmClasses) {
      if (aClass === 'fas-clicked') {
        $('.fa-film').removeClass('fas-clicked')
      }
    }

    const $shoppingClasses = $('.fa-shopping-cart').attr('class').split(' ');
    for (const aClass of $shoppingClasses) {
      if (aClass === 'fas-clicked') {
        $('.fa-shopping-cart').removeClass('fas-clicked')
      }
    }

    const $utensilsClasses = $('.fa-utensils').attr('class').split(' ');
    for (const aClass of $utensilsClasses) {
      if (aClass === 'fas-clicked') {
        $('.fa-utensils').removeClass('fas-clicked')
      }
    }

    const $bookClasses = $('.fa-book').attr('class').split(' ');
    for (const aClass of $bookClasses) {
      if (aClass === 'fas-clicked') {
        $('.fa-book').removeClass('fas-clicked')
      }
    }

  };

  // This sets the POST route to movies
  $(".fa-film").on("click", () => {
    if ($('#new-item').attr('action') !== '/movies') {
      clickReset();
      $('#new-item').attr('action', '/movies');
      $(".fa-film").addClass('fas-clicked');
    } else {
        $('#new-item').attr('action', '/reminders');
        clickReset();
    }
  });


  // This sets the POST route to products
  $(".fa-shopping-cart").on("click", () => {
    if ($('#new-item').attr('action') !== '/products') {
      clickReset();
      $('#new-item').attr('action', '/products');
      $(".fa-shopping-cart").addClass('fas-clicked');
    } else {
        $('#new-item').attr('action', '/reminders');
        clickReset();
    }
  });


    // This sets the POST route to foods
  $(".fa-utensils").on("click", () => {
    if ($('#new-item').attr('action') !== '/foods') {
      clickReset();
      $('#new-item').attr('action', '/foods');
      $(".fa-utensils").addClass('fas-clicked');
    } else {
        $('#new-item').attr('action', '/reminders');
        clickReset();
    }
  });

  // This sets the POST route to books
  $(".fa-book").on("click", () => {
    if ($('#new-item').attr('action') !== '/books') {
      clickReset();
      $('#new-item').attr('action', '/books');
      $(".fa-book").addClass('fas-clicked');
    } else {
        $('#new-item').attr('action', '/reminders');
        clickReset();
    }
  });

  $(".fa-times").on("click", () => {
    $('.modal-container').css('display', 'none')
  });

})
