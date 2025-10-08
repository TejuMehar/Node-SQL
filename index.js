const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const fs = require('fs');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',       
  database: 'studentdb',
  port: 3307           
});

const schema = fs.readFileSync('schema.sql', 'utf-8');

//Inserting a New Data
let q = "INSERT INTO users (username, email, password) VALUES ?";
let users = [
  ["123_newuserb","123@gmail.comb","123b"],
  ["123_newuserc","123@gmail.comc","123c"],
  ["123_newuserd","123@gmail.comd","123d"]

];

try{
 connection.query(q,[users],(err, results) => {
  if (err) {
    console.error("Error executing query:", err);
    return;
  }
    console.log("Tables in the database:", results);    
    connection.end();
}
);
}catch(err){
  console.error("Error during database operation:", err);
}



// let getRandomUser = ()=> {
//   return {
//     id: faker.string.uuid(),
//     username: faker.internet.username(),
//     email: faker.internet.email(),
//     password: faker.internet.password()
//   };
// }

//     console.log(getRandomUser());