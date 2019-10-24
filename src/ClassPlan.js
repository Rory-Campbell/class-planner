import React, {Component} from 'react';
import Station from './Station';
import NewStationForm from './NewStationForm';
import SetTime from './SetTime';
import './ClassPlan.css';


class ClassPlan extends Component{
    constructor(props){
        super(props);
        this.state = {stations:[],
        classLength: ""} 
    
        this.create=this.create.bind(this);
        this.remove=this.remove.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }
    
    create(newStation) {
        this.setState({
          stations: [...this.state.stations, newStation]
        });
}

remove(id){
    this.setState({
        stations: this.state.stations.filter(t => t.id !== id)
    })
}

handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit(evt){
      evt.preventDefault();
      return<h2>{this.state.classLength}</h2>


  }



render(){
    const stations = this.state.stations.map( station =>{
        return<Station 
        type={station.type}
        key={station.id}
        id={station.id}
        removeStation={this.remove}

        />
    });
    return(
        <div>
        <div className="classPlan-container">
            <h1 className="classPlan-title">Class Planner</h1>
            
            
        
            
            
            
        <h2 className="classPlan-time-display">{this.state.classLength} </h2>

            <form className="classTime">

                <label htmlFor="classLength">Class Length</label>

                <select className="form-control" id="classLength" name="classLength" value={this.state.classLength} onChange={this.handleChange}>
                    <option value="30">30 </option>
                    <option value="45">45 </option>
                    <option value="60">60 </option>
                </select> 
                
            </form>

        <div className="classPlan-station-form">
            <NewStationForm createStation = {this.create}/>
        </div>
            
        
        </div>

        {stations}
        </div>
    )
}
}

export default ClassPlan;