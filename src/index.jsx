import React from 'react';
import ReactDom from 'react-dom';

let namesArray = []; // where the itens will be stored
let id = 0; // autoincremental primaryKey for each item 

const removeName = e => {
  let tempArray = namesArray.filter(name => {
    return name.props.id !== e.currentTarget.id;
  });
  namesArray = tempArray.splice(0);
  init(namesArray);
}

const addName = name => {
  let newName = <li className="names" onClick={removeName} key={`name${id}`} id={`name${id}`}>{name}</li>;
  id += 1;
  namesArray.push(newName);
}

const init = (array) => {
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

init(namesArray);

$(document).ready(() => {

  $('#add').click(e => {
    addName($('#name').val());
    $('#name').val('');
    init(namesArray);
  });

});