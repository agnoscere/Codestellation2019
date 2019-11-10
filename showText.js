function pressedEnter() {
    if (event.keyCode == 13){
		event.preventDefault()
		if (document.getElementById("message-box").value.split(" ").join("") != "") {
			displayMessage();
		}
	}
}

function displayMessage() {
    if (document.getElementById("message-box").value.split(" ").join("") != "") {
        console.log("asdfsa");
        var outputBox = document.getElementById("text-output");
        var messageCont = document.createElement("div");
        var message = document.createElement("p");

        messageCont.setAttribute("class", "potato");
        message.setAttribute("class", "message");

        message.innerHTML = document.getElementById("message-box").value;
        messageCont.append(message);

        outputBox.append(messageCont);
        outputBox.append(document.createElement("br"));
        document.getElementById("message-box").value = "";

        outputBox.scrollTop = outputBox.scrollHeight;
    }
}
