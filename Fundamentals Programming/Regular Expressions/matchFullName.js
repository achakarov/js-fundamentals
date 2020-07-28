function matchFullName(input) {

    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    let validNames = [];

    let name = pattern.exec(input);
    while (name !== null) {
        validNames.push(name);
        name = pattern.exec(input);
    }

    console.log(validNames.join(" "));
}

matchFullName(
    [
        'Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan\tIvanov'
    ]
)