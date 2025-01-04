import express from 'express'
import jwt from 'jsonwebtoken'
import userModel from '../model/User.js'
const router = express.Router()

/*
Usage: Create the new User
API URL: http://127.0.0.1:8080/user/reg
Method Type:POST
Req Fields:
Access Type:Public
*/

router.post('/reg', async (req, res) => {
    try{
        let user = req.body
        let user_Obj = await userModel.findOne({'email': user.email})
        if(user_Obj){
            return res.json({"Status":300, "Message":"User Already exicted..!"})
        }
       let new_User = new userModel(user)
       let User = await new_User.save()
       return res.json({"Status":200, "Message":"New User Data Created Successfully..!", "User": User})
    } catch(err) {
        return res.json({"Status":505, "message":err.message})
    }
})

/*
Usage: Login
API URL: http://127.0.0.1:8080/user/login
Method Type:POST
Req Fields:
Access Type:Public
*/
router.post('/login', async (req, res) => {
    try{
        let email = req.body.email;
        let pwd = req.body.password;

        let user_Obj = await userModel.findOne({'email':email})
        if(!user_Obj){
            return res.json({"message":"User Not Existed..!"})
        }
        if(user_Obj.password !== pwd){
            return res.json({"message":"Password Not Matched"})
        }
        let payload = {'username':user_Obj.username,'phone':user_Obj.mobile, 'email_id':user_Obj.email, 'password':user_Obj.password}
        let token = jwt.sign(payload, 'VASUDEV')
        return res.json({"Status":200, "Message":"Login Successfully..!", "token":token})
    } catch(err) {
        return res.json({"Status":404, "Message":err.message})
    }
})


export default router