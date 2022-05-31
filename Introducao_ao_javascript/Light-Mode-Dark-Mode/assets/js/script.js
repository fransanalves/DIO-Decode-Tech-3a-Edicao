const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];
const button = document.getElementById("button-mode");
const title = document.getElementById("title-mode");

function changeMode() {
    changeClass();
    changeText();
}

function changeClass() {
    body.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
    button.classList.toggle('dark-mode');
    title.classList.toggle('dark-mode');
}

function changeText() {
    if(body.classList.contains('dark-mode')) {
        button.innerHTML = 'Light Mode';
        title.innerHTML = 'Dark Mode On';
        return;
    }
    button.innerHTML = 'Dark Mode';
    title.innerHTML = 'Light Mode On';
}

button.addEventListener("click", changeMode);
