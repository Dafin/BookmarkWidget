  function add() {
    // grab
    var ulArray = document.getElementsByClassName("TheList");
    console.log(ulArray);

    var firstUl = ulArray[0];
    console.log(firstUl)


    // add
    
    var thisGrabbed = document.getElementById("inputHere"); 
    var newItem = document.createElement ('li');

    var grabbed = thisGrabbed.value;
    var tNode = document.createTextNode(grabbed);  


    console.log("it was: " + grabbed)


    //newItem.innerHTML = randomString;
    firstUl.appendChild(newItem);
    newItem.appendChild(tNode)
  }