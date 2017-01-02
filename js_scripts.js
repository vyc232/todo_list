
//TODO: SWITCH ALL SCRIPTS TO JQ
//Use page 327 for mouse over and mouseout
//TODO: make input break when max-width reached

var elList  = document.getElementById("list");
var addLink = document.getElementById("add");
var counter = document.getElementById("counter");
var listInput = document.getElementById("listInput");

function buttonAdd(e) {
    e.preventDefault();
    startUp();
//    var newEl = document.createElement("li");
//    var newText = document.createTextNode("enter");
//    newEl.appendChild(newText);
//    var childEl = document.getElementById("inputItem");
//    childEl.parentNode.insertBefore(newEl, childEl);
}

function enterAdd(e){
    if(e.keyCode == 13){
        //Create new list item
        var newEl = document.createElement("li");
        var newText = document.createTextNode(listInput.value);
        newEl.appendChild(newText);
        //Add element to the list before input item
        var childEl = document.getElementById("inputItem");
        childEl.parentNode.insertBefore(newEl, childEl);
        //Delete text entered
        listInput.value = "";
    }
}

function removeEmptyElement(e){
    //TODO: remove empty node, find removeElement() when losing focus
}
function updateCount() {
    var listItems = elList.getElementsByTagName("li").length - 1;
    counter.innerHTML = listItems;
}

function startUp() {
    var input = document.getElementById("listInput");
    input.focus();
}

addLink.addEventListener("click", buttonAdd, false);       // Click on button
elList.addEventListener("DOMNodeInserted", updateCount, false); // DOM updated
listInput.addEventListener("blue", removeEmptyElement, false); //Removes empty list element
listInput.addEventListener("keydown", enterAdd, false); //key hit inside input
window.addEventListener("load", startUp, false);        //Default focus to entering text