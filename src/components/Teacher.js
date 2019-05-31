import React from 'react';
import '../App.css';
function Teacher(props) {
    console.log(props);
    return(
        <div id = "Teacher">
            hello i am good learner.{ props.male ? <div>Mr.</div>: <div>Miss.</div> } {props.name}
        </div>
    )
}
export default Teacher;