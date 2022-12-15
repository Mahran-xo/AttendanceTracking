const ModuleModel = require('../models/Module');




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

module.exports.RemoveModule=async(ModuleInfo)=>{

    const ModuleStudent ={ 
        Name: ModuleInfo.moduleName,
        id: StudentInfo.id
    };
        try{
            const removeModule = await ModuleModel.updateOne({_Name:Module.moduleName},
                {$pullAll:{student:[StudentInfo.id]}}
                );

            return removeModule;
            }

        catch(error){
            console.log(error);
            throw new Error('Could not remove Module');
        }

}



module.exports.RetrieveAllModule=async()=>{

    try{
        const Modules = await ModuleModel.find();
        return Modules

        }
        
    
    catch(error){
        console.log(error);
        throw new Error('Could not retrive Modules');
    }


};


  module.exports.updateModule = async (moduleID, assignedProfessor) => {
    try {
      const filter = { moduleID: moduleID };
      const update = { assignedProfessor: assignedProfessor };
      let result = await ModuleModel.findOneAndUpdate(filter, update);
      return result;
    } catch (err) {
      throw new Error('Could not update the assigned professor.');
    }
  };

 


