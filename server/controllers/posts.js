import mongoose from 'mongoose';
import postMessage from '../models/postMessage.js';

export const getPosts = async (req, res) => {
  //res.send('this works')
  try {
    const postMessages = await postMessage.find();
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  //res.send('post created')
  const post = req.body;

  const newPost = new postMessage(post);

  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
export const updatePost = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: 'No post with this id' });
  }
  try {
    const updatedPost = await postMessage.findByIdAndUpdate(id, updatedData, {
      new: true,
    });
    res.status(200).json(updatedPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

export const likePost = async (req, res) => {
  const { id } = req.params;
  if (!req.userId) return res.status(404).json({ message: 'Unauthenticated' });

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: 'No post with this id' });
  }
  const post = await postMessage.findById(id);
  const index= post.likes.findIndex((id)=>id===String(req.userId))
  if(index===-1){
    post.likes.push(req.UserId)
  }else{
    post.likes=post.likes.filter((id)=>id!=String(req.userId))
  }
  const updatedPost = await postMessage.findByIdAndUpdate(
    id,
   post,
    { new: true }
  );

  res.status(200).json(updatedPost);
};
export const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: 'No post with this id' });
  }

  try {
    await postMessage.findByIdAndDelete(id);
    res.status(200).json({ message: 'Post deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
