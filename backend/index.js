import express from 'express'; //server create karne ke liye
import { dbConnect } from './config/db.js'; 
import router from './route/userRoute.js';
import fileUpload from 'express-fileupload'; //file upload karne ke liye import karayehai
import cors from 'cors'
const app = express();      
app.use(express.json());   //json ko enable akrne ke liye
app.use(fileUpload());       //fileupload ko enable karne ke lite
app.use(cors());
dbConnect()
app.use("/api",router)   //server yaha create kiye hai aur api dusre folder mey create kiye hai usko yaha lane ke liye use kiye hai
app.listen(9000,()=>{
    console.log("server run kar raha hai");
    
})
