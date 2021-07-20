function getInput() {
    document.getElementById("alert").classList.add("invisible");
    let input = document.getElementById("userString").value;

    displayResult(input);
}

function preparePhrase(input)
{
    input = input.toLowerCase(); // Lowercase
    input = input.replace(/\W/g, ''); // Remove non-alpha
    
    return input;
}

function isPalindrome(input) {

    input = preparePhrase(input);
    let original = input;

    input = input.split("").reverse().join(""); // Reverse

    if(input == original) {
        return true;
    }

    return false;
}

function displayResult(input) {

    let palindrom = isPalindrome(input);
    let messageHeader = "You didn't enter a palindrome!"
    let message = "";

    if(palindrom) {
        if(input == "") {
            message = "I guess an empty string is a palindrome! "
        }
        messageHeader = "Well Done! You entered a palindrome!"
    }

    message += `Your phrase reversed is: ${preparePhrase(input).split("").reverse().join("")}`;

    document.getElementById("resultHeader").innerHTML = messageHeader;
    document.getElementById("msg").innerHTML = message;
    document.getElementById("alert").classList.remove("invisible");
}