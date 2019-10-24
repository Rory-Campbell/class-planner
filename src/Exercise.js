import React, {Component} from 'react';
import './Exercise.css';

class Exercise extends Component{
    constructor(props){
        super(props);
        this.handleRemove = this.handleRemove.bind(this);
    }
    handleRemove(){
        this.props.removeExercise(this.props.id);
    }
    render(){
    return (
        <div>
            <li> 
                <div className="exerciseDisplay">
                {this.props.exercise}
                </div>
                {this.props.select === "time-select" ? <div>
                    {this.props.reps} Seconds
                </div> : <div>
                {this.props.reps} Reps
                </div> }
                
                

                

            </li>
            <button className="btn btn-sm btn-outline-danger" onClick={this.handleRemove}>Delete Exercise</button>
        </div>
    )
}
}

export default Exercise;


