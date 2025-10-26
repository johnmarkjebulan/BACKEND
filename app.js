import express from "express";

// initialize app
const app = express();

const port = 3000;

// middleware
app.use(express.json());

try{
    app.listen(port, () =>{
    console.log(`listening to https://localhost:${port}`);
});

}catch(e){
    console.log(e);
}

app.get('/jebu',async (request, response) =>{
    response.status(200).json({message: "Hey' I am Jebu"});
});