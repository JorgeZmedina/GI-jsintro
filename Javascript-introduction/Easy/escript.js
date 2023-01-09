let firstName = "Jorge";
let lastName = "Medina";


if (firstName.length > lastName.length) {
    console.log(`The name ${firstName} is longer than ${lastName} by ${firstName.length - lastName.length} characters`);
} 

else if (firstName.length < lastName.length) {
    console.log(`The name ${firstName} is shorter than ${lastName} by ${lastName.length - firstName.length} characters`);
} 

else {
    console.log(`The names ${firstName} and ${lastName} are the same length`);
}