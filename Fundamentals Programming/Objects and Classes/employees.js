function employees(array) {

    let employees = {};
    array.forEach(name => {
        employees[name] = name.length;
    });

    for (let name in employees) {
        console.log(`Name: ${name} -- Personal Number: ${name.length}`)
    }
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
)