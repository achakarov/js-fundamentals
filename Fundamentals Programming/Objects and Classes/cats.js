function cats (input) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age; 
        }

        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`);
            
        }
    }

    let cats = [];

    for (let i = 0; i < input.length; i++) {
        
        let [name, ageText] = input[i].split(" ");

        let cat = new Cat(name, Number(ageText)); 
        cats.push(cat); 
        
    }

    // for (let cat of cats) {
    //     cat.meow(); 
    // }

    cats.forEach(x => x.meow()); 

}

cats(['Mellow 2', 'Tom 5'])