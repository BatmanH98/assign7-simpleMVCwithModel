// Simulated database
const users = [
  { "id": 1, "fname": "Jim", "lname": "Smith", "username": "jsmith" },
  { "id": 2, "fname": "Jack", "lname": "Kennedy", "username": "jkennedy" },
  { "id": 3, "fname": "Linda", "lname": "Nelson", "username": "lnelson" },
  { "id": 4, "fname": "Kayli", "lname": "Williams", "username": "kwilliams" },
  { "id": 5, "fname": "Seth", "lname": "Walters", "username": "swalters" },
  { "id": 6, "fname": "Brandon", "lname": "Jones", "username": "bjones" },
  { "id": 7, "fname": "Ally", "lname": "Smith", "username": "asmith" },
  { "id": 8, "fname": "Jordan", "lname": "Wilson", "username": "jwilson" }
];

function getUsers(callback) {
  setTimeout(function () {
    callback(users);
  }, 1000);
}

function addUser(user, callback) {
  setTimeout(function () {
    user.id = users.length + 1;
    users.push(user);
    callback(user);
  }, 500);
}

module.exports = { getUsers, addUser };