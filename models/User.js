const { Schema, model } = require('mongoose');

const UserSchema = new Schema({

    name: {
        type: 'String',
        required: true
    },
    username: {
        type: 'String',
        required: true
    },

    password: {
        type: 'Number',
        required: true
    }

});


const UserModel = model('User', UserSchema);
module.exports = UserModel;