const express = require('express');
const port = 9000;
const app = express();
const path = require('path');
const db = require('./config/mongoose');
const passport = require('passport');
const session = require('express-session');
const passportJwt = require('./config/passport-jwt');
app.use('/uploads', express.static(path.join(__dirname, ('uploads'))));


app.use(session({
	name: "project",
	secret: "api",
	saveUninitialized: true,
	resave: true,
	cookie: {
		maxAge:1000*60*60*24
	}
}))
app.use(passport.session());
app.use(passport.initialize());
app.use(express.urlencoded());
app.use('/', require('./routes'));

app.listen(port, (err) => {
	if (err) {
		console.log(err);
		return false;
	}
	console.log("Server is start");
})