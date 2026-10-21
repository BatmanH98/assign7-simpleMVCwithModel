// Simulated database

const mysql = require("mysql2");

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'assignDBuser',
	password: 'assignDBpass',
	database: 'assignDB'
})

function getUsers(callback) {
	
	connection.query("SELECT * FROM users", function(err, results) {
		if (err) {
			return callback(err, null);
		}
		
		callback(null, results);
	});
}

function addUser(user, callback) {
	
	connection.query("INSERT INTO users (fname, lname, username, passwd) VALUES (?, ?, ?, ?)", 
	[user.fname, user.lname, user.username, "IDKWHATTODOABTTHISLAMEASSPASSWORD"], 
	
	function(err, result) {
		
		if (err){
			return callback(err, null);
		}
		
		user.id = result.inserID;
		callback(null, user);
	});
}

/*const users = [
  { "id": 1, "fname": "Jim", "lname": "Smith", "username": "jsmith" },
  { "id": 2, "fname": "Jack", "lname": "Kennedy", "username": "jkennedy" },
  { "id": 3, "fname": "Linda", "lname": "Nelson", "username": "lnelson" },
  { "id": 4, "fname": "Kayli", "lname": "Williams", "username": "kwilliams" },
  { "id": 5, "fname": "Seth", "lname": "Walters", "username": "swalters" },
  { "id": 6, "fname": "Brandon", "lname": "Jones", "username": "bjones" },
  { "id": 7, "fname": "Ally", "lname": "Smith", "username": "asmith" },
  { "id": 8, "fname": "Jordan", "lname": "Wilson", "username": "jwilson" }
];*/

module.exports = { getUsers, addUser };