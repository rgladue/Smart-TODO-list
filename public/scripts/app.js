// Client facing scripts here
$(document).ready(() => {

  $(".navbar-register").on("click",() => {
  location.href = "/register";
  })

  $(".navbar-login").on("click",() => {
    location.href = "/login";
  })

  $(".input-form").on("submit",(event) => {
    event.preventDefault();
    const $movieList = $("#movies");
    const $bookList = $("#books");
    const $foodList = $("#food");
    const $shopList = $("#shop");

    const $listItem = $(".text-field").val();

    
      

    if($listItem.includes("watch")) {
      $movieList.append(`<li class="list-item">${$listItem}</li><br>`);
    }
    if($listItem.includes("read")) {
      $bookList.append(`<li class="list-item">${$listItem}</li><br>`);
    }
    if ($listItem.includes("eat")) {
        $foodList.append(`<li class="list-item">${$listItem}</li><br>`);
    }
    if ($listItem.includes("buy")) {
        $shopList.append(`<li class="list-item">${$listItem}</li><br>`);
    }
    $(".text-field").val("");
      
  });

  $(".list-item").on("click", () => {
    
  });



  




}); 