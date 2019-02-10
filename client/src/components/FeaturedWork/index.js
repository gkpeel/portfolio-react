import React from "react"

const style = {
    section: {
        marginTop: "5rem",
        marginBotton: "5rem"
    },
    col: {
        padding: "0 16px"
    }
}

const FeaturedWork = () => {
    return (
        <section style={style.section}>
            <div className="container-fluid text-white">
                <div className="row">
                    <div className="col" style={style.col}>
                        <h1 className="display-3">Featured Work</h1>
                        <h1>Carousel Goes Here</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturedWork