function matchPhoneNumber(input) {

    let pattern = /\+([359]+)([- ])2(\2)(\d{3})(\2)(\d{4})\b/g;
    let validPhones = [];

    let phone = pattern.exec(input);
    while (phone !== null) {
        validPhones.push(phone[0]);
        phone = pattern.exec(input);
    }

    console.log(validPhones.join(", "));
}

matchPhoneNumber(
    [
        '+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'
    ]

)