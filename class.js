class Person {
    constructor(fname,lname) {
        this.firstName = fname;
        this.lastName = lname;
    }
    getFirstName()
    {
        return this.firstName;
    }
    setFirstName(fname)
    {
        this.firstName = fname;
    }
}

let person = new Person("John");
console.log(person.getFirstName()); // John
person.setFirstName("Devise");
console.log(person.getFirstName());