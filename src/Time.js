import React, {Component} from 'react'; 

class Time extends Component{ 
    render(){
        return(
            <div>
                {this.props.mins}:{this.props.secs === 0 ? "00": this.props.secs}
                
            </div>
        )
    }
}

export default Time;