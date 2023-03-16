let cities = [
    {name: 'Los Angeles', population: 3792621},
    {name: 'New York', population: 8175133},
    {name: 'Chicago', population: 2695598},
    {name: 'Houston', population: 2099451},
    {name: 'Philadelphia', population: 1526006}
];

let bigCities = [];
for (let i = 0; i < cities.length; i++) {
    if (cities[i].population > 3000000) {
        bigCities.push(cities[i]);
    }
}
console.log(bigCities);

bigCities = cities.filter(function (e) {
    return e.population > 3000000;
});
console.log(bigCities);

bigCities = cities.filter(city => city.population > 3000000);

console.log(bigCities);


let arr =[1,2,3,4,5,6,7,8,9,10];
let odds = arr.filter(e=>e%2!=0);
console.log(odds);