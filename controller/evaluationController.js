const db = require('../db');

exports.insertEvaluation = async (req, res) => {
    try {
        const {user_id, matiere_id, note, date_evaluation} = req.body  

        // Enregistrer l'idée de l'utilisateur authentifié
        await insertEvaluation(user_id, matiere_id, note, date_evaluation);
        //--
        res.status(201).json({ message: 'Evaluation created successfully' });
    
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: 'Erreur lors de l\'ajout des évaluaations de l\'utilisateur. ' })
    }
}

function insertEvaluation(user_id, matiere_id, note, date_evaluation) {
    return new Promise((resolve, reject) => {
    db.run('INSERT INTO Evaluation (user_id, matiere_id, note, date_evaluation) VALUES (?, ?, ?, ?) ', [user_id, matiere_id, note, date_evaluation], (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

exports.getEvaluationByIdUser =  async (req, res) => {
  try { 
      const user_id = req.params.user_id
      const evaluations = await getEvaluationByIdUser(user_id)
      res.status(200).json({ evaluations });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Erreur lors de la récupération des évaluations des utilisateurs. ' })
  }
}
  

function getEvaluationByIdUser(user_id) {
  return new Promise((resolve, reject) => {
    db.all('SELECT user_id, matiere_id, note, date_evaluation FROM Evaluation where user_id = ? ', [user_id], (err, row) => {
      if (err) {
        reject(err);
      } else {
        resolve(row);
      }
    });
  });
}

exports.modificationEvaluationById =  async (req, res) => {
  try { 
      const user_id = req.params.user_id
      const {matiere_id, note, date_evaluation} = req.body
      await modificationEvaluationByIdUser(user_id, matiere_id, note, date_evaluation)
      res.status(201).json({ sucess: `L\'id ${user_id} de la matière ${matiere_id} a été modifié avec succès!` })
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: `Erreur lors de la modification de l\'utilisateur ${user_id}! ` })
  }
}
  
function modificationEvaluationByIdUser(user_id, matiere_id, note, date_evaluation) {
  return new Promise((resolve, reject) => {
    db.get('UPDATE Evaluation set matiere_id = ?, note = ?, date_evaluation = ? where user_id = ?', [matiere_id, note, date_evaluation, user_id], (err, row) => {
      if (err) {
        reject(err);
      } else {
        resolve(row);
      }
    });
  });
}

exports.supprimerEvaluationById = async (req, res) => {
  try { 
      const user_id = req.params.id
      await supprimerEvaluationById(user_id)
      res.status(201).json({ sucess: `L\'évaluation de l\'utilisateur ${user_id} a été supprimé avec succès!` })
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: `Erreur lors de la suppression de l\'utilisateur ${user_id} ! ` })
  }
}
  

function supprimerEvaluationById(user_id) {
  return new Promise((resolve, reject) => {
      db.get('DELETE FROM Evaluation where user_id = ?', [user_id], (err, row) => {
      if (err) {
          reject(err);
      } else {
          resolve(row);
      }
      });
  });
}
