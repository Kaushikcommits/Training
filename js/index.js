
// this is a jscript function to increment the number every time the javascript is called 
let timeInc = 0
 
let countEl = document.getElementById("num")
function increment(){
    timeInc +=  1 
    countEl.textContent = timeInc
    console.log("the button was clicked " + timeInc)

}

// this is a jscript function to make a save button 

saveEl = document.getElementById("save-el")
function save() {
    let countStr = timeInc + " - "
    saveEl.textContent +=   countStr
    countEl.textContent = 0
    timeInc = 0
    
}


// this is an exercice 

let firstName = "Kaushigan"
let lastName = "Ravichandran"

let fullName = firstName + lastName

console.log(fullName)