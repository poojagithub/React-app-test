import React, { Component } from 'react';
import './App.css';
import Person from './PersonComp/PersonComp';
import Radium from 'radium';

class App extends Component {
  
  state = {
    PersonArray: [
      {id:'1', name:'Pooja', age:'34' },
      {id:'2', name:'Kiran', age:'40' },
      {id:'3', name:'Shrey', age:'1' }
    ],
    showPerson: true
  }
  
  switchNameHandler = (fname) => {

    this.setState (function(state,props) {
      const parray = this.state.PersonArray  
      parray[1].name = fname
      parray[0].name = 'Sonu'
      return {
      PersonArray: parray
      }
    });
  }

  updateNameHandler = (event, pid) => {
      
    console.log(pid)

    let pindex = this.state.PersonArray.findIndex((p) => { 
      console.log(pid)
      return pid === p.id});
    console.log(pindex)
    let updateName = {...this.state.PersonArray[pindex]}
    updateName.name = event.target.value
    let personsss = [...this.state.PersonArray]
    personsss[pindex] = updateName

    this.setState({
      PersonArray: personsss

    });
  }

  showNameHandler = () => {
    
    var showName = this.state.showPerson
    this.setState({
      showPerson: !showName
      }
    );
  }

  deleteNameHandler = (index) => {
    this.setState(function(state,props) {
      //assigning the array immutably
      const personA = [...this.state.PersonArray];
      personA.splice(index,1);
      return { PersonArray: personA}});
  }

  changeHandler = (fname,index) => {
    console.log(index)
    console.log(this.state.PersonArray)

    //this.switchNameHandler(fname)


    this.deleteNameHandler(index)



  }

  render() {

    let Persons = null;

    if (this.state.showPerson) {
      Persons = ( 
        <div>
        { 
        this.state.PersonArray.map((personn, index) => {
            return <Person 
            name={personn.name} 
            age={personn.age} 
            key={personn.id}
            deleted={this.changeHandler.bind(this,'Sarah',index)} 
            change={event => {this.updateNameHandler(event, personn.id)}}/>
            //changed={this.deleteNameHandler.bind(this,index)} />
            //changed={this.switchNameHandler.bind(this,'Sarah')} />
            
            
        })}
        </div>
      );

    }

    return (
      <div className="App">
      <button onClick={this.showNameHandler}> Show Names </button>
      {Persons}

      </div>
    );
}
}

export default App;
