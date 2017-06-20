  function add() {
    // grab
    var ulArray = document.getElementsByClassName("TheList");
    console.log(ulArray);

    var firstUl = ulArray[0];
    console.log(firstUl)


    // add
    
    var thisGrabbed = $('#inputHere'); 
    var newItem = document.createElement ('li');

    var grabbed = thisGrabbed.val()
    var tNode = document.createTextNode(grabbed);  


    console.log("it was: " + grabbed)

    // check for blank entry
    if (grabbed  == "") {
        alert("U wot m8");
        
    // *Not functional - dupe check     
    //} else if (grabbed === tNode.value){
    //    alert("dupe");
    //    inputHere.value = '';

    } else {
        firstUl.appendChild(newItem);
        newItem.appendChild(tNode);
        inputHere.value = '';
    }
  }