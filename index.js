
class Movie {  

    constructor(title, studio , rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
      }

}


function getPG(movArray){

    return movArray.filter(x=>x.rating=="PG");

}



/* d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13” */

let movie1 = new Movie('Casino Royale',"Eon Productions","PG13");
let movArray = [
    new Movie('Casino Royale',"Eon Productions","PG13"),
    new Movie('Spider-Man: No Way Home',"Eon Productions","5.0"),
    new Movie('No Time To Die',"Eon Productions"),
    new Movie('Encanto',"Eon Productions","3.5"),
    new Movie('A Quiet Place: Part II',"Eon Productions","4.0"),
    new Movie('Our Friend',"Eon Productions"),
    new Movie('Raya And The Last Dragon',"Eon Productions")


];

let PGratedMovies = getPG(movArray);
console.log(PGratedMovies);

/*********************************** */





/*********************************** */



var Person = function (firstname, lastname, age) {
    // Private because of var keyword
    var _firstName = firstname;
    var _lastName = lastname;
    var _age = age;
    
    // Public because of this keyword
    this.setAge = function (age) {
      _age = age;
    };
    
    this.getAge = function () {
     return _age;
    };
    
    var getToStringValue = function () {
     return ["Hi ! I'm ", _firstName, " ", _lastName, " and I'm ", _age, " year old."].join("");
    };
    
    this.toString = function () {
      return getToStringValue();
    };
  };
  
  var yann = new Person("Yannick", "Comte", 0);
  yann.setAge(28);
  yann._age = 45; // Add a property "_age" to the object, not changing the private "_age" variable !
  //yann.getToStringValue(); // Doesn't work because it's private !

  console.log(yann);

 console.log(yann.toString()); // It's good because it's public ;)

 