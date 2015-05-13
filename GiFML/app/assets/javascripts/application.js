var counter = 0;
var questions = ["Prompt 0:", "Prompt 1:", "Prompt 2:"]
var urls = [];

$(document).ready(function(){
  $("#question").append(questions[0]);
  $("#name-button").on("click", getGifs);
  $("#name-button").on("click", nextQuestion);
});


function nextQuestion(){
  $("#question").empty();
  counter = (counter + 1) % questions.length;
  $("#question").append(questions[counter]);
};

function getGifs(event){
  event.preventDefault();
  for (i = 0; i < 3; i++){
    var searchTerm = $("#search-keyword").val();
    var urlReadySearchTerm = searchTerm.split(' ').join('+');
    var url = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + urlReadySearchTerm;
    $.ajax({
      url: url,
      method: "get"
    }).done(function(response){
      var responseUrl = response["data"]["image_original_url"]
     urls.push(responseUrl);
    });
  };
  displayGifs(urls);
 urls = [];
};

function displayGifs(response){
  if ($("#question").text() === questions[0]){
    $("#container-0").empty();
    for (i = 0; i < response.length; i++){
      $("#container-0").append('<img src=' + response[i] + '>')
    }
  }
  else if ($("#question").text() === questions[1]){
    $("#container-1").empty();
    for (i = 0; i < response.length; i++){
      $("#container-1").append('<img src=' + response[i] + '>')
    }
  }
  else if ($("#question").text() === questions[2]) {
    $("#container-2").empty();
    for (i = 0; i < response.length; i++){
      $("#container-2").append('<img src=' + response[i] + '>')
    }
  }
};
