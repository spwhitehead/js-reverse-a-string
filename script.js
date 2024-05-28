const reverseString = () => {
    let string = prompt("Enter a string:");
    let newString = "";
    for (let i = string.length -1; i >= 0; i--) {
        newString += string[i]
    }

    console.log(newString)
    document.getElementById("output").innerHTML +=
    "<p>" + newString + "</p>"
};