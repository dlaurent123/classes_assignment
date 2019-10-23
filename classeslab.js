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
// console.log(dog1.feed())



// Question 4



let freezingPoint = {celsius : 0, fahrenheit : 32 , kelvin : 273}

class Celsius {
    constructor(celsius){
        this.celsius = celsius
       
    }
    getFahrenheitTemp(){
         return (1.8 * this.celsius) + 32
    }
    getKelvinTemp(){
        return this.celsius + freezingPoint["kelvin"]
    }
    isBelowFreeze(){
      
      if  (this.getFahrenheitTemp < freezingPoint["fahrenheit"]){
          return true
      } else {
          return false

      }
      }
          
      }
      
 

let outsideTemp = new Celsius(10)
// console.log(outsideTemp.celsius)
// console.log(outsideTemp.getKelvinTemp())
// console.log(outsideTemp.isBelowFreeze())


// Question 5

class Movie {
    constructor(name,year,genre,cast,description){
        this.name  =  name
        this.year  =  year
        this.genre =  genre
        this.cast  =  cast
        this.description = description

    }
    blurb(){
        return this.name + ' came out in ' + this.year + '.' + ' It was an old film starring ' + this.cast + ' and is ' + this.description + '.'
    }
}

let movie1 = new Movie('Holes','2006','Thriller','Shia Lebuff','Very Good Movie')
// console.log(movie1.blurb());



// Question 6

class Vector {
    constructor(x,y){
        this.x = x
        this.y = y
    }
    plus(vector){
        let x = this.x + vector['x']
        let y = this.y + vector['y']
        return {x,y}
    }
    minus(vector){
        let x = this.x - vector['x']
        let y = this.y - vector['y']
        return {x,y}
    
    }


}
let v1 = new Vector(1,2)
let v2 = new Vector(3,4)
console.log(v1.plus(v2))

