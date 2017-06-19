  function add() {
    // grab
    var ulArray = document.getElementsByClassName("TheList");
    console.log(ulArray);

    var firstUl = ulArray[0];
    console.log(firstUl)


    // add
    var newItem = document.createElement ('li');
    
    var thisGrabbed = document.getElementById("inputHere"); 

    var grabbed = thisGrabbed.value;
    console.log("was" + grabbed)


    //newItem.innerHTML = randomString;
    firstUl.appendChild(newItem);
  }