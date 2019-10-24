import React, {Component} from 'react';
import uuid from 'uuid/v4';
import './NewStationForm.css';

class NewStationForm extends Component{ 
    constructor(props){
        super(props);
        this.state={
            type:""
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
        this.props.createStation({ ...this.state, id: uuid(), });
        this.setState({ type:"" });
      }
    

    render(){
        return(
           
            <div>
                

            <div className="station-form">
                <form onSubmit={this.handleSubmit}>
                <label htmlFor="type">Station Type</label>
                <select className="form-control form-control-sm" value={this.state.type} onChange={this.handleChange} name="type" id="type">
                  <option>Choose Type</option>
                  <option value="amrap">AMRAP</option>
                  <option value="circuit">Circuit</option>
                  <option value="emom">EMOM</option>
               </select>


                    <button class="btn btn-primary">Add Station </button>
                </form>
                </div>
            </div>
        )
    }
}

export default NewStationForm;