import React, { Component } from 'react';
import { CounterScreen } from './screens';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Reducer from './Redux/Reducer';

const hamroStore = createStore(Reducer);

class App extends Component {
  constructor(props) {
    super(props);
    console.log('hey its a App props',props)
  }
  render() {
    return (
      <div>
      <Provider store={hamroStore}>
        <CounterScreen/>
      </Provider>
      </div>
    );
  }
}

export default App

// import React, {Component} from 'react';
// import './App.css';
// import Teacher from './components/Teacher';
// import Students from './components/Students';

// class App extends Component{
//   constructor(){
//     super();
//     this.state={
//       name : ['arim','shrestha','meera','kareem'],
//       age : [20,21,22,25]
//     }
//     this.handleButton = this.handleButton.bind(this)
//   }
//   handleButton(){
//     this.setState({ 
//       name: [...this.state.name,'sangarsha']
//     })
//   }
//   render(){
//     return(
//       <div className='App'>
//         {
//           this.state.name.map( (names,index)=><Students key={index} name={names}/>)
//         }
//         <button 
//           onClick ={this.handleButton}
//         >
//           Click me
//           </button>
//       </div>
//     )
//   }
// }

// export default App;
