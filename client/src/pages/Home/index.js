import React from "react"
import Jumbotron from "../../components/Jumbotron"
import FeaturedWork from "../../components/FeaturedWork"

const Home = () => {
    return (
        <div className="page">
            <Jumbotron />
            <FeaturedWork />
        </div>
    )
}

export default Home