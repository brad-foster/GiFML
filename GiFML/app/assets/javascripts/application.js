// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function(){
  $("#question").append(questions[0]);
  $("#search-button").on("click", function (event) {
    console.log("search button is clicked")
    event.preventDefault()
    nextQuestion();
    getGif();
  });
  $("#reset-button").on("click", function(){
    resetGifs();
  });
  $("#container-1").on("click", function(){
    $("#container-1 > img").toggleClass("showContainer");
  });
  enlargeGif(event);
});

var counter = 0;
var index = 0;
var questions = ["Favorite animal", "Favorite Celeb", "Favorite movie", "Favorite color", "Favorite season", "Just type 'cats'", "Celebrity crush", "Favorite show", "Favorite musician"];
var urls = [];


function nextQuestion(){
  $("#question").empty();
  counter = (counter + 1) % questions.length;
  $("#question").append(questions[counter]);
  console.log(questions[counter]);
};

function getGif(){
  var searchTerm = $("#search-keyword").val();
  var urlReadySearchTerm = searchTerm.split(' ').join('+');
  var url = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + urlReadySearchTerm;
  $.ajax({
    url: url,
    method: "get"
  }).done(function(response){
    var responseUrl = response["data"]["image_original_url"]
    displayGif(responseUrl);
    $("#search-keyword").val('');
    urls.push(responseUrl);
    if (urls.length >= 9){
      $("#save-button").show();
      $("#reset-button").show();
    }
    // $.ajax({
    //   url: window.location.origin + "/gifs",
    //   method: "POST",
    //   data: {url: responseUrl}
    // }).done(function(){
    //   console.log("success");
    // });
  });
};

function displayGif(gifUrl){
  $("#container-" + index).append('<img src=' + gifUrl + '>')
  index++;
};

function resetGifs(){
  for (i = 0; i < 9; i++){
    $("#container-" + i).children().remove();
  };
  index = 0;
  urls = [];
  $("#save-button").hide();
  $("#reset-button").hide();
};

function enlargeGif(){
  for (i = 0; i < 9; i++){
    $("#container-" + i).on("click", function(){
      $("#container-" + i + " > img").addClass("showContainer");
    });
  };
};
