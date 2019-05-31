import React, { Component } from 'react';
import {connect} from 'react-redux';
import {IncrementCounter,DecrementCounter} from './CounterAction';

 class CounterScreen extends Component {
  render() {
  
    return (
      <div>
          this is an counter screen
          <div>
            {this.props.value}
          </div>
          <button onClick={()=>this.props.DecrementCounter(this.props.value)}>Decrement</button>
          <button onClick={()=>this.props.IncrementCounter(this.props.value)}>Increment</button>
      </div>
    );
  }
}
const mapStateToProps = state =>{
 return{
   value : state.Counter.counter_value
 }
}
export default connect(mapStateToProps,{IncrementCounter,DecrementCounter})(CounterScreen)
