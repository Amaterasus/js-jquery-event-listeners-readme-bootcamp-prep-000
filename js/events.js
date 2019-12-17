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
    $('img').addClass("tasty")
  });
}

function pressIt()
{
  
}

function submitIt()
{
  $("form").on("submit", function()
  {
    alert("Your Form is going to be submitted now.")
    
  });
  return;
}

$(document).ready(function(){

// call functions here

});
