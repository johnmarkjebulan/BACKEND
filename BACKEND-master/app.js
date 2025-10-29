import express from "express";
import 'dotenv/config.js';
import StudentRoutes from "./routers/StudentRoutes.js";

// init app
const app = express();

const port = 3000;

// middleware
app.use(express.json());

try{
    app.listen(process.env.PORT || 4000, () =>{
    console.log(`listening to port ${process.env.PORT || 3000}...`);
});

}catch(e){
    console.log(e);
}

app.use('/Student', StudentRoutes);
