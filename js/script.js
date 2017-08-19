 function add() {
    // grab
    var ulArray = document.getElementsByClassName("TheList");
    console.log(ulArray);

    var firstUl = ulArray[0];
    var lastUl = ulArray[ulArray.length - 1];

    console.log(firstUl)

    // add
    
    var thisGrabbed = $('#inputHere'); 
    var newItem = document.createElement ('li');

    var grabbed = thisGrabbed.val()
    var tNode = document.createTextNode(grabbed);  


    console.log("it was: " + grabbed)
    console.log(lastUl)

    // check for blank entry

    try { 
        if (grabbed == "") throw "empty!!";
    }
    catch(err) {
       alert("Input is " + err + "\r\nDid you forget to drag or type something in?");
       return;
   }

   // Do the actual adding and clearing input for next item entry.

   firstUl.appendChild(newItem);
   newItem.appendChild(tNode);
   inputHere.value = '';

}
