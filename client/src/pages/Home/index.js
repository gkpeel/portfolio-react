import React, { Component } from "react"
import Intro from "../../components/Intro"
import FeaturedWork from "../../components/FeaturedWork"

class Home extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div>
                <Intro />
                <FeaturedWork />
            </div >
        )
    }
}

export default Home