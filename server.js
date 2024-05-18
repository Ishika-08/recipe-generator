require('dotenv').config();
const express = require('express');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const cors = require('cors');
// const dataArray = require('./data.js');



const app = express();
app.use(cors());
app.use(express.json());

const port = 3000;

 // Access your API key as an environment variable (see "Set up your API key" above)
 const genAI = new GoogleGenerativeAI(process.env.API_KEY);

// app.get('/', (req, res) => {
// const dataString = {```
//   [
//     {
//       id: 1,
//       name: "Tomato and Coriander Soup",
//       ingredients: [
//         "1 large onion, chopped",
//         "2 cloves garlic, minced",
//         "2 tablespoons olive oil",
//         "2 cans (14.5 ounces each) diced tomatoes",
//         "1 cup chicken broth",
//         "1/2 cup chopped fresh cilantro",
//         "Salt and pepper to taste"
//       ],
//       instructions: [
//         "In a large pot, heat the olive oil over medium heat. Add the onion and garlic and cook until softened.",
//         "Add the tomatoes, chicken broth, and cilantro. Bring to a boil, then reduce heat and simmer for 20 minutes.",
//         "Season with salt and pepper to taste. Serve hot."
//       ]
//     },
//   ]
//   ```}
//     console.log(dataString);
//     // const dataArray = JSON.parse(data);
//     // console.log(dataArray);
// });    

app.post('/generate', async (req, res) => {
    console.log(req.body);
    const {ingredients} = req.body;
    try{
        
        const model = genAI.getGenerativeModel({ model: "gemini-pro"});

        const prompt = `give me an array of 4 objects. each object contains a recipe which contain ${ingredients}.following are the keys of object (idMeal,strMeal, strIngredients, strInstructions, strMealThumb). make sure that all the string and keys are in double quotes.give text without back ticks.do not use string literal anywhere in the output.`

        const result = await model.generateContent(prompt);
        const response = await result.response;
        console.log(response);
        const text = response.text();
        res.send(text);
        console.log(text)
    }catch{
        res.status(500).send("Failed to generate content");
    }
});


   
   
    
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    });