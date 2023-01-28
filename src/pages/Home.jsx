import React from "react"
import "./Home.styles.scss"
import JumboData from "../fixture/jumbo.json"
import { Jumbotron } from "../components/jumbotron/Jumbotron.Component"
import { Footer } from "../components/footer/Footer.component"
import { Accordion } from "../components/accordion/Accordion.componsnt"
import { Fragment } from "react"
import { Header } from "../components/Header/Header.component"
export default function Home(){
    return(
        <Fragment>
        <Header />
        <section className="container">
            {JumboData.map(ele=>
            {
                return(
                    <div >
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