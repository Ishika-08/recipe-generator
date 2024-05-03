import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function RecipeCards(props){
	const search = props.search
	const navigate = useNavigate()

	const handleClick = (id) => {
		navigate(`/recipe/${id}`)
	}

    return(
        <>
            <div className="flex flex-col text-center py-7 text-rose-700 ">
                    <h1 className="font-bold text-5xl">Trending Categories</h1>
                    <p className="py-3 text-xl">
                        Showcasing our 
                        popular recipes
                    </p>
            </div>

            <div className="grid grid-cols-3 gap-6 p-4 w-[80%] mx-auto my-5">
			{
				search.map((item) => {
					return(
						<div onClick={() => handleClick(item.idMeal)} key={item.idMeal} className="flex flex-col max-w-md p-6 space-y-6 overflow-hidden rounded-lg shadow-md cursor-pointer dark:bg-gray-50 dark:text-gray-800 hover:bg-amber-100 transition shadow-xl">
                	<div className="flex space-x-4 justify-center py-3">
                        <h1 className="font-bold text-2xl text-lime-700">{item.strMeal}</h1>
                	</div>
                	<div>
						<img src={item.strMealThumb} className="rounded-lg"/>
                		<p className="text-sm dark:text-gray-600 mt-5">{`${item.strInstructions.substring(0,100)}.....`}</p>
                	</div>
                </div>
					)
					
				})
			}
            </div>
        </>
    )
}