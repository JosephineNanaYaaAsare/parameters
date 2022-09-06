const express = require("express")
const postRouter = require("./routes/posts.route")

const app = express();

app.get("/", (req, res) =>{
    res.status(200).send("Welcome to my server")
});
app.use("/posts", postRouter);

app.listen(4000, (err) =>{
    console.log("🚀 server running on port http://localhost:4000")
})