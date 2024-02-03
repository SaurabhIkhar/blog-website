const express = require('express');
const mongoose = require('mongoose');
// const dotenv = require('dotenv');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');
const categoryRoute = require('./routes/categories');
const multer = require('multer');
const path = require("path");
require('dotenv').config();
// dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use("/images", express.static(path.join(__dirname,"/images")));

app.use("/images", express.static(path.join(__dirname,"/images")));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
      
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null, "images");
    },
    filename: (req, file, cb)=>{
        cb(null, req.body.name);
    },
});

const upload = multer({ storage: storage});
app.post("/api/upload", upload.single("file"), (req, res)=>{
    res.status(200).json("File has been uploaded...");
})



app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

app.listen(5000, ()=>{
    console.log("backend is running");
});