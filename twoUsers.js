// write a program to display two users with same properties but different values (use function to display information)

function createUser(firstName, lastName, age, occupation) { // takes 4 parameters
    return {
      firstName: firstName,
      lastName: lastName,
      age: age,
      occupation: occupation
    };
  }
const user1 = createUser("John", "Doe", 30, "Engineer");
const user2 = createUser("Nida", "Khan", 20, "Designer");

// console.log(user1);
console.log(user2);