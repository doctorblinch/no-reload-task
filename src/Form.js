import React, { Component } from 'react';


class Form extends Component {
  state = {
    text: null
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    //console.log(this.state);
  }

 render () {
   return (
     <form id="formM" onSubmit={this.handleSubmit}>
       <h2>Input your text here:</h2>
         <textarea
           cols="120" rows="6" id="text"
           onChange={this.handleChange}
         />
        <br/>
       <button type="submit">Next!</button>
     </form>
   )
 }
}
export default Form;
