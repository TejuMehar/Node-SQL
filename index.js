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

let q = "INSERT INTO users (username, email, password) VALUES (?,?,?,?)";
let user = ["123","123_newuser","123@gmail.com","123"]

try{
 connection.query(q,user,(err, results) => {
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