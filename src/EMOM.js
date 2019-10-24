import React, {Component} from 'react';
import NewExerciseForm from './NewExerciseForm';
import Exercise from './Exercise';
import Time from './Time';
import SetTime from './SetTime';
import './EMOM.css';

class EMOM extends Component{
    constructor(props){
        super(props);
        this.state = {
            exercises:[],
            times:[]
        }
        this.setTime=this.setTime.bind(this);
        this.create=this.create.bind(this);
        this.remove = this.remove.bind(this);
}

create(newExercise) {
    this.setState({
      exercises: [...this.state.exercises, newExercise]
    });
  }

  setTime(newTime) {
    this.setState({
      times: [...this.state.times, newTime]
    });
  }
  
  remove(id){
    this.setState({
        exercises: this.state.exercises.filter(t => t.id !== id)
    })
}

    render(){
        const exercises = this.state.exercises.map(exercise => {
            return<Exercise 
            exercise={exercise.exercise}
            reps={exercise.reps}
            select={exercise.select}
            key={exercise.id}
            id={exercise.id}
            removeExercise={this.remove}
           />
            });

            const times= this.state.times.map(time => {
                return<Time
                mins={time.mins}
                id={time.id}
                key={time.id}
                
                />
            })

        return(
            <div className="EMOM-container">

                <h1 className="EMOM-title">EMOM</h1>
                
                <div className="EMOM-timer"> {times} 

                    <SetTime setTime={this.setTime}/>
                </div>

                <div className="EMOM-exercise-display">
                    <ol>
                        {exercises}
                    </ol>
                </div>
                <div className="EMOM-new-exercise-form">
                <NewExerciseForm createExercise={this.create}/>
           </div>
            </div>
        )
    }
}

export default EMOM;