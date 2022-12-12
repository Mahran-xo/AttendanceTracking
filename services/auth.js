const UserModel = require('../models/User');





module.exports.AddUser=async(UserInfo)=>{

    try{
        let hashedPassword = await bcrypt.hash(UserInfo.password,12);

        const User = new UserModel({
            name: UserInfo.name,
            password :UserInfo.password,
            email: UserInfo.email})

        const addedUser = await User.save();
        return addedUser;
    }catch(error){
        console.log(error);
        throw new Error('Could not add User');
    }

   
};

module.exports.doesUserExist=async(username)=>{
    const existingUser = await UserModel.findOne({
        username:username
    });
    try{
        let hashedPassword = await bcrypt.hash(UserInfo.password,12);

        const User = new UserModel({
            name: UserInfo.name,
            password :UserInfo.password,
            email: UserInfo.email})

        const addedUser = await User.save();
        return addedUser;
    }catch(error){
        console.log(error);
        throw new Error('Could not add User');
    }

   
}