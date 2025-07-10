
import bcrypt from "bcrypt";
import UserModel from "../models/user.model.js";

export const updateUser=async(userId, updateData)=>{
    if(updateData.password){
        try{
            updateData.password=await bcrypt.hashSync(updateData.password, 10);

        }
        catch(err){
            throw err;
        }
    }
    try{
        const user=await UserModel.findByIdAndUpdate(                                       
            userId,
            {
            $set:updateData,
            },
            {
                new:true,
            }
        );
        return user;
        }
        catch(err){
            throw err;
        }
    };


export const deleteUser= async(userId)=>{
    try{
        await UserModel.findByIdAndDelete(userId);
        }
        catch(err){
            throw err;
        }
    };

export const getUser=async(userId)=>{
    try{
        const user= await UserModel.findById(userId);
        return user;
        }
        catch(err){
            throw err;
        }
};

export const followUser=async (userdata, updateData)=>{
    if(userdata.userId=== updateData.id){
        throw new Error("you can't follow yourslef");
    }
    else {
    try {
        const user=await UserModel.findById(userdata.userId);
        const currentuser=await UserModel.findById(updateData.id);
        if(!user.followers.includes(userdata.userId)){
            await currentuser.updateOne({$push: {followers:userdata.id}});
            await user.updateOne({$push: {followings:updateData.id}});
            return {user,currentuser};
        }
        else{
            throw new Error("you have already followed this user");
        }
            
        }
        catch (error) {
        throw error;
    }
    }
};

export const unfollowUser=async (userdata, updateData)=>{
    if(userdata.userId=== updateData.id){
        throw new Error("you can't unfollow yourslef");
    }else{
        try {
        const user=await UserModel.findById(userdata.userId);
        const currentuser=await UserModel.findById(updateData.id);
        if(!user.followers.includes(userdata.userId)){
            await currentuser.updateOne({$pull: {followers:userdata.userId}},{new:true});
            await user.updateOne({$pull: {followings:updateData.id}},{new:true});
            return {user,currentuser};
        }
        else{
            throw new Error("you don't follow this user");
        }
            
        }
        catch (error) {
        throw error;
    }
    }
};