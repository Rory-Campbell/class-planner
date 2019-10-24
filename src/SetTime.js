import React, {Component} from 'react';
import uuid from 'uuid/v4';

class SetTime extends Component{
    constructor(props){
        super(props);
        this.state = {
            mins:0,
            secs:0
        }
       
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
}



  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.setTime({ ...this.state, id: uuid() });
    this.setState({ mins:"", secs:"" });
  }

  render(){
       
      return(
        <div>
        
        <form className="form-inline" onSubmit={this.handleSubmit}>
            <input className="form-control" onChange={this.handleChange}
                name="mins"
                value={this.state.mins}
                type="number"
                placeholder="Mins">
            </input>
                <input className="form-contol" onChange={this.handleChange}
                type="number"
                name="secs"
                value={this.state.secs}
                placeholder="Secs"
                max="59">
                </input>
            <button className="btn btn-secondary">Set Time</button>
        </form>
        </div>
      )
  }
    }

export default SetTime;
