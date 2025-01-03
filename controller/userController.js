const db = require('../db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secretKey = 'TP4-AB3-M34BS0';

// Route d'inscription
exports.signup = async (req, res) => {
    try {
      const { username, email, password } = req.body;
  
      // Vérififer si l'utilisateur existe déjè 
      const user = await getUserByUser(username);
      if (user) {
        return res.status(400).json({ message: 'User already exists' });
      }
  
      // Hasher le mot de passe
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Enregistrer l'utilisateur dans la base de données
      await insertUser(username, email, hashedPassword);
      res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    }
  };

  exports.login =  async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Récupérer l'utilisateur depuis la base de données
      const user = await getUserByEmail(email);
      if (!user) {
        return res.status(401).json({ message: 'User not found' });
      }
  
      // Vérifier le mot de passe
      if (!(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: 'Invalid password' });
      }
  
      // Générer un token JWT
      let expires = 12000;
      const token = jwt.sign({ email }, secretKey, { expiresIn: expires });

       //Pour TP...
    // Obtenir la date actuelle
        const now = new Date();

    // Calculer la date d'expiration
        const expirationDate = new Date(now.getTime() + expires * 1000);

    // Convertir l'expiration en secondes
        const expiresInSeconds = Math.floor(expires);
      

        res.json({ message: 'Login successful', token: token, expiresIn: expiresInSeconds, expirationTime: expirationDate.toLocaleTimeString() });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    }
};



  // Fonction pour récupérer un utilisateur par nom d'utilisateur
function getUserByUser(username) {
    return new Promise((resolve, reject) => {
      db.get('SELECT * FROM Users WHERE username = ?', [username], (err, row) => {
        if (err) {
          reject(err);
        } else {
          resolve(row);
        }
      });
    });
  }

    // Fonction pour récupérer un utilisateur par l'email de l'utilisateur
function getUserByEmail(email) {
  return new Promise((resolve, reject) => {
    db.get('SELECT * FROM Users WHERE email = ?', [email], (err, row) => {
      if (err) {
        reject(err);
      } else {
        resolve(row);
      }
    });
  });
}


// Fonction pour insérer un utilisateur dans la base de donnÃ©es
function insertUser(username, email, password) {
      return new Promise((resolve, reject) => {
        db.run('INSERT INTO Users (username, email, password) VALUES (?, ?, ?)', [username, email, password], (err) => {
          if (err) {
              reject(err);
            } else {
              resolve();
            }
          });
        });
      }
      
     
