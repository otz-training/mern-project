let app = new class {
    constructor(a,b) {
        this.a = a;
        this.b = b;
    }
    start() {
        console.log(`Starting the ${this.a}...${this.b}`);
    }
}(5,8);

app.start(); // Starting the Awesome App...