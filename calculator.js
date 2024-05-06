
const buttons = document.getElementsByClassName("calculatorInput")
//variable now contains all of our calculators buttons



for (var i = 0; i < buttons.length; i++) {
  
 buttons[i].addEventListener("click", function() { 
        
    // for loop used to apply event listener click to all calculator buttons
        displayBttns(this.value);
 });// call displayBttns will enter the value of each button in the "entrybox" (this.value specifically is grabbing the value of each button)

    }




function displayBttns(entrybox){
    
    let entryboxDisplay = document.getElementById("entrybox");
    // grabs entrybox element to be used in next portion of code

    entryboxDisplay.value+= entrybox;
    // displays each button's value in the "entrybox"
}


const clearButton = document.getElementById("clear");

clearButton.addEventListener ("click", function() {

clearEntryBox();

});


function clearEntryBox(){

const display = document.getElementById("entrybox")
display.value = "";

}


const operatorButtons = document.querySelectorAll(".operator");
const entrybox = document.getElementById("entrybox");

operatorButtons.forEach(button => {
    button.addEventListener("click", function() {
        
      
        
        const operator = this.value;

        switch(operator) {
            // switch statement holds all the actions that will be carried out based on the operator
            case "+": // the case keyword is used to specify what we're referring to in our code
            // in this case if the operator is "+" our entry box will display the plus operator
                entrybox.value += "+";
                break;
            case "-":
                entrybox.value += "-";
                break;
            case "*":
                entrybox.value += "*";
                break;
            case "/":
                entrybox.value += "/";
                break;
        
                
            }
      

    });
});


const equalsButton = document.getElementById("equals")

equalsButton.addEventListener("click", function(){
    const equation = entrybox.value;
    try {
        const result = eval(equation);
    entrybox.value = result; 
   
    if  (result == "Infinity") {
        throw new Exception 
    }
}

catch (e){
    entrybox.value = "error";
}
//this portion of the code is used to catch potential errors and print them to the user input
   
});


 


