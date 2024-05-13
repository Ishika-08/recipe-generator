require('dotenv').config();
const express = require('express');
const { GoogleGenerativeAI } = require("@google/generative-ai");


const app = express();
app.use(express.json());

const port = 3000;

 // Access your API key as an environment variable (see "Set up your API key" above)
 const genAI = new GoogleGenerativeAI(process.env.API_KEY);


app.post('/generate', async (req, res) => {
    const {ingredients} = req.body;
    try{
        
        const model = genAI.getGenerativeModel({ model: "gemini-pro"});

        const prompt = `give me an array of 6 objects. each object contains a recipe which contain ${ingredients}.following are the keys of object (id,name, ingredients, instructions)`

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        console.log(text);
        res.send(text);
    }catch{
        res.status(500).send("Failed to generate content");
    }
});


   
   
    
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    });