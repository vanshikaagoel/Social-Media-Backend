import mongoose from "mongoose";

export const dbconnect=()=>{
try{
    mongoose.connect(process.env.MONGO_URL);
    console.log("database have been connected succesully");
    
    }

    catch(error){
        console.log(error);
    }

};