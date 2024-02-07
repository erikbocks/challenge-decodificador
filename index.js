
let message = "";
let textArea = document.getElementById("processedMessage");

function getMessage(id) {
    return document.getElementById(id).value;
}

function encryptMessage() {
    message = getMessage("userMessage");

    if (!message.match(/[a-z]/g)) {
        alert("você só pode usar letras minúsculas e sem acento.")
        return
    }

    message = message.replace(/e/g, "enter");
    message = message.replace(/i/g, "imes");
    message = message.replace(/a/g, "ai");
    message = message.replace(/u/g, "ufat");
    message = message.replace(/o/g, "ober");

    document.getElementById("noContentWarning").style.display = "none";
    document.getElementById("copyButton").style.display = "block";
    textArea.innerHTML = message;
    textArea.style.display = "flex";
}

function decryptMessage() {
    message = getMessage("userMessage");

    if (!message.match(/[a-z]/g)) {
        alert("você só pode usar letras minúsculas e sem acento.");
        return
    }

    message = message.replace(/enter/g, "e");
    message = message.replace(/imes/g, "i");
    message = message.replace(/ai/g, "a");
    message = message.replace(/ufat/g, "u");
    message = message.replace(/ober/g, "o");

    document.getElementById("noContentWarning").style.display = "none";
    document.getElementById("copyButton").style.display = "block";
    textArea.innerHTML = message;
    textArea.style.display = "flex";    
}

function copyToClipboard() {
    if (message.length == 0) {
        return
    }
    
    navigator.clipboard.writeText(message);
    document.getElementById("copyButton").style.display = "none";
    document.getElementById("noContentWarning").style.display = "flex";
    textArea.innerHTML = "";
    textArea.style.display = "none";
}