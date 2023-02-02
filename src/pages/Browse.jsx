import { BrowserContainer } from "../components/Browser/BrowserContainer.component";
import { getCategoriesAndDocuments } from "../context/firebase";
import { useState, useEffect } from "react";

export const Browser = ()=>{
    const [films, setFilms] = useState({})
    const [series, setSeries] = useState({})

    useEffect(
        ()=>{
           const getCategoryMap = 
           async () => {
            const films = await getCategoriesAndDocuments('films');
            setFilms(films)
          }
          getCategoryMap();
       },
          []);
          useEffect(
            ()=>{
               const getCategoryMap = 
               async () => {
                const films = await getCategoriesAndDocuments('series');
                setSeries(films)
              }
              getCategoryMap();
           },
              []);
       

    return(
        <BrowserContainer films={films} series={series} />
    )
}