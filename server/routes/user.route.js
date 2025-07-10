import express from "express";
import { deleteUserController, followUserController, getUserController, unfollowUserController, updateUserController } from "../Controllers/user.controller.js";
const router=express.Router();

// router.get("/",(req,res) => {
//     res.send("These are the test users");
// });

//update User
router.put("/:id",updateUserController );
//Delete User
router.delete("/:id",deleteUserController );
//Get User
router.get("/:id", getUserController );
//follow user
router.put("/follow/:id", followUserController);
//unfollow user
router.put("/unfollow/:id", unfollowUserController);

export default router;
