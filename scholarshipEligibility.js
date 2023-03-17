let students =[
    {
        "name":"Alok",
        "percentage":60
    },
    {
        "name":"Ramesh",
        "percentage":30
    },
    {
        "name":"Rajesh",
        "percentage":80
    },
    {
        "name":"Haripada",
        "percentage":90
    },
    {
        "name":"Partha",
        "percentage":60
    }
];


let res = students.every(s=>s.percentage >=60);

if(res===true)
{
    console.log("this class is eligible for scholarship");
}else{
    console.log("this class is not eligible for scholarship");
}