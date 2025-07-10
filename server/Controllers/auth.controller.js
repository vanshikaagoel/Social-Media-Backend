
import UserModel from "../models/user.model.js";
import bcrypt from "bcrypt";
import { loginUser, registerUser } from "../services/auth.service.js";
import { deleteUser } from "../services/user.service.js";
//Register
export const register= async(req, res)=>{
    try{
        
        const newUser=await registerUser(req.body);
        const{password, ...data}=newUser._doc;
        res.status(200).json({
            data,
            message:"user has been registered succesfully"
        });
    }
        catch(error){
            res.status(500).json({
                error:error,
                message: "Error",
            });
            console.log(error);
        }
};

export const login=async(req,res)=>{
    try{
        const data=await deleteUser(req.params.id);
        
        res.status(200).json({
            message:"user logged in succesfully",
            data,
        });
    }
        catch(error){
            res.status(500).json({
                error: error,
                message: "Error occured in logging user",
            });
            console.log(error);
        }
};