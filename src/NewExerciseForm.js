import React, {Component} from 'react';
import uuid from 'uuid/v4';
import './NewExerciseForm.css';

class NewExerciseForm extends Component { 
    constructor(props){
        super(props);
        this.state={
            exercise:"",
            select:"",
            reps: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt) {
        this.setState({
          [evt.target.name]: evt.target.value
        });
      }

      handleSubmit(evt) {
        evt.preventDefault();
        this.props.createExercise({ ...this.state, id: uuid(), });
        this.setState({ exercise: "", reps: 0 });
      }
    
    
    render(){
        return( 
            <div>
                <form className="form-inline exercise-form" onSubmit={this.handleSubmit}>
                    <input
                    className="form-control"
                    type="text"
                    name="exercise"
                    placeholder="New exercise"
                    id="exercise"
                    value={this.state.exercise}
                    onChange={this.handleChange}>
                    

                    </input>

                    <select  value={this.state.select} onChange={this.handleChange} name="select" id="rep/time-select" className="form-control">
                        <option value="">--Reps/Time--</option>
                        <option value="time-select">For Time</option>
                        <option value="reps-select">Number of Reps</option>
                    </select>

                    <input
                    className="form-control"
                    type="number"
                    name="reps"
                    placeholder="reps"
                    id="reps"
                    value={this.state.reps}
                    onChange={this.handleChange}>

                    </input>
                    <button className="btn btn-secondary">Add Exercise</button>
                </form>
            </div>

        )
    
    
    }
    
}

export default NewExerciseForm;