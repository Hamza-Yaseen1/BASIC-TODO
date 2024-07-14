const inputBox = document.getElementById("inputBox");
const item = document.getElementById("item");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        item.appendChild(li);
    
    }
    inputBox.value = "";
}

