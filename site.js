const msgContainer = document.getElementById("message-container");
const msgForm = document.getElementById("send-container");
const msgInput = document.getElementById("message-input");

setTimeout(() => appendMessage("Alex", "Hi I'm Alex, a junior studying Computer Science at UC Berkeley! Text me to learn more about me!"), 250);
setTimeout(() => appendMessage("Alex", "Things you can ask me:\nabout, email, experience, photo, project, resume"), 250);

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
                setTimeout(() => appendMessage("Alex", "Feel free to contact me or send me anything!\n", "mailto: alexzclin@gmail.com", "alexzclin@gmail.com"), 250);
                break;
            case ("about"):
                setTimeout(() => appendMessage("Alex", "I am excited to work on anything related to software engineering! You can find me here:\n", "https://www.linkedin.com/in/alexzclin/", "LinkedIn"), 250);
                break;
            case ("hi"):
                setTimeout(() => appendMessage("Alex", "Hi! Thank you for visiting my website!"), 250);
                break;
            case ("hello"):
                setTimeout(() => appendMessage("Alex", "Hello! Hope you are having a great day!"), 250);
                break;
            case ("hey"):
                setTimeout(() => appendMessage("Alex", "Hey!"), 250);
                break;
            case ("iloveyou"):
                setTimeout(() => appendMessage("Alex", "I love soap!"), 250);
                break;
            case ("photo"):
                setTimeout(() => appendMessage("Alex", "Check out my photo series!\n", "https://alexlinaseries.wordpress.com/", "City of Stars - a series"), 250);
                break;
            case ("experience"):
                setTimeout(() => appendMessage("Alex", "I am currently a software engineer intern at Xccelerate, an ed-tech startup. I work on projects for the full-stack software engineering bootcamp and work with code in JavaScript (Node.js/React), HTML, and CSS."), 250);
                break;
            case ("project"):
                setTimeout(() => appendMessage("Alex", "2D-World Software Engineering Design Project (Java):\nI worked with a partner to create an engine that generates an explorable 2D tile-based world (RPG style)\n\nPintOS Operating System Project (C):\nI worked with a team to implement a simplified operating system. We collaborated through Git for code reviews and this helped me become familiar with the software development workflow."), 250);
                break;
            case ("resume"):
                setTimeout(() => appendMessage("Alex", "Here is my resume!\n", "https://drive.google.com/file/d/1z-l_7QdSSsYGqpJankmJ-OB5HfYEG9lp/view?usp=sharing", "Resume"), 250);
                break;
            default:
                setTimeout(() => appendMessage("Alex", "Sorry what did you say?"), 250);
                break;
        }
    }
})

function appendMessage(sender, message, link, linkTitle) {
    time = new Date().toLocaleTimeString([], {timeStyle: 'short'});
    const msgElement = document.createElement("div");
    if (sender == "Alex") {
        msgElement.setAttribute("class", "alex-message");
    } else {
        msgElement.setAttribute("class", "you-message");
    }
    msgElement.innerText = `${sender} ${time}\n${message}`;
    if (link != null) {
        var a = document.createElement("a");
        a.innerHTML = linkTitle;  
        a.href = link;
        a.target = "_blank";
        msgElement.appendChild(a);
    }
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
