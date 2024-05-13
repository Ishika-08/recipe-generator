import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { FaSearch } from "react-icons/fa"

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
            setData(response.data.meals)
        })
	},[])

    const handleSearch = () =>{
        const api = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
        axios.get(api)
        .then((response) => {
			setData(response.data.meals)
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