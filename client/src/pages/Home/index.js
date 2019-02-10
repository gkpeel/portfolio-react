import React from "react"
import Intro from "../../components/Intro"
import FeaturedWork from "../../components/FeaturedWork"
import "./index.css"

const Home = () => {
    return (
        <div className="page">
            <Intro />
            <FeaturedWork />
        </div>
    )
}

export default Home