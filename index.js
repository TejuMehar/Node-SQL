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

let getRandomUser = ()=> {
  return [
   faker.internet.username(),
   faker.internet.email(),
   faker.internet.password()
  ];
}


//Inserting a New Data
let q = "INSERT INTO users (username,email,password) VALUES ?";

let data = [];


for(let i=0;i<100;i++){
data.push(getRandomUser());
}

try{
 connection.query(q,[data],(err, results) => {
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
