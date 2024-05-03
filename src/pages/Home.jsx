import React from 'react'
import LandingFooter from '../components/LandingFooter'
import LandingHeader from '../components/landingheader'
import SearchBar from '../components/SearchBar'
import RecipeCards from '../components/RecipeCards'

export default function Home(){
    return(
        <>
            <SearchBar/>
            
            <RecipeCards/>

            <LandingFooter/>
        </>
    )
}