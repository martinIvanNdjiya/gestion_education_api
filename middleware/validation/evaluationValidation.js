const {check, validationResult} = require('express-validator')

// Règles de validation des champs de l'évaluation
exports.evaluationValidation= [
    check('note')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Le champ note ne doit pas être vide!')
    .isFloat({min:0})
    .withMessage('La note doit être un nombre ou un nombre supérieur à 0 !'),   
    check('date_evaluation')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Le champ date_evaluation ne doit pas être vide!')
    .isISO8601('yyyy-mm-dd')
    .withMessage('The date of the evaluation must be in correct format yyyy-mm-dd ! ')   
];

exports.evaluationValidationError = (req, res, next) =>{
    const result = validationResult(req).array();
    console.log(result);

    if(!result.length) {
        return next();
    }
    else{
    const error = result[0].msg;
    res.status(400).json({message: error})
    }
}