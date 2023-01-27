import React from "react"
import "./Home.styles.scss"
import JumboData from "../fixture/jumbo.json"
import { Jumbotron } from "../components/jumbotron/Jumbotron.Component"
import { Footer } from "../components/footer/Footer.component"
import { Accordion } from "../components/accordion/Accordion.componsnt"
import { Fragment } from "react"
export default function Home(){
    return(
        <Fragment>
        <section className="container">
            {JumboData.map(ele=>
            {
                return(
                    <div className="item">
                        <Jumbotron key={ele.id} item={ele} />
                    </div>
                )
            })
        }

        </section>
        <Accordion />
        
        <Footer />
        </Fragment>
    

        

    )
}