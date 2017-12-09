$( document ).ready(function() {
// Create array of actions, new actions will be pushed into this array;
var actions = ["Zebra", "Tiger", "Bear", "Jaguar", "Giraffe", "Elephant", "Leopard", "Cheetah", "Wolf"];

// Functions & Methods
// Function - displays all gif buttons
function displayGifButtons(){
    // erases anything - div id so that it doesnt duplicate the results
    $("#gifButtonsView").empty();
    for (var i = 0; i < actions.length; i++){
        var gifButton = $("<button>");
        gifButton.addClass("action");
        gifButton.addClass("btn btn-primary")
        gifButton.attr("data-name", actions[i]);
        gifButton.text(actions[i]);
        $("#gifButtonsView").append(gifButton);
    }
}
// Function - add a new action button
function addNewButton(){
    $("#addGif").on("click", function(){
    var action = $("#action-input").val().trim();
    if (action == ""){
        // cant add a blank button
      return false;
    }
    actions.push(action);

    displayGifButtons();
    return false;
    });
}

// Function  - displays all of the gifs
function displayGifs(){
    var action = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + action + "&api_key=RBxhwjACDblTeZNSvADDmrGYSAmvXtoC&limit=10";
    console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: 'GET'
    })
    .done(function(response) {
        // console log it to make sure if works - yes
        console.log(response);
        // erases - anything in this thats not needed
        $("#gifsView").empty();
        //shows - gifs results
        var results = response.data;
        if (results == ""){
          alert("There isn't a gif for this selected button");
        }
        for (var i=0; i<results.length; i++){

            //div - gifs to go inside
            var gifDiv = $("<div>");
            gifDiv.addClass("gifDiv");
            // pulls- rating
            var gifRating = $("<p>").text("Rating: " + results[i].rating);
            gifDiv.append(gifRating);
            // pulling - gif
            var gifImage = $("<img>");
            gifImage.attr("src", results[i].images.fixed_height_small_still.url); // still image stored into src of image
            gifImage.attr("data-still",results[i].images.fixed_height_small_still.url); // still image
            gifImage.attr("data-animate",results[i].images.fixed_height_small.url); // animated image
            gifImage.attr("data-state", "still"); // set the image state
            gifImage.addClass("image");
            gifDiv.append(gifImage);
            // pulls - still image of gif
            // adding div of gifs to gifsView div
            $("#gifsView").prepend(gifDiv);
        }
    });
}
// Calls - Functions & Methods
// displays list of actions already created
displayGifButtons();
addNewButton();

// Document Event Listeners
$(document).on("click", ".action", displayGifs);
$(document).on("click", ".image", function(){
    var state = $(this).attr('data-state');
    if ( state == 'still'){
        $(this).attr('src', $(this).data('animate'));
        $(this).attr('data-state', 'animate');
    }else{
        $(this).attr('src', $(this).data('still'));
        $(this).attr('data-state', 'still');
    }
});
});
