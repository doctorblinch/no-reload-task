import React, { Component } from 'react';
import Form from './Form.js';
import './App.css';
import $ from "jquery";


$(document).ready(function(){

});



$(document).ready(function(){

  $('#formM').on('submit', function(event){
    $.ajax({
      data:{
        text: $('#text').val()
      },
      type: 'POST',
      url: '/process'
    }).done(function(data){
      if (!data.error){
        for (let i=0; i < data.length; i++){
            console.log(i,":",data[i]);
            let append_text = "<button id=\"" + i + "\">" + data[i] + "</button><br><br><br>";
            $("#div_for_append").append(append_text);
        }
      }
    });

    event.preventDefault();
  });

});

class App extends Component {
  render() {
    return (
      <div>
        <Form />
        <div id="div_for_append"> </div>
      </div>
    );
  }
}

export default App;
