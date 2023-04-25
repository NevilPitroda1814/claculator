// screept for calculator
// claer a screen
function clearSc(){
    document.getElementById("result").value = " ";
}
// display the value 
function display(value){
    document.getElementById("result").value += value //display value;
}
// calculate 
function calculate(){
    var result = document.getElementById("result").value;
    document.getElementById("result").value = eval(result);
}