class Animal {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }

    setName = function (str){
        this.name = str;
    }

    setWeight = function (weight) {
        this.weight = weight;
    }

    getName = function () {
        return this.name;
    }

    getWeight = function () {
        return this.weight;
    }

    toString = function () {
        return `name: ${this.name} and weight: ${this.weight} kg`;
    }
}

let objAnimal1 = new Animal();
objAnimal1.setName("Elephant");
objAnimal1.setWeight(45.6);
console.log(objAnimal1.toString());

let objAnimal2 = new Animal("Rat", 2);
console.log(objAnimal2.toString());
objAnimal2.setName("Mouse");
console.log(objAnimal2.toString());