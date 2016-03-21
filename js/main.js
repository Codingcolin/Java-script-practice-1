// Exercise: Create a new div element when the page is created

//creates a new div element and stores it as a variable
var newDiv = document.createElement('div')
var newImg = document.createElement('img')
//creates text and stores it in a variable
//add a class to the new div
newDiv.className = "newClass"
newImg.setAttribute('src', 'image/smiley.jpg')
var textHere = document.createTextNode('write your text here')
//appends the text to the newDiv var
newDiv.appendChild(textHere)
//stores the body tag in a variable
var addHere = document.getElementById('addHere')
//appends the newDiv var to the body tag
addHere.appendChild(newDiv)
addHere.appendChild(newImg)


