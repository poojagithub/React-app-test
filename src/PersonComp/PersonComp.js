import React from 'react'; 
import './PersonComp.css';
import Radium from 'radium';


const person = (props) => {

return (

<div className="PersonComp"> 
    <p onClick={props.deleted}> My name is {props.name} and my age is {props.age}</p>
    <p> {props.children}</p>
    <input type="text" value={props.name} onChange={props.change} />
</div>


);
    
};


export default person;