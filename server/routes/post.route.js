import express from "express";
import { createPostController, deletePostController, getpostController, LikeandDislikeController, TimelinepostController, updatePostController } from "../Controllers/post.controller.js";
const router=express.Router();

//create post
router.post("/create-post", createPostController);

//update posts
router.put("/update-post/:id", updatePostController);


//delete user
router.delete("/delete-post/:id", deletePostController);


//like& dislike post
router.put("/like-post/:id", LikeandDislikeController);

//getpost
router.get("/get-post/:id", getpostController);

//timelinepost
router.get("/timeline-post", TimelinepostController);
export default router;