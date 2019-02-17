const mongoos = require('mongoose');
const Schema  = mongoos.Schema;

//Create Schema 
const UserSchema = new Schema({
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
    avatar:{
        type:String
    },
    date:{
        type:Date,
        default:Data.now
    }
});
//mongoose.model('the name you want pass','actual Schema')
module.exports = User = mongoos.model('users',UserSchema)