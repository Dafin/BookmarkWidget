

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
    if (grabbed  == "") {
        alert("Did you forget to drag or type something in?");

    } else {
        firstUl.appendChild(newItem);
        newItem.appendChild(tNode);
        inputHere.value = '';
    }
  }