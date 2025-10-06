const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',       
  database: 'studentdb',
  port: 3307           
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL Database!");
});

connection.query('SHOW TABLES', (err, results) => {
  if (err) {
    console.error("Error executing query:", err);
    return;
  }
    console.log("Tables in the database:", results);    
    connection.end();
}
);

// let getRandomUser = ()=> {
//   return {
//     id: faker.string.uuid(),
//     username: faker.internet.username(),
//     email: faker.internet.email(),
//     password: faker.internet.password()
//   };
// }

//     console.log(getRandomUser());