let inputText = document.getElementById("input");
let addItemButton = document.getElementById("addItem");


addItemButton.addEventListener('click', addItem);
document.addEventListener('keydown', (event) => {
    if (event.key == 'Enter') {
        addItem(event);
    }
});

function addItem(event) {
    let inputValue = inputText.value;
    if (inputValue == "") {
        alert("Please Enter Your Task..");
    }
    else {
        let div = document.createElement("div");
        div.className = "input";
        let input = document.createElement("input");
        input.value = inputText.value;
        input.readOnly = true;

        let button = document.createElement("button");
        button.innerText = "Remove";
        button.className = "removeItem";

        div.append(input, button);
        document.getElementById("output").append(div);
        inputText.value = "";
    }
}

document.getElementById("output").addEventListener('click', (event) => {
    if (event.target.classList.contains("removeItem")) {
        event.target.parentElement.remove();
    }
});
