function generateRandom() {
    // alert("Hello");
    // get the textarea from the DOM
    var textarea = document.getElementById("selectionList");
    // get the value of the textarea
    var text = textarea.value;

    if(text == "") {
        alert("Please enter a list of items, separated by a new line.");
        return;
    }
    
    // split the text into an array of lines
    var lines = text.split("\n");
    // get a random number between 0 and the number of lines
    var randomNumber = getRandomNumber(lines.length);
    //get the currentSelection H1 element froom the DOM
    var currentSelection = document.getElementById("currentSelection");
    currentSelection.innerHTML = lines[randomNumber];
    // alert(lines[randomNumber]);
}

//implement the getRandomNumber function
function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

function listSelectionChange() {
    // get the existingLists select element from the DOM
    var existingLists = document.getElementById("existingLists");
    // get the selectionList textarea element from the DOM
    var selectionList = document.getElementById("selectionList");
    // get the index of the selected option
    var selectedIndex = existingLists.selectedIndex;
    // get the text of the selected option
    var selectedList = existingLists.options[selectedIndex].text;
    // get the value of the selected option
    var selectedListValue = existingLists.options[selectedIndex].value;
    // set the value of the textarea to the value of the selected option

    if(value == "none") {
        selectionList.value = "";
    }
    
    selectionList.value = eval(selectedListValue);
       
}
