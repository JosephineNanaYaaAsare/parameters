const router = require("express").Router;

const {
    getPosts,
    getPost,
    updatePost,
    createPost,
    deletePost,
} = require("../controllers/posts.controller")

const postRouter = router()

postRouter.route("/").post(createPost).get(getPosts);
postRouter.route("/:postId").get(getPost).patch(updatePost).delete(deletePost)

module.exports= postRouter;