const mongoose = require('mongoose');

mongoose.set("useCreateIndex", true);
mongoose.set('useFindAndModify', false);
const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    armySize:{
        type: Number,
        default:500
    },
    countries:{
        type: Number,
        default:0
    },
    date:{
        type:Date,
        default: Date.now()
    }
});

UserSchema.plugin(passportLocalMongoose);
const User = mongoose.model('User',UserSchema);

module.exports = User;