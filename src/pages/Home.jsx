import React from "react"

import JumboData from "../fixture/jumbo.json"
import { Jumbotron } from "../components/jumbotron/Jumbotron.Component"
export default function Home(){
    return(
        <>
            {JumboData.map(ele=><Jumbotron key={ele.id} item={ele} />)}
        </>
        

    )
}