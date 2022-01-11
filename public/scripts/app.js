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

  
  //Adding list items from the input field
  $(".input-form").on("submit",(event) => {
    event.preventDefault();
    const $movieList = $("#movies");
    const $bookList = $("#books");
    const $foodList = $("#food");
    const $shopList = $("#shop");
    
    const $listItem = $(".text-field").val();
    
    
    
    
    
      

    if($listItem.includes("watch")) {
      $movieList.append(`<li class="list-item">${$listItem}</li><form method="GET" action="/<%= listItem %>/edit">
      <input type="submit" value="Edit">
    </form><br>`);
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
  
  
  
  


  //footer element redirect links
  $("#tiens-git").on("click", function() {
    location.href = "https://github.com/quangtienftu49";
  })

  $("#robs-git").on("click", () => {
    location.href = "https://github.com/rgladue";
  })

  $("#robs-twit").on("click", () =>{
    location.href = "https://twitter.com/RGAlexJR";
  })

  
  
  //modal popup/close functions
  const modal = document.getElementById("myModal");

  
  $("ul").on("click", (event) => {
    modal.style.display = "block";
    const targetText = event.target.innerHTML;

    $(".modal-content").append(`<p>Holy cow Batman!</p>`)
    
  });
  
  $(".close").on("click", () => {
    $(".modal-content").empty("")
    modal.style.display = "none";
  });
  
  window.onclick = (event) => {
    if (event.target == modal) {
      $(".modal-content").empty("")
      modal.style.display = "none";
    }
  }





  




}); 