const inputbox = document.getElementById("inputbox")
const relapseMode = document.getElementById("relapseMode")

function appendToDisplay (input){
    inputbox.value += input;
}

function ClearDisplay (){
    inputbox.value = ""
}

function DelBtn (){
    inputbox.value = inputbox.value.slice(0, -1)
}

function EqualBtn (){
    inputbox.value = eval(inputbox.value)
}

relapseMode.onclick = function(){
    window.location.href = "/index.html"
}