const people=[
    {
        name:"Alice",
        address:{
            city:"New york",
        street:{name:"BoradWay",number:123}
    }
    },
    {
        name:"Bob",
        address:{
            city:"Los Angeles",
            street:{name:"Sunset Boulevard",number:456}
        }
    }
];
const result= people.map(person=>{
 const name= person.name;
 const city= person.address.city;
 const streetname=person.address.street.name;
return`${name} lives in ${city} on ${streetname}`;
});
console.log(result);