import React from "react";
import Stars from "./Stars";
import ReviewList from "./ReviewList";

export default class Movie extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            title: props.title,
            image: props.image,
            synopsis: props.synopsis,
            rating: props.rating
        };
    }

    render() {
        return (
            <div className="card w-75">
            <h4 className="card-header text-center">
                <div className="row">
                    <div className="col">{this.state.title}</div>
                    <div className="col">{this.state.rating}</div>
                    <div className="col-5"><Stars /></div>
                </div>
            </h4>
            <div className="card-body">
                <div className="row">
                    <div className="col"><img className="poster" src={this.state.image} alt={this.state.title}/></div>
                    <div className="col"><p className="card-text">{this.state.synopsis}</p></div>
                </div>
            </div>
            <div className="card-footer">
                <div><ReviewList /></div>
                
            </div>
        </div>
        )
    }
    
}