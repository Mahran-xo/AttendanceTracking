const mongoose = require('mongoose');

const initializeDBConnection = async()=>{


    try{

        await mongoose.connect(process.env.MONGO_CONNECTION_URI);
        console.log(`Connected to Mongo DB Server`);


    }catch(error){
        console.log(error);
    }




};

//export the function created as a default export.
module.exports=initializeDBConnection;