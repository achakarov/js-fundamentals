function passwordValidator(password) {

    let isLongEnough = false;
    let isNumOrLetter = true;
    let isTwoNumbers = false;
    let digitsCount = 0;

    if (password.length < 6 || password.length > 10) {
        console.log("Password must be between 6 and 10 characters");
    } else {
        isLongEnough = true;
    }

    for (let i = 0; i < password.length; i++) {
        let currentChar = String(password[i]);

        if (currentChar.charCodeAt(0) > 47 && currentChar.charCodeAt(0) < 58) {
            digitsCount++;
        }

        if ((currentChar.charCodeAt(0) < 48) || (currentChar.charCodeAt(0) > 57 && currentChar.charCodeAt(0) < 65) ||
            (currentChar.charCodeAt(0) > 90 && currentChar.charCodeAt(0) < 97) || (currentChar.charCodeAt(0) > 122)) {
            console.log("Password must consist only of letters and digits");
            isNumOrLetter = false;
            break;
        }
    }

    if (digitsCount > 1) {
        isTwoNumbers = true;
    } else {
        console.log("Password must have at least 2 digits");
    }

    if (isLongEnough && isNumOrLetter && isTwoNumbers) {
        console.log("Password is valid");
    }
}

passwordValidator('123klouio12@123')