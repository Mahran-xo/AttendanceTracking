const ModuleModel = require('../models/Module');
var readline = require('readline');
const {ObjectId} = require('mongoose').Types;



module.exports.AddModule=async(ModuleInfo)=>{

    const Module = new ModuleModel({ 
        moduleName: ModuleInfo.moduleName,
        moduleCode: ModuleInfo.moduleCode,
        assignedProfessor: ModuleInfo.assignedProfessor
     });

    try{
        const addedModule = await Module.save();
        return Module;
    }catch(error){
        console.log(error);
        throw new Error('Could not add Module');
    }

   
}