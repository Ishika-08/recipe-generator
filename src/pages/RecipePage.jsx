import React from 'react'

export default function RecipePage() {
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
            <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent hover:text-amber-600 hover:border-lime-600">Home</a>
          </li>
          <li className="flex">
            <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent hover:text-amber-600 hover:border-lime-600">Trending</a>
          </li>
          <li className="flex">
            <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent hover:text-amber-600 hover:border-lime-600">Category</a>
          </li>
          <li className="flex">
            <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent hover:text-amber-600 hover:border-lime-600">About</a>
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
  <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-col text-center">
    <h2 class="text-3xl font-medium py-7 ">Tomato soup</h2>
    <div class="lg:w-4/6 mx-auto">
      <div class="object-cover rounded-lg h-72 overflow-hidden">
        <img alt="content" class="object-cover object-center h-full w-full" src="https://images.pexels.com/photos/4062274/pexels-photo-4062274.jpeg?auto=compress&cs=tinysrgb&w=600"/>
      </div>
      <div class="flex flex-col sm:flex-row mt-10">
        <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
          <div class="flex flex-col items-center text-center justify-center">
            <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">Ingredients</h2>
            <div class="w-12 h-1 bg-lime-600 rounded mt-2 mb-4"></div>
            <ol class="text-left font-semibold">
              <li>6 ripe tomatoes, chopped</li>
              <li>1 onion, chopped</li>
              <li>2 cloves of garlic, minced</li>
              <li>2 tablespoons olive oil</li>
              <li>4 cups vegetable or chicken broth</li>
              <li>1 teaspoon sugar (optional, to balance acidity)</li>
              <li>Salt and pepper to taste</li>
              <li>1/2 cup heavy cream (optional, for creaminess)</li>
              <li>Fresh basil leaves for garnish (optional)</li>
            </ol>
            </div>
        </div>
        <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p class="leading-relaxed text-lg mb-4">
          Instructions:

              Heat olive oil in a large pot over medium heat.

              Add chopped onions and minced garlic to the pot. Sauté until onions are translucent and garlic is fragrant, about 5 minutes.

              Add chopped tomatoes to the pot. Cook for another 5 minutes, stirring occasionally, until the tomatoes start to break down and release their juices.

              Pour in the vegetable or chicken broth. Bring the mixture to a boil, then reduce the heat to low and let it simmer for about 15-20 minutes, allowing the flavors to meld together.

              If using, stir in the sugar to balance the acidity of the tomatoes. Season with salt and pepper to taste.

              If you prefer a smooth soup, use an immersion blender to blend the soup directly in the pot until smooth. Alternatively, you can transfer the soup in batches to a blender and blend until smooth, then return it to the pot.

              If adding cream, pour in the heavy cream and stir until well combined. Let the soup simmer for an additional 5 minutes.

              Taste the soup and adjust seasoning if necessary.

              Ladle the hot soup into bowls.

              Garnish with fresh basil leaves if desired, and serve hot with crusty bread or croutons.

              Enjoy your delicious homemade tomato soup!

          </p>
          <a class="text-white-900 inline-flex items-center p-3 uppercase bg-lime-200 hover:bg-amber-200">Download recipe
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
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
