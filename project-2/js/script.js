console.log("hey");

function setBackgroundColor(id, color) {
    let toggle = false;
    if (toggle) {
        document.getElementById(id).style.backgroundColor = color;
        toggle = true;
    } else {
        document.getElementById(id).style.borderColor = color;
        toggle = false;
    }
}

function changeText(className, position, text) {
    document.getElementsByClassName(className)[position].innerHTML = text;
}

function showAlert(text) {
    alert(text);
}