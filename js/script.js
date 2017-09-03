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

    var errors = checkEntry(grabbed)
    
    //basic error checking

    function checkEntry(grabbed) {

        if (grabbed == "") {
            alert("Please Drag or type a web address");
            return true;

        } else if (!grabbed.includes(".")) {
            alert("That wasn't a website\r\nPlease check the spelling"); 
            return true;

        } else {
            console.log("entry is valid!");
            return false;          
        }

    }

// Actual adding to the DOM and clearing input for next item entry.

if (!errors) {
     firstUl.appendChild(newItem);
     newItem.appendChild(tNode);
     inputHere.value = '';
 }


}
