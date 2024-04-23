const {
    check
} = require('express-validator');


const registrationValidation = [
    check('name', 'Nom requis').not().isEmpty(),
    check('email', 'Besoin email valide').isEmail().normalizeEmail({
        gmail_remove_dots: true
    }),
    check('password', 'Password plus de 8 caractères et alphanumérique').isLength({
        min: 6
    })
];


exports.registrationValidation = registrationValidation