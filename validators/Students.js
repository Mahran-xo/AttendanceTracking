const{check} = require('express-validator');

module.exports.validateStudents=()=>{
    const validationMiddlewares=[
        check('name').notEmpty().withMessage('Student name cannot be empty'),
        check('id').notEmpty().withMessage('Student id cannot be empty'),
        check('email').isEmail().withMessage('Student email is invalid'),
    ];
return validationMiddlewares;
};