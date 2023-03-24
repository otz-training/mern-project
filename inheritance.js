let person = {
    name: "John Doe",
    greet: function () {
        return "Hi, I'm " + this.name;
    }
};

let teacher = {
    subject:"Javascript",
    teach: function (subject) {
        this.subject = subject;
        return "I can teach " + this.subject;
    }
};

let student = {
    
    read: function (subject) {
        this.subject = subject;
        return "I am reading  "  + this.subject;
    }
};
teacher.__proto__ = person;
student.__proto__ = teacher;
console.log(person.__proto__ === Object.prototype);

console.log(person.__proto__ === teacher.__proto__);
console.log(person.greet());
console.log(teacher.greet());
console.log(student.read("abc"));
console.log(teacher.subject);
console.log(student.greet());