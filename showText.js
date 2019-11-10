function pressedEnter() {
    if (event.keyCode == 13){
        console.log("1");
		event.preventDefault()
		sendMessage()
	}
}

function sendMessage() {
    if (document.getElementById("message-box").value.split(" ").join("") != "") {
        var outputBox = document.getElementById("text-output");
        var messageCont = document.createElement("div");
        var message = document.createElement("p");

        messageCont.setAttribute("class", "messageCont");
        message.setAttribute("class", "message");

        message.innerHTML = document.getElementById("message-box").value;
        messageCont.append(message);

        outputBox.append(messageCont);
        outputBox.append(document.createElement("br"));
        document.getElementById("message-box").value = "";

        outputBox.scrollTop = outputBox.scrollHeight;
    }
}
