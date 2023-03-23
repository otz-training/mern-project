let person = {
    firstName: 'John',
    lastName: 'Doe',
    greet (firstName,lastName) {
        console.log(firstName +' '+lastName);
        console.log(this.firstName +' '+this.lastName);
    }
};

console.log(person);
console.log(person.greet);
person.greet('Ram','Charan');