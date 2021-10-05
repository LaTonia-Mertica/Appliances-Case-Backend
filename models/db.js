// const { Client } = require("pg");
const Sequelize = require("sequelize");

//CODE BELOW ALLOWS BACKEND TO TALK TO FRONTEND
// let db;

// if (process.env.DATABASE_URL) {
//   db = new Client({
//     connectionString: process.env.DATABASE_URL,
//     ssl: {
//       rejectUnauthorized: false,
//     },
//   });
// } else {
//   db = new Client({
//     user: process.env.DATABASE_USER,
//     database: process.env.DATABASE_NAME,
//     password: process.env.DATABASE_PASSWORD,
//     host: process.env.DATABASE_HOST,
//   });
// }

// db.connect();
//CODE ABOVE ALLOWS BACKEND TO TALK TO FRONTEND
let db;
if (process.env.DATABASE_URL) {
  db = new Sequelize(process.env.DATABASE_URL, {
    ssl: {
      rejectUnauthorized: false,
    },
  });
} else {
  db = new Sequelize(`postgres://latoniamertica@localhost:5432/appliances`, {
    logging: false,
  });
}

const Customer = require("./Customer")(db);
const User = require("./User")(db);

const connectToDB = async () => {
  await db.authenticate();
  console.log(`DB Connected Successfully`);

  db.sync();
};

connectToDB();
module.exports = { db, Customer, User };
