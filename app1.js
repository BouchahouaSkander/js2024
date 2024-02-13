<!-- C'est la partie HTML -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Java Script 1</title>
</head>
<body>

    <div id="zone" style="width: 50px; height: 50px; border: 0px solid black;"></div>
    <script src="app.js"></script>
</body>
</html>
//C'est la partie JS :
//une fonction pour retourner le max de 2 inputs 
function max(a,b){
    if (a>b)
     return a
    else
      return b 
}
console.log(max(2,3))
//une fonction pour afficher sur le console "Bonjour"
function bnj(){
    console.log("bonjour")
}
bnj()
//une fonction pour afficher la somme de 2 inputs (utilisez prompt)
function somme(){
    a=prompt("donner une entier");
    b=prompt("donner le nbr 2");
    c=Number(a)+Number(b);
    return c

}
console.log(somme())
//ajouter un div html + 3 fonctions (into, out, bgColor)
function into() {
    document.getElementById("zone").innerText = "enter";
}


function out() {
    document.getElementById("zone").innerText = "out";
}


function bgColor() {
    document.getElementById("zone").style.backgroundColor = "lightblue"; 
}


document.getElementById("zone").onmousemove = into;
document.getElementById("zone").onmouseout = out;
document.getElementById("zone").onkeydown = bgColor; 
//Write a JavaScript function to check whether an `input` is a string or not
function isString(data) {
    return typeof data === 'string';
}

console.log("Exercise 1:");
console.log(isString('hello65656'));  
console.log(isString([1,6,9]));       
console.log(isString(5));             
console.log(isString("Is54545et")); 
//Write a JavaScript function to check whether a string is blank or not
function isBlank(input) {
    return !input.trim();
}

console.log(isBlank(''));    
console.log(isBlank('hjhjh'));
//# 3 # Write a JavaScript function to split a string and convert it into an array of words
function stringToArray(str) {
    return str.split(/\s+/).filter(word => word.length > 0);
}

console.log(stringToArray("ISET Tataouine 2023 Groupe1er"));
// Write a JavaScript function to extract a specified number of characters from a string
function extractString(str1, length) {
    return str1.substring(0, length);
}

console.log(extractString("Robin Singh", 4));     
console.log(extractString("ISET Tataouine", 7));  
//# 5 # Write a JavaScript function to hide email addresses to protect from unauthorized user
function protectEmail(user_email) {
    var atIndex = user_email.indexOf('@');
    var visiblePart = user_email.substring(0, atIndex);
    var hiddenPart = user_email.substring(atIndex);
    var visibleLength = Math.min(4, visiblePart.length); 
    var visible = visiblePart.substring(0, visibleLength);
    var hidden = '...';
    return visible + hidden + hiddenPart;
}

console.log(protectEmail("isettataouine@gmail.com")); 
