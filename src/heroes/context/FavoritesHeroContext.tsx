import { createContext, useEffect, useState, type PropsWithChildren } from "react";
import type { Hero } from "../types/hero.interface";


interface FavoritesHeroContext {
    //status
    favorites: Hero[]
    favoritesCount:number

    //methos
    isFavorite: (hero:Hero) => boolean
    toggleFavorite: (hero:Hero) => void



}

export const FavoritesHeroContext = createContext( {} as FavoritesHeroContext)

const getFavoritesFromLocalStorage = (): Hero[] => {

   const favorites = localStorage.getItem('favorites');
   return favorites ? JSON.parse(favorites) : []
}


export const FavoritesHeroProvider = ({children}: PropsWithChildren) => {

    const [favorites, setFavorites] = useState<Hero[]>(getFavoritesFromLocalStorage())

    const toggleFavorites = (hero : Hero)=>{
        const heroExist = favorites.find( h => h.id === hero.id)

        if(heroExist){
            const newFavorite = favorites.filter(h => h.id !== hero.id)
            setFavorites(newFavorite)
        }else{

            setFavorites([...favorites ,hero])
        }
    }

    const isFavoriteHero = (hero:Hero) => {
        const heroExist = favorites.some( h => (h.id === hero.id) )

       return heroExist
    }

    useEffect(()=>{
        localStorage.setItem('favorites',JSON.stringify(favorites))
    },[favorites])


    return(
        <FavoritesHeroContext value= {{favorites:favorites,
            favoritesCount:favorites.length,
            isFavorite:isFavoriteHero,
            toggleFavorite:toggleFavorites
        }}>

        {children}
        </FavoritesHeroContext>
    )
}