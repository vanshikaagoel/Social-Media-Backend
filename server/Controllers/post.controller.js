import { createPost, deletePost, getpost, gettimelinepost, LikeandDislike, updatePost } from "../services/post.service.js";


export const createPostController=async(req,res)=>{
   try {
               const newPost = await createPost(req.body);
               res.status(200).json({
                   newPost,
                   message:"New Post have been added succesfully",
               });
   } catch (err) {
       console.log(err);
       res.status(500).json({
        message:"Post creation failed",
        err,
       });
   }
}
export const updatePostController=async (req,res)=>{
   try {
               const updatedPost = await updatePost(req.params, req.body);
               res.status(200).json({
                   updatedPost,
                   message:"New Post have been updated succesfully",
               });
   } catch (err) {
       console.log(err);
       res.status(500).json({
        message:"Post update failed",
        err,
       });
   }
};
export const deletePostController=async (req,res)=>{
   try {
               const deletedPost = await deletePost(req.params, req.body);
               res.status(200).json({
                   deletedPost,
                   message:"Post have been deleted succesfully",
               });
   } catch (err) {
       console.log(err);
       res.status(500).json({
        message:"Post deletion failed",
        err,
       });
   }
};
export const  LikeandDislikeController=async (req,res)=>{
   try {
               const post = await LikeandDislike(req.params, req.body);
               res.status(200).json({
                   post,
                   message:"Post action has been completed succesfully",
               });
   } catch (err) {
       console.log(err);
       res.status(500).json({
        message:"Post action failed",
        err,
       });
   }
};
export const  getpostController=async (req,res)=>{
   try {
               const post = await getpost(req.params);
               res.status(200).json({
                   post,
                   message:"Post has been fetched succesfully",
               });
   } catch (err) {
       console.log(err);
       res.status(500).json({
        message:"Post fetch failed",
        err,
       });
   }
};
export const TimelinepostController=async (req,res)=>{
   try {
               const timelineposts = await gettimelinepost(req.body);
               res.status(200).json({
                   timelineposts,
                   message:"Timeline post fetched succesfully",
               });
   } catch (err) {
       console.log(err);
       res.status(500).json({
        message:"TimelinePost fetch failed",
        err,
       });
   }
};