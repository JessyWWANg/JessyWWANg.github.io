$(document).ready(function(){

  const B1 = document.querySelector('#B1');
  const B2 = document.querySelector('#B2');
  const B3 = document.querySelector('#B3');
  var theText1;
  var theText2;
  var theText3;
  $("#theSubmit1").click(function() {
    theText1 = $("#theText1").val();
    console.log(theText1);
    B1.textContent = theText1;
    if (theText1 == "buttercup"){
      J1.textContent = "bingo!";
    }
    else{
      J1.textContent = "Wrong name! try again";
    }
  })

  $("#theSubmit2").click(function() {
    theText2 = $("#theText2").val();
    console.log(theText2);
    B2.textContent = theText2;
    if (theText2 == "blossom"){
      J2.textContent = "bingo!";
    }
    else{
      J2.textContent = "Wrong name! try again";
    }
  })

  $("#theSubmit3").click(function() {
    theText3 = $("#theText3").val();
    console.log(theText3);
    B3.textContent = theText3;
    if (theText3 == "bubbles"){
      J3.textContent = "bingo!";
    }
    else{
      J3.textContent = "Wrong name! try again";
    }
  })


})
