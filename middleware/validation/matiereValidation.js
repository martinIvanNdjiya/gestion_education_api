const {check, validationResult} = require('express-validator')

// Règles de validation des champs de la matière
exports.matiereValidation= [
    check('nom')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Le champ nom ne doit pas être vide!')
    .isLength({min:5})
    .withMessage('Le champ nom doit avoir plus de 5 caractères!'),
    check('description')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Le champ description ne doit pas être vide!')
    .isLength({min:20})
    .withMessage('Le champ description doit avoir plus de 20 caractères!'),
];

exports.matiereValidationError = (req, res, next) =>{
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
