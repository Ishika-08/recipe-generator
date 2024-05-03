import axios from 'axios'
import { useEffect, useState } from 'react'

export default function RecipePage() {
  // const [data, setData] = useState()

  // useEffect(() => {
  //   axios.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772")
  //       .then((response) => {
  //         console.log(response.data.meals[0])
  //         setData(response.data.meals[0])
  //       })
        
  // },[])

  const renderIngredients = () => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredientKey = `strIngredient${i}`;
      const measureKey = `strMeasure${i}`;
      const ingredient = data[ingredientKey];
      const measure = data[measureKey];
      if (ingredient && ingredient.trim() !== '' && measure && measure.trim() !== '') {
        ingredients.push(
          <li key={i}>
            {ingredient} - {measure}
          </li>
        );
      }
    }
    return ingredients;
  };

  const data = {
    "idMeal": "52772",
    "strMeal": "Teriyaki Chicken Casserole",
    "strDrinkAlternate": null,
    "strCategory": "Chicken",
    "strArea": "Japanese",
    "strInstructions": "Preheat oven to 350° F. Spray a 9x13-inch baking pan with non-stick spray. Combine soy sauce, ½ cup water, brown sugar, ginger and garlic in a small saucepan and cover. Bring to a boil over medium heat. Remove lid and cook for one minute once boiling. Meanwhile, stir together the corn starch and 2 tablespoons of water in a separate dish until smooth. Once sauce is boiling, add mixture to the saucepan and stir to combine. Cook until the sauce starts to thicken then remove from heat. Place the chicken breasts in the prepared pan. Pour one cup of the sauce over top of chicken. Place chicken in oven and bake 35 minutes or until cooked through. Remove from oven and shred chicken in the dish using two forks. *Meanwhile, steam or cook the vegetables according to package directions. Add the cooked vegetables and rice to the casserole dish with the chicken. Add most of the remaining sauce, reserving a bit to drizzle over the top when serving. Gently toss everything together in the casserole dish until combined. Return to oven and cook 15 minutes. Remove from oven and let stand 5 minutes before serving. Drizzle each serving with remaining sauce. Enjoy!",
    "strMealThumb": "https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg",
    "strTags": "Meat,Casserole",
    "strYoutube": "https://www.youtube.com/watch?v=4aZr5hZXP_s",
    "strIngredient1": "soy sauce",
    "strIngredient2": "water",
    "strIngredient3": "brown sugar",
    "strIngredient4": "ground ginger",
    "strIngredient5": "minced garlic",
    "strIngredient6": "cornstarch",
    "strIngredient7": "chicken breasts",
    "strIngredient8": "stir-fry vegetables",
    "strIngredient9": "brown rice",
    "strIngredient10": "",
    "strIngredient11": "",
    "strIngredient12": "",
    "strIngredient13": "",
    "strIngredient14": "",
    "strIngredient15": "",
    "strIngredient16": null,
    "strIngredient17": null,
    "strIngredient18": null,
    "strIngredient19": null,
    "strIngredient20": null,
    "strMeasure1": "3/4 cup",
    "strMeasure2": "1/2 cup",
    "strMeasure3": "1/4 cup",
    "strMeasure4": "1/2 teaspoon",
    "strMeasure5": "1/2 teaspoon",
    "strMeasure6": "4 Tablespoons",
    "strMeasure7": "2",
    "strMeasure8": "1 (12 oz.)",
    "strMeasure9": "3 cups",
    "strMeasure10": "",
    "strMeasure11": "",
    "strMeasure12": "",
    "strMeasure13": "",
    "strMeasure14": "",
    "strMeasure15": "",
    "strMeasure16": null,
    "strMeasure17": null,
    "strMeasure18": null,
    "strMeasure19": null,
    "strMeasure20": null,
    "strSource": null,
    "strImageSource": null,
    "strCreativeCommonsConfirmed": null,
    "dateModified": null
    }

  return (
 <>
  <header className="p-4 bg-gray-100 text-gray-800">
    <div className="container flex justify-between h-16 mx-auto">
      <div className="flex">
        <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-8 h-8 text-lime-700">
            <path d="M27.912 7.289l-10.324-5.961c-0.455-0.268-1.002-0.425-1.588-0.425s-1.133 0.158-1.604 0.433l0.015-0.008-10.324 5.961c-0.955 0.561-1.586 1.582-1.588 2.75v11.922c0.002 1.168 0.635 2.189 1.574 2.742l0.016 0.008 10.322 5.961c0.455 0.267 1.004 0.425 1.59 0.425 0.584 0 1.131-0.158 1.602-0.433l-0.014 0.008 10.322-5.961c0.955-0.561 1.586-1.582 1.588-2.75v-11.922c-0.002-1.168-0.633-2.189-1.573-2.742zM27.383 21.961c0 0.389-0.211 0.73-0.526 0.914l-0.004 0.002-10.324 5.961c-0.152 0.088-0.334 0.142-0.53 0.142s-0.377-0.053-0.535-0.145l0.005 0.002-10.324-5.961c-0.319-0.186-0.529-0.527-0.529-0.916v-11.922c0-0.389 0.211-0.73 0.526-0.914l0.004-0.002 10.324-5.961c0.152-0.090 0.334-0.143 0.53-0.143s0.377 0.053 0.535 0.144l-0.006-0.002 10.324 5.961c0.319 0.185 0.529 0.527 0.529 0.916z"></path>
            <path d="M22.094 19.451h-0.758c-0.188 0-0.363 0.049-0.515 0.135l0.006-0.004-4.574 2.512-5.282-3.049v-6.082l5.282-3.051 4.576 2.504c0.146 0.082 0.323 0.131 0.508 0.131h0.758c0.293 0 0.529-0.239 0.529-0.531v-0.716c0-0.2-0.11-0.373-0.271-0.463l-0.004-0.002-5.078-2.777c-0.293-0.164-0.645-0.26-1.015-0.26-0.39 0-0.756 0.106-1.070 0.289l0.010-0.006-5.281 3.049c-0.636 0.375-1.056 1.055-1.059 1.834v6.082c0 0.779 0.422 1.461 1.049 1.828l0.009 0.006 5.281 3.049c0.305 0.178 0.67 0.284 1.061 0.284 0.373 0 0.723-0.098 1.027-0.265l-0.012 0.006 5.080-2.787c0.166-0.091 0.276-0.265 0.276-0.465v-0.716c0-0.293-0.238-0.529-0.529-0.529z"></path>
          </svg>
        </a>
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent hover:text-amber-600 hover:border-lime-600">Link</a>
          </li>
          <li className="flex">
            <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent hover:text-amber-600 hover:border-lime-600">Link</a>
          </li>
          <li className="flex">
            <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent hover:text-amber-600 hover:border-lime-600">Link</a>
          </li>
          <li className="flex">
            <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent hover:text-amber-600 hover:border-lime-600">Link</a>
          </li>
        </ul>
      </div>
      <div className="items-center flex-shrink-0 hidden lg:flex">
        <button className="px-8 py-3 font-semibold rounded bg-lime-600 text-gray-50 hover:bg-amber-700" fdprocessedid="g75tn" >Log out</button>
      </div>
      <button className="p-4 lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-800">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>
  </header>
  <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-col text-center">
    <h2 className="text-3xl font-medium py-7 ">{data.strMeal}</h2>
    <div className="lg:w-4/6 mx-auto">
      <div className="object-cover rounded-lg h-72 overflow-hidden">
        <img alt="content" className="object-cover object-center h-full w-full" src={data.strMealThumb}/>
      </div>
      <div className="flex flex-col sm:flex-row mt-10">
        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
          <div className="flex flex-col items-center text-center justify-center">
            <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Ingredients</h2>
            <div className="w-12 h-1 bg-lime-600 rounded mt-2 mb-4"></div>
            <ol className="text-left font-semibold">
              {renderIngredients()}
            </ol>
            </div>
        </div>
        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p className="leading-relaxed text-lg mb-4">
          Instructions:

            {data.strInstructions}

          </p>
          <a className="text-white-900 inline-flex items-center p-3 uppercase bg-lime-200 hover:bg-amber-200">Download recipe
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
 </>
 
  )
}
