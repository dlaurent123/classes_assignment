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
    isGood(rating){
     if (rating > 7){
        return true
    } else{
        return false
    }

    }
}

let book1 = new Book("Harry Poter"," J.K Rowling",5)
let book2 = new Book("A Scarlet Letter", "Nathaniel Hawthhorne", 8)

// console.log(book1.isGood(book1.rating))

