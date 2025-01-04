import mongoose from "mongoose";
let userSchema = mongoose.Schema({
    username: {type:String, require:true},
    mobile: {type:Number, require:true},
    email: {type:String, require:true},
    password: {type:String, require: true}
})

let User =mongoose.model('User', userSchema)
export default User