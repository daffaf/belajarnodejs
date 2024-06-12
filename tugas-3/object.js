let person = 
{
    name : "John",
    age : 30
}
person.occupation = "developer"
console.log(person)

let people = [{name : "daffa" , age : 24 },{name : "john", age : 30}, {name: "doe", age : 35}]
let result = people.filter((peoples)=>peoples.age > 25)
console.log(result)