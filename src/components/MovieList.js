import React from "react";
import Movie from "./Movie";

export default class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [ {
                title: "The Fellowship of the Ring",
                image: "https://hill-kleerup.org/blog/wp/wp-content/uploads/2021/12/Fellowship-of-the-Ring-poster.jpg",
                synopsis: "The Forming of the Fellowship.",
                rating: "PG-13",
                reviews: []
            },
            {
                title: "The Two Towers",
                image: "https://westshoreroar.com/wp-content/uploads/2021/02/lotr.jpg",
                synopsis: "The Fellowship takes on the might of the Two Towers.",
                rating: "PG-13",
                reviews: []
            },
            {
                title: "The Return Of The King",
                image: "https://a.1stdibscdn.com/archivesE/upload/1722654/f_75896431497639151038/1_org_99__master.jpg?width=768",
                synopsis: "The long awaited Return of the King comes as the Fellowship tries to destroy the Ring.",
                rating: "PG-13",
                reviews: []
            }]
        };
    };
    render() {
        let movies;

        if(this.state.movies) {
            movies = this.state.movies.map((movie, index) => <Movie key={index} {...movie} />);
        }
        return (
            <div className="d-flex flex-wrap justify-content-center">
                {movies}
            </div>
        )
    }  
}