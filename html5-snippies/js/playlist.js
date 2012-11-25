// Webville Tunes - Chapter 3

// onload, call the init function
window.onload = init;

// grab the button and handle the onclick event
function init() {
  var button = document.getElementById("addButton");
  button.onclick = handleButtonClick;
  loadPlaylist();
}

// handler for the onclick event
function handleButtonClick() {
  // get the user's input
  var textInput = document.getElementById("songTextInput");
  var songName = textInput.value;
  
  // check to make sure the user actually put a value in the text box
  if(songName == ""){
    alert("Please enter a song");
  } else {
    // create a list item with the song name
    var li = document.createElement("li");
    li.innerHTML = songName;
    
    // add the song name to the list
    var ul = document.getElementById("playlist");
    ul.appendChild(li);
  }
  save(songName);
}