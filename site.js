const msgContainer = document.getElementById("message-container");
const msgForm = document.getElementById("send-container");
const msgInput = document.getElementById("message-input");

setTimeout(() => appendMessage("Alex", "Hi I'm Alex, a junior studying Computer Science at UC Berkeley! Text me to learn more about me!"), 250);

msgForm.addEventListener("submit", e => {
    e.preventDefault();
    const message = msgInput.value;
    if (message != "" && message.trim().length != 0) {
        appendMessage("You", message);
        msgInput.value = "";
        var msg = message.toLowerCase();
        var noPunctuation = msg.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
        var noSpace = noPunctuation.replace(/\s/g, '');
        var finalMsg = noSpace.replace(/\s{2,}/g," ");
        switch (finalMsg) {
            case ("email"):
                setTimeout(() => appendMessage("Alex", "This is my email: alexzclin@gmail.com! Feel free to send me anything!"), 250);
                break;
            case ("about"):
                setTimeout(() => appendMessage("Alex", "You can find me here!"), 250);
                break;
            case ("hi"):
                setTimeout(() => appendMessage("Alex", "Hi! Thank you for visiting my website!"), 250);
                break;
            case ("hello"):
                setTimeout(() => appendMessage("Alex", "Hello! Hope you are having a great day!"), 250);
                break;
            case ("iloveyou"):
                setTimeout(() => appendMessage("Alex", "I love soap!"), 250);
                break;
            default:
                setTimeout(() => appendMessage("Alex", "Sorry what did you say?"), 250);
                break;
        }
    }
})

function appendMessage(sender, message) {
    time = new Date().toLocaleTimeString([], {timeStyle: 'short'});
    const msgElement = document.createElement("div");
    if (sender == "Alex") {
        msgElement.setAttribute("class", "alex-message");
    } else {
        msgElement.setAttribute("class", "you-message");
    }
    msgElement.innerText = `${sender} ${time}\n${message}`;
    msgContainer.append(msgElement);
    msgContainer.scrollTop = msgContainer.scrollHeight;
}

msgForm.addEventListener("keypress", submitOnEnter);

function submitOnEnter(event){
    if(event.which === 13 && !event.shiftKey){
        event.preventDefault();
        event.target.form.dispatchEvent(new Event("submit", {cancelable: true}));
        event.target.value = "";
    }
}
