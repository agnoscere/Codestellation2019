function pressedEnter() {
    if (event.keyCode == 13){
        console.log("!");
		event.preventDefault()
		displayMessage()
	}
}

function displayMessage() {
    if (document.getElementById("message-box").value.split(" ").join("") != "") {
        sendMessage();    
    }
}
