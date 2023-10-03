// Importing required modules and dependencies
const express = require("express");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const routes = require("./controllers");
const sequelize = require("./config/connection");
const exphbs = require("express-handlebars");
const hbs = exphbs.create({ helpers: require("./utils/helpers") });


const app = express();
const PORT = process.env.PORT || 3001;

// Sess for sesh 
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

// middleware for session object
app.use(session(sess));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// Using session middleware again with a different session object
// app.use(
//   session({
//     secret: process.env.SECRET,
//     store: new SequelizeStore({ db: sequelize }),
//     resave: false,
//     saveUninitialized: false,
//   })
// );

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Listening at ${PORT}`));
});
