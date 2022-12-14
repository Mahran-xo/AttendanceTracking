const StudentModel = require('../models/Student');
const ModuleModel=require('../models/Module');




module.exports.AddStudent=async(StudentInfo)=>{

    const Student = new StudentModel({
         name: StudentInfo.name,
         id: StudentInfo.id,
         email: StudentInfo.email})

    try{
        const addedStudent = await Student.save();
        return Student;
    }catch(error){
        console.log(error);
        throw new Error('Could not add student');
    }

   
}

module.exports.AssignStudentToModule=async(StudentInfo)=>{

    const Student ={ 
        id: StudentInfo.id,
        module:StudentInfo.module
    };


        try{

            const assignedStudent = await StudentModel.updateOne({_id:Student.id},

                {$push:{module:Student.module}}


                );

            const assignedMod = await ModuleModel.updateOne({_id:Student.module},

                {$push:{student:{studentId:Student.id}}}
                
                
                );


            return assignedStudent;

            }
            
        
        catch(error){
            console.log(error);
            throw new Error('Could not assign student');
        }


}



module.exports.findStudentById = async (StudentId) => {
    try {
      const student = await StudentModel.findById(StudentId).populate(
        'module'
      );
      return student;
    } catch (err) {
      throw new Error('Could not find student.');
    }
  };


module.exports.RemoveStudentFromModule=async(StudentInfo)=>{

    const Student ={ 
        id: StudentInfo.id,
        module:StudentInfo.module
    };
        try{
            const removedStudent = await StudentModel.updateOne({_id:Student.id},
                {$pullAll:{module:[Student.module]}}
                );

            const removedMod = await ModuleModel.updateOne({_id:Student.module},
                {$pullAll:{studentId:[Student.id]}}
                );

            return removedStudent;
            }

        catch(error){
            console.log(error);
            throw new Error('Could not remove student');
        }

}

module.exports.RetrieveAllStudents=async()=>{

        try{
            const Students = await StudentModel.find();
            return Students

            }
            
        
        catch(error){
            console.log(error);
            throw new Error('Could not retrive students');
        }


};










