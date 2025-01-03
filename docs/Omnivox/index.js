const createUser = require('./users/signup');
const loginUser = require('./users/login');

const createMatiere = require('./matiere/addMatiere')
const getMatiereById = require('./matiere/getMatiereById')
const getAllMatieres = require('./matiere/getAllMatires')
const modifMatiereById = require('./matiere/modifMatiereById')
const suppMatiereById = require('./matiere/suppMatirereById')

const createEvaluation = require('./evaluation/addEvaluation')
const getEvaluationByIdUser = require('./evaluation/getEvaluationByIdUser')
const modifEvaluationByIdUser = require('./evaluation/modifEvaluationByIdUser')
const suppEvaluationByIdUser = require('./evaluation/suppEvaluationByIdUser')

module.exports = {
    paths:{
        '/signup':{
            ...createUser,
        },
        '/authentification':{
            ...loginUser,
        },
        
        '/createMatiere':{
            ...createMatiere,
        },
        '/getMatiereById/{id}':{
            ...getMatiereById,
        },
        '/getAllMatieres':{
            ...getAllMatieres,
        },
        '/modifMatiereById/{id}':{
            ...modifMatiereById,
        },
        '/delMatiereById/{id}':{
            ...suppMatiereById,
        },
        
        '/createEvaluation':{
            ...createEvaluation,
        },
        '/getEvaluationByIdUser/{user_id}':{
            ...getEvaluationByIdUser,
        },
        '/modifEvaluationByIdUser/{user_id}':{
            ...modifEvaluationByIdUser,
        },
        '/delEvaluationByIdUser/{user_id}':{
            ...suppEvaluationByIdUser,
        },
   }
}