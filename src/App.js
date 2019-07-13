import React from 'react';
import Home from './views/Home';
import Form from './views/Form';
import './assets/css/style.css';
import store from './store/store';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


const {Provider} = store;


function App() {
  
  const heroes = [
      { name: 'Gandalf', race: 'Maia', age: '2019', weapon: 'Staff 🏑'},
      { name: 'Aragorn', race: 'Human', age: '120', weapon: 'Sword ⚔'},
      { name: 'Legolas', race: 'Elf', age: '200', weapon: 'Bow 🏹'},
      { name: 'Gimli', race: 'Dwarf', age: '139', weapon: 'Axe ⚒'},

  ]


  return (
    <Provider value={heroes}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/form" component={Form} />        
        </Switch>  
      </BrowserRouter>
    </Provider>
  );
}

export default App;
