const {Router} =require('express');

const ModuleController = require('../controllers/Modules');

const ModuleRouter=Router();

ModuleRouter.post('/',ModuleController.postModule);

module.exports=ModuleRouter;