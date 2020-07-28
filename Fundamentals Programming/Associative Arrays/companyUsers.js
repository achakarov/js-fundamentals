function companyUsers(input) {

    let companies = {};

    for (const line of input) {
        let [company, id] = line.split(' -> ');

        if (!companies.hasOwnProperty(company)) {
            companies[company] = new Set();
        }
        companies[company].add(id);
    }

    let sorted = Object.entries(companies).sort((a, b) => a[0].localeCompare(b[0]));

    for (let elem of sorted) {
        console.log(elem[0]);
        for (let number of elem[1]) {
            console.log(`-- ${number}`);
        }
    }
}

companyUsers(
    [
        'SoftUni -> AA12345',
        'SoftUni -> CC12344',
        'Lenovo -> XX23456',
        'SoftUni -> AA12345',
        'Movement -> DD11111'
    ]

)