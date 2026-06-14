require("dotenv").config();

const express =
require("express");

const cors =
require("cors");

const askQuestion =
require("./rag");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/chat",
async(req,res)=>{

    const { question } =
    req.body;

    const result =
    await askQuestion(question);

    res.json(result);
});

app.listen(5000,()=>{
    console.log(
        "Server running on 5000"
    );
});