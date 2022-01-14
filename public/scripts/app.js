// Client facing scripts here

$(document).ready(() => {



  $(".navbar-register").on("click",() => {
  location.href = "/register";
  })

  $(".navbar-login").on("click",() => {
    location.href = "/login";
  })


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

  
  
  //
  //API AJAX CALLS********************************
  //
  //modal popup/close functions
  const modal = document.getElementById("myModal");
  
  $(".list-item").on("click", (event) => {
    if (event.target.className === "fa-solid fa-circle-minus") {

      return;
    }
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    modal.style.display = "block";
    const targetText = event.target.innerHTML;
    const newString = targetText.split(" ");
    const movie = newString.slice(14, 17);
    
    //------------MOVIES/TV-----------
    if(event.target.innerText.includes("watch")) {
    $.ajax({
      url: `http://www.omdbapi.com/?t=${movie}&apikey=fb68f62a`,
      method: "GET",
      dataType: "json",
      success: function (data) {
        console.log("Here's your movie!",data)
        $(".modal-content").append(`
        <img src="${data.Poster}">
        <br><i class="fa-solid fa-film"></i><br>
        <p class="api-info">Title: ${data.Title}<br><br>
        ${data.Actors}<br><br>
        ${data.Plot}<br><br>
        ${data.Genre}<br><br>
        imDB Rating: ${data.imdbRating}<br><br>
        Release Date: ${data.Released}
        </p>`)
      },
      error: function (err) {
        console.log("aww",err);
      }
    })
  }
  //------------BOOKS-----------
  if(event.target.innerText.includes("read")) {
    const book = newString.slice(15, 18)
    $.ajax({
      url: `https://www.googleapis.com/books/v1/volumes?q=${book}`,
      method: "GET",
      dataType: "json",
      success: function (data) {
        const bookInfo = data.items["0"].volumeInfo;
        console.log("Here's your book!",bookInfo)
        $(".modal-content").append(`
        <img src="${bookInfo.imageLinks.smallThumbnail}">
        <br><i class="fa-solid fa-book"></i><br>
        <p class="api-info">${bookInfo.title}<br><br>
        Written by: ${bookInfo.authors[0]}<br><br>
        ${bookInfo.description}<br><br>
        Want to Read?: <a href="${bookInfo.previewLink}">Read Now!</a>
        </p>`)
      },
      error: function (err) {
        console.log("aww",err);
      }
    })
  }
//------------FOOD-----------
  if(event.target.innerText.includes("eat")) {
    const food = newString.slice(18, 21)
    $.ajax({
      url: `https://api.spoonacular.com/recipes/complexSearch?query=${food}&apiKey=a19f30d1480c490d9c94dd375b9dbd96`,
      method: "GET",
      dataType: "json",
      success: function (data) {
        const foodInfo = data.results[randomNumber];
        console.log("Here's your food!",foodInfo)

        $(".modal-content").append(`
        <img src="${foodInfo.image}">
        <br><i class="fa-solid fa-utensils"></i><br>
        <p class="api-info">${foodInfo.title}<br><br>
        Here's a picture of what you want! SORRY, I'm a computer, I can't cook for you!<br><br>
        
        </p>`)
      },
      error: function (err) {
        console.log("aww",err);
      }
    })
  }
//-------------SHOPPING--------------
  if(event.target.innerText.includes("buy")) {
    const item = newString.slice(17, 20)
    console.log(item)
    $.ajax({
      url: `http://api.serpstack.com/search?access_key=cda65bbac4a0a2b6d59bbe51fa1b7bb9&query=${item}`,
      method: "GET",
      dataType: "json",
      success: function (data) {
        const itemInfo = data.organic_results[randomNumber];
        console.log("Here's your product!",itemInfo)
        $(".modal-content").append(`
        <i class="fa-solid fa-cart-shopping"></i><br>
        <p>${itemInfo.title}<br><br>
        Ready to Buy?: <a href='${itemInfo.url}'>Buy NOW!!</a> <br><br>
        
        </p>`)
      },
      error: function (err) {
        console.log("aww",err);
      }
    })
  }

    
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


  $("i").on("click", (event) => {
   event.preventDefault();
    const target = event.target.parentNode;
    if(event.target.outerHTML === "<i class=\"fa-solid fa-circle-minus\"></i>") {
   target.remove();
    }
  })

  //Drag and Drop 
  $(".list-item").draggable();

  $("ul").droppable({
    accept: ".list-item",
    drop: function(){
      console.log("i am dropped");
    }
  });


  




}); 