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
// console.log(person1.fullName())


// QUESTION 2


class Book {
    constructor(title,author,rating){
        this.title = title
        this.author = author
        this.rating = rating
    }
    isGood(){
     if (this.rating > 7){
        return true
    } else{
        return false
    }

    }
}

let book1 = new Book("Harry Poter"," J.K Rowling", 10)
let book2 = new Book("A Scarlet Letter", "Nathaniel Hawthhorne", 8)

// console.log(book1.isGood(book1.rating))

//Question 3

class Dog {
    constructor(name, breed, mood, hungry){
        this.name = name
        this.breed = breed
        this.mood = mood
        this.hungry = hungry
    }
    playFetch() {
        this.hungry === true
        this.mood = "playful"
        return "Ruff!"
    }
    feed() {
    if (this.hungry === true){
        return "Woof!"
    } else {
        return "The dog doesn't look hungry"
    }
    }
       
}
let dog1 = new Dog("Spot", "Dalmation", "happy", false)
console.log(dog1.feed())








