function getIt()
{
  $("p").on("click", function(key)
  {
    alert("Hey!");
  });
    
}

function frameIt()
{
  $("img").on("load", function()
  {
    $('#img').append('<img id="theImg" src="https://s3.amazonaws.com/learn-verified/painting-with-dog.gif" />')
  });
}

function pressIt()
{
  
}

function submitIt()
{
  
}

$(document).ready(function(){

// call functions here

});
