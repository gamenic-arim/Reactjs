import React,{Component} from 'react';

export default class Students extends Component{
    render(){
        console.log("props value is",this.props.age)
        return(
            <>
                Hello good Afternoon! my name is {this.props.name}
            </>
        );
    }
}