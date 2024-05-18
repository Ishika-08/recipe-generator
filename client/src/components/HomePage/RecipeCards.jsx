import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { FaSearch } from "react-icons/fa"
import Header from "./Header"

export default function RecipeCards(){
	const navigate = useNavigate()

	const handleClick = (id) => {
		navigate(`/recipe/${id}`)
	}

	const [search, setSearch] = useState("")
	const [data, setData] = useState([])

	useEffect(() => {
		const api = `https://www.themealdb.com/api/json/v1/1/search.php?s=`
        axios.get(api)
        .then((response) => {
			localStorage.setItem('recipeData', JSON.stringify(response.data.meals));
            setData(response.data.meals)
        })
	},[])

    const handleSearch = () =>{
        const api = `http://localhost:3000/generate`
        axios.post(api, {ingredients: search})
        .then((response) => {
			if(typeof response.data === "string"){
				const data = JSON.parse(response.data)
				localStorage.setItem('recipeData', JSON.stringify(data));
				console.log(data)
				setData(data)
			}
			else if(typeof response.data === "object"){
				localStorage.setItem('recipeData', JSON.stringify(response.data));
				console.log(response.data)
				setData(response.data)

			}
			// const textWithoutBackticks = response.data.substring(3, response.data.length - 3);
			// const textWithoutBackticks = response.data
			// console.log(textWithoutBackticks)
			// const data = JSON.parse(textWithoutBackticks)
			// console.log(data)
			// console.log(typeof response.data)
			// const string = JSON.stringify(response.data)
			// const data = JSON.parse(string)
			// console.log(data)
			// console.log(response.data)
			// setData(response.data)
			// response.data.map((item) => {
			// 	console.log(item)
			// })
        })
    }

    const handleChange = (e) =>{
        setSearch(e.target.value)
    }

	const handleKeyPress = (event) => {
		if (event.key === 'Enter') {
		  handleSearch();
		}
	  };

    return(
        <>
			<Header/>
			<div className="relative flex justify-center my-10">
				<input 
				onChange={(e) => handleChange(e)} 
				className="w-[70%] pl-[6%] pr-4 py-4 rounded-3xl border border-gray-300" 
				type="search" 
				placeholder="Search...."
				onKeyDown={(e) => handleKeyPress(e)}
				/>
				<FaSearch className="absolute top-1/2 left-[16%] transform -translate-y-1/2 text-3xl cursor-pointer" onClick={() => handleSearch()}/>
			</div>

            <div className="grid grid-cols-3 gap-6 p-4 w-[80%] mx-auto my-5">
			{
				data.map((item) => {
					return(
						<div onClick={() => handleClick(item.idMeal)} key={item.idMeal} className="flex flex-col max-w-md p-6 space-y-6 overflow-hidden rounded-lg shadow-md cursor-pointer dark:bg-gray-50 dark:text-gray-800 hover:bg-amber-100 transition shadow-xl">
                	<div className="flex space-x-4 justify-center py-3">
                        <h1 className="font-bold text-2xl text-lime-700">{item.strMeal}</h1>
                	</div>
                	<div>
						{/* <img src={item.strMealThumb} className="rounded-lg"/> */}
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