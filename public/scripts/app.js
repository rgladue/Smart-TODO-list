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
   
    $.ajax({
      url: "localhost:3000/",
      method: "POST",
      dataType: "JSON",
      success: function(data) {
        $movieList.append("<li>hello</li>");
      },
      error: function(error) {
        console.log(error, "hi");
      },
    });
  
  
  });



  




}); 