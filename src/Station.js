import React, {Component} from 'react';
import NewExerciseForm from './NewExerciseForm';
import Exercise from './Exercise';
import AMRAP from './AMRAP';
import EMOM from './EMOM';
import Circuit from './Circuit';
import './Station.css';

class Station extends Component{ 
constructor(props){
    super(props);
    this.state = {exercises:[],
        type: this.props.type
               } 

    
    this.handleRemove = this.handleRemove.bind(this);
}

handleRemove(){
        this.props.removeStation(this.props.id);
    }



  render(){
    



    return(
        
          <div>


              {this.state.type === "amrap" ?
              <AMRAP/> : this.state.type === "circuit" ? <Circuit/> :
              <EMOM/>}
              <button className="btn btn-lg btn-danger" onClick={this.handleRemove}>Delete Station</button>
              

          

          
          </div>
          
    )
        
  }
}





export default Station;
