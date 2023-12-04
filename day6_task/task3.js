class Person {
    constructor(firstName, lastName, age, gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    greet() {
        let prefix = this.gender === "male" ? "Mr." : this.gender === "female" ? "Ms." : "Mx.";
        console.log(`Hello, ${prefix} ${this.lastName}!`);
    }
}

let a = new Person("Ranjith", "Kumar", 22, "male");

console.log("Full Name:", a.getFullName());
console.log("Age:", a.age);
console.log("Gender:", a.gender);

a.greet();
