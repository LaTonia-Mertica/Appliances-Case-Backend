const server = require("express")();
server.use(require("body-parser").json());
server.use(require("cors")());

// const addTimeMiddleware = (req, res, next) => {
//   res.locals.requestTime = new Date();
//   next();
// };
//server.use(addTimeMiddleWare);

// const { db, Customer, User } = require("./models/db.js");
// const Op = require("sequelize").Op;

// const isLoggedInMiddleware = async (req, res, next) => {
//   if (!req.headers.email || !req.headers.password) {
//     res.send({ error: "Authentication Criteria Must Be Met!" });
//   } else {
//     const userDB = await User.findOne({ where: { email: req.headers.email } });
//     if (!userDB) {
//       res.send({ error: "No User Known to Exist at That Email Address!" });
//     } else {
//       if (userDB.password === req.headers.password) {
//         res.locals.user = userDB;
//         next();
//       } else {
//         res.send({ error: "Password Not a Match to User Account!" });
//       }
//     }
//   }
// };

server.get("/", (req, res) => {
  res.send({ hello: "world" });
});

// server.get("/customers/:pageNum", isLoggedInMiddleware, async (req, res) => {
//   const page = parseInt(req.params.pageNum);
//   if (page <= 0) {
//     res.send({
//       customers: await Customer.findAndCountAll({
//         limit: 5,
//       }),
//     });
//   } else {
//     res.send({
//       customers: await Customer.findAndCountAll({
//         limit: 5,
//         offset: 5 * (page - 1),
//       }),
//     });
//   }
// });

// server.post("/customers", isLoggedInMiddleware, async (req, res) => {
//   if (req.body.zipCode.length !== 5) {
//     res.send({ error: "Zip Code Too Short!" });
//   } else {
//     await Customer.create(req.body);
//     res.send({ customers: await Customer.findAll() });
//   }
// });

// server.post(`/customersSearch`, async (req, res) => {
//   res.send({
//     customers: await Customer.findAll({
//       where: {
//         [Op.or]: {
//           firstName: { [Op.iLike]: `%${req.body.searchQuery}%` },
//           lastName: { [Op.iLike]: `%${req.body.searchQuery}%` },
//         },
//       },
//     }),
//   });
// });

// server.post(`/login`, async (req, res) => {
//   const userDB = await User.findOne({ where: { email: req.headers.email } });
//   console.log(userDB);

//   if (!userDB) {
//     res.send({ error: "No User Known to Exist at That Email Address!" });
//   } else {
//     if (userDB.password === req.headers.password) {
//       res.send({ success: true });
//     } else {
//       res.send({ error: "Password Not a Match to User Account!" });
//     }
//   }
// });

let port = process.env.PORT;
if (!port) {
  port = 3001;
}

server.listen(port, () => {
  console.log(`Server Listening on Port ${port}`);
});
