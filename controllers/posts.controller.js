exports.getPosts = ( req, res) =>{
    res.status(200).send(`Get All Posts filtered by "${req.query.title}"`);
};


exports.getPost = (req, res) => {
    res.status(200).send("Get a Post");
};

exports.createPost = (req, res) => {
  res.status(201).send(" Create Post");
};

exports.updatePost = (req, res) => {
  res.status(200).send(`Post with ID ${req.params.postId} has been updated`);
};


exports.deletePost = (req, res) => {
  res.status(200).send("Delete User");
};

