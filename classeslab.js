//Question 1a

class Person{
    constructor(firstName, lastName, middleName){
        this.firstName = firstName
        this.lastName = lastName
        this.middleName = middleName
    }
    fullName(){
        return this.firstName + " " + this.middleName + " " + this.lastName
    }

}
let person1 = new Person("Cassidy", "Beni", "Ena");
let person2 = new Person("Danny", "Laurent", "Darnell");
//console.log(person1.firstName)
console.log(person1.fullName())

