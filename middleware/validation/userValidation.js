const {check, validationResult} = require('express-validator')

// Règles de validation des champs de la création du compte de l'utilisateur
exports.userValidationSignup= [
    check('username')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Le champ username doit pas etre vide!!')
    .isLength({min:4, max:20})
    .withMessage('Le champ username doit etre compris entre 4 a 20 caractere!'),
    check('email')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Email is empty')
    .isEmail()
    .withMessage('Email must be respect the standard form: "abc123@exemple.com" !'),
    check('password')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Password is empty')
    .isLength({min:8, max:20})
    .withMessage('Password must be within 8 to 20 characters!')
    .matches( /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/,)
    .withMessage('Password must have at least one lower case and at least one special character!'),
];

// Règles de validation des champs de la connexion de l'utilisateur
exports.userValidationLogin = [
    check('email')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Email is empty')
    .isEmail()
    .withMessage('Email must be respect the standard form: "abc123@exemple.com" !'),
    check('password')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Password is empty')
]

exports.userValidationError = (req, res, next) =>{
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
