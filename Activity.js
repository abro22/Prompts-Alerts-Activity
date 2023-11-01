
// 1. Create an alert when you open your page that says "Good morning!"

alert (`Good Morning!`)



// 2. Create a text field that asks what hour it is (0-23) and a button that when clicked  alerts "Good morning", "good afternoon", or "good evening" (Hint, use an if statement)

function timeAlert () {
    let textField = document.getElementById ("text") 
    let text = textField.value 
    
        if (text.value <= 11) {

        alert (`Good Morning`)
        }
        else if (text.value >= 23)
        {
            alert (`Good Evening`)
        } }



// 3. Create a button that alerts you and says "Ouch!" when you click it (hint: use a function)

function alertNoise () {
document.getElementById ("alertOuch") 
alert (`Ouch`)


}


// 4. Create a button that when clicked, gets the users name from a text field, and alerts "Hello (name)!"


function helloMessage () {
    let messageField = document.getElementById ("textField")
    let name = messageField.value
    alert (`Hello ${name} `)
}

