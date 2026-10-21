const express = require('express');
const userDB = require('./models/userDB');

const app = express();
const PORT = 3000;

// ** Middleware **
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");


// ** Routes ***
app.get("/", function (req, res) {
    userDB.getUsers(function (err, data) {
		
		if (err){
			console.error(err);
			return res.status(500).send("DB ERR");
		}
		
        console.log(data);
        res.render("manageUsers", { users: data });
    });
});



app.post("/users", function (req, res) {
    userDB.addUser(req.body, function (err, data) {
		
		if (err){
			console.error(err);
			return res.status(500).send("DB ERR");
		}
		
        console.log(data);
        res.redirect("/");
    });
});


app.listen(PORT, function () {
    console.log(`Listening on Port: ${PORT}`);
});
