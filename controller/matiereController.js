const db = require('../db');

exports.addMatiere = async (req, res) => {
    try {
        const {nom, description} = req.body  

        // Enregistrer la matière 
        await insertMatiere(nom, description);
        //--
        res.status(201).json({ message: 'Course created successfully' });
    
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: 'Erreur lors de l\'ajout des matières. ' })
    }
}

function insertMatiere(nom, description) {
    return new Promise((resolve, reject) => {
    db.run('INSERT INTO Matiere (nom, description) VALUES (?, ?) ', [nom, description], (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

exports.getAllMatieres = async (req, res) => {
    try { 
        const matieres = await allMatieres()
        res.status(200).json({ matieres });
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: 'Erreur lors de la récupération des matières. ' })
    }
  }
    
  
function allMatieres() {
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM Matiere ', (err, row) => {
        if (err) {
            reject(err);
        } else {
            resolve(row);
        }
        });
    });
}

exports.getMatiereById = async (req, res) => {
    try { 
        const matiere_id = req.params.id
        const matiere = await matiereById(matiere_id)
        res.status(200).json({ matiere });
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: 'Erreur lors de la récupération de la matière. ' })
    }
  }
    
  
function matiereById(matiere_id) {
    return new Promise((resolve, reject) => {
        db.get('SELECT nom, description FROM Matiere where id = ?', [matiere_id], (err, row) => {
        if (err) {
            reject(err);
        } else {
            resolve(row);
        }
        });
    });
}

exports.modificationMatiereById = async (req, res) => {
    try { 
        const matiere_id = req.params.id
        const {nom, description} = req.body
        await modifMatiereById(nom, description, matiere_id)
        res.status(201).json({ sucess: `La matière ${matiere_id} a été modifié avec succès!` })
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: `Erreur lors de la modification du client ${matiere_id}! ` })
    }
  }
    
  
function modifMatiereById(nom, description, matiere_id) {
    return new Promise((resolve, reject) => {
        db.run('UPDATE Matiere set nom = ?, description = ? where id = ?', [nom, description, matiere_id], (err, row) => {
        if (err) {
            reject(err);
        } else {
            resolve(row);
        }
        });
    });
}

exports.supprimerMatiereById = async (req, res) => {
    try { 
        const matiere_id = req.params.id
        await suppMatiereById(matiere_id)
        res.status(201).json({ sucess: `La matière ${matiere_id} a été supprimé avec succès!` })
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: `Erreur lors de la modification de la matière ${matiere_id}! ` })
    }
  }
    
  
function suppMatiereById(matiere_id) {
    return new Promise((resolve, reject) => {
        db.run('DELETE FROM Matiere where id = ?', [matiere_id], (err, row) => {
        if (err) {
            reject(err);
        } else {
            resolve(row);
        }
        });
    });
}

