const sqlite3 = require('sqlite3').verbose();
// Création d'une instance de base de données SQLite3
const db = new sqlite3.Database('./database.sqlite');
// Création de la base de données "Users", "Evaluations", "Matiere"
db.serialize(() => {
    db.run('CREATE TABLE IF NOT EXISTS Users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT UNIQUE, email TEXT UNIQUE, password TEXT)');
    db.run('CREATE TABLE IF NOT EXISTS Matiere (id INTEGER PRIMARY KEY AUTOINCREMENT, nom text not null, description text not null)');
    db.run('CREATE TABLE IF NOT EXISTS Evaluation (id INTEGER PRIMARY KEY AUTOINCREMENT, user_id integer, matiere_id integer, note real not null, date_evaluation date not null, foreign key(user_id) references Users(id), foreign key(matiere_id) references Matiere(id))');
});

module.exports = db
