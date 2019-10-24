import React, {Component} from 'react';
import NewExerciseForm from './NewExerciseForm';
import Exercise from './Exercise';
import Time from './Time';
import SetTime from './SetTime';
import './AMRAP.css';

class AMRAP extends Component{
    constructor(props){
        super(props);
        this.state = {
            exercises:[],
            times:[]
        }
        this.setTime=this.setTime.bind(this);
        this.create=this.create.bind(this);
        this.remove=this.remove.bind(this);
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
                secs={time.secs}
                id={time.id}
                key={time.id}
                />
            })

        return(
            <div className="AMRAP-container">
                <h1 className="AMRAP-title">AMRAP</h1>
                
            <div className="AMRAP-timer">
                {times}
                
                <SetTime  setTime={this.setTime}/>
            </div>

            <div className="AMRAP-exercise-display">
                <ol>
                    {exercises}
                </ol>
            </div>
            <div className="AMRAP-new-form">
                <NewExerciseForm createExercise={this.create}/>
            </div>
            </div>
        )
    }
}

export default AMRAP;


