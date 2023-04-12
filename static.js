class Person {
	constructor(name) {
		this.name = name;
	}
	getName() {
		return this.name;
	}
	static createAnonymous(gender) {
		let name = gender == "male" ? "John Doe" : "Jane Doe";
		return new Person(name);
	}
}

let anonymous = Person.createAnonymous("male");
console.log(anonymous.getName());

let obj = new Person("Rahul");
console.log(obj.getName());
console.log(obj.createAnonymous("male"));