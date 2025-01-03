const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Controllers
const {signup, login} = require('./controller/userController')
const {insertEvaluation, getEvaluationByIdUser, modificationEvaluationById, supprimerEvaluationById} = require('./controller/evaluationController') 
const {addMatiere, getAllMatieres, getMatiereById, modificationMatiereById, supprimerMatiereById } = require('./controller/matiereController')

// Middlewares
const { userValidationSignup, userValidationLogin, userValidationError}  = require('./middleware/validation/userValidation')
const { matiereValidation, matiereValidationError } = require('./middleware/validation/matiereValidation')
const { evaluationValidation, evaluationValidationError } = require('./middleware/validation/evaluationValidation')

// Authentification
const auth = require('./middleware/auth/auth')

//OpenAPI
const swaggerUI = require ('swagger-ui-express');
const docs = require('./docs');
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(docs));

// Route d'inscription
app.post('/signup', userValidationSignup, userValidationError, signup)

// Route de connexion
app.post('/authentification', userValidationLogin, userValidationError, login)


app.post('/createMatiere', auth.authentification, matiereValidation, matiereValidationError, addMatiere)

app.get('/getMatiereById/:id', getMatiereById)

app.get('/getAllMatieres', getAllMatieres)

app.put('/modifMatiereById/:id', auth.authentification, matiereValidation, matiereValidationError, modificationMatiereById)

app.delete('/delMatiereById/:id', auth.authentification, supprimerMatiereById)


app.post('/createEvaluation', auth.authentification, evaluationValidation, evaluationValidationError, insertEvaluation)

app.get('/getEvaluationByIdUser/:user_id', getEvaluationByIdUser)

app.put('/modifEvaluationByIdUser/:user_id', auth.authentification, evaluationValidation, evaluationValidationError, modificationEvaluationById)

app.delete('/delEvaluationByIdUser/:user_id', auth.authentification, supprimerEvaluationById)


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
