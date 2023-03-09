
/*get the number of characters*/

function charLength() {
    let charLength = document.getElementById('length').value;
    document.getElementById('result').innerHTML = charLength;
}

document.getElementById('length').addEventListener('change', charLength);

let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";

function generate_characters(length){
    let password = "";
    let characters_length = characters.length;
    for (let i=0; i<length; i++){
        password += characters.charAt(Math.floor(Math.random() * characters_length));
    }
    return password
}





