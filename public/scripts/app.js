// Client facing scripts here
$(document).ready(() => {

  //Populate lists from DB using AJAX requests
  $.ajax({
    url: 'http://localhost:3000',
    method: 'GET',
    dataType: 'json',
    success: function(listings) {

    }
  })


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
      $movieList.append(`<li>${$listItem}</li><br>`);
    }
    if($listItem.includes("read")) {
      $bookList.append(`<li>${$listItem}</li><br>`);
    }
    if ($listItem.includes("eat")) {
        $foodList.append(`<li>${$listItem}</li><br>`);
    }
    if ($listItem.includes("buy")) {
        $shopList.append(`<li>${$listItem}</li><br>`);
    }
    $(".text-field").val("");
      
  });

  
  //footer element redirect links
  $("#robs-git").on("click", () => {
    location.href = "https://github.com/rgladue";
  })

  $("#robs-twit").on("click", () =>{
    location.href = "https://twitter.com/RGAlexJR";
  })

  
  
  //modal popup/close functions
  const modal = document.getElementById("myModal");

  
  $("ul").on("click", () => {
    modal.style.display = "block";
  });
  
  $(".close").on("click", () => {
    modal.style.display = "none";
  });
  
  window.onclick = (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }




  




}); 