import QuizMap from "../img/projects/featured/quizmap-app.png"
import GazellesCoaches from "../img/projects/featured/gazelles-coaches-homepage-screenshot.png"
import BegsList from "../img/projects/featured/begs-list-screenshot.png"

const Slides = [
    {
        name: "quizMap",
        img: QuizMap,
        alt: "Quiz Map Screenshot",
        details: [
            ["As a self-proclaimed geography nerd, evey now and then I try to name all the World’s countries."],
            ["However, out of all the quizzes out there none of them came with a dynamic map that allowed users to receive information about their previous guesses."],
            ["Using Google’s Map API, I created full-stack application that asks users to enter the names of the world (or a continent’s) countries before time runs out. As they answer submit answers the Map API and GeoJSON data (on a MongoDB database) provides user’s with live feedback to their progress."],
            ["Check back for ongoing improvements including Redux implementation, enhanced map features to improve feedback, and user profile creation."]
        ],
        link: "https://quizmap.herokuapp.com/",
        repo: "https://github.com/gkpeel/quiZMap-react"
    },
    {
        name: "Beg's List",
        img: BegsList,
        alt: "Beg's List Screenshot",
        details: [
            ["What happens when you cross GoFundMe with Reddit and Ebay? - You get BegsList"],
            ["Built on NodeJS, this fictitious full-stack application leverages a MySQL database with Express routing and Handlebars views. User’s can create profiles, make “Beg’s” utilizing the Ebay API, and then UpVote/DownVote other requests depending on how “worthy” they view them."],
            ["This was a group project where everyone shared a portion of the workload. I personally tackled the database’s UpVote/DownVote logic as well as created the front-end design."]
        ],
        link: "https://stark-beach-71508.herokuapp.com/",
        repo: "https://github.com/Anders-Engman/BegsList"
    },
    {
        name: "Gazelles Coaches",
        img: GazellesCoaches,
        alt: "Gazelles Coaches Screenshot",
        details: [
            ["A client’s custom coded WordPress site."],
            ["This project leverages a number of custom post types, fields, and taxonomies that share relational data."],
            ["Additionally built a private “intranet” that coaches could log in to, in order to find relevant internal documents."]
        ],
        link: "https://coaches.scalingup.com/",
        repo: null
    }
]

export default Slides