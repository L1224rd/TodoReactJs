// ==================== IMPORTS ==================== //

import React from 'react';
import ReactDom from 'react-dom';

// ==================== GLOBAL VARIABLES ==================== //

let namesArray = []; // where the itens will be stored
let id = 0; // autoIncremental primaryKey for each item 

// ==================== FUNCTIONS ==================== //

const removeName = e => { // fired when the item is clicked
  let tempArray = namesArray.filter(name => { // creates a new array wihtout the clicked item
    return name.props.id !== e.currentTarget.id;
  });
  namesArray = tempArray.splice(0); // update the array with the new values
  init(namesArray); // refresh the todo list
}

const addName = name => { // pushs the name parameter into the namesArray as a <li> item
  let newName = <li className="names" onClick={removeName} key={`name${id}`} id={`name${id}`}>{name}</li>; // react needs a key to each item for tracking purposes
  id += 1; // autoIncremental primaryKey
  namesArray.push(newName);
  init(namesArray); // refresh the todo list
}

const init = (array) => { // render the todoList "component" to the app div
  ReactDom.render(
    <div>
      <input type="text" id="name" placeholder="Item..."/><button id="add">Add</button>
      <ol>
        {array}
      </ol>
    </div>,
    document.getElementById('app')
  );
}

// ==================== JQUERY ==================== //

$(document).ready(() => { // using jquery to get the value of the #name input and send it to the addName function when #add button is clicked

  $('#add').click(e => {
    addName($('#name').val()); // gets the value of the input and pass it to addName function
    $('#name').val(''); // sets the value of the input to empty after "submiting" the item
  });

});

// ==================== CALLS ==================== //

init(namesArray); // render the todoList when the page is loaded

// =============================================== //
