import React, { useState } from 'react';
import HeroTable from '../components/HeroTable';
import HeroForm from '../components/HeroForm';


const Home = (props) => {
  
  const defaultHeroes = {
      name: '',
      race: '',
      age: '',
      weapon: ''
  };


  const obj_heroes = [
      { name: 'Gandalf', race: 'Maia', age: '2019', weapon: 'Staff 🏑'},
      { name: 'Aragorn', race: 'Human', age: '120', weapon: 'Sword ⚔'},
      { name: 'Legolas', race: 'Elf', age: '200', weapon: 'Bow 🏹'},
      { name: 'Gimli', race: 'Dwarf', age: '139', weapon: 'Axe ⚒'},

  ]
  const [heroes, setHero] = useState(obj_heroes);
  const [form, setForm] = useState(defaultHeroes);
  


  const handlerOnChange = ({target}) => {
      setForm({
          ...form,
          [target.name]: target.value
      });
  }

  const handlerOnSubmit = event => {
      event.preventDefault();

      setHero(heroes.concat(form));
      console.log(heroes);
      setForm(defaultHeroes);

  }


  return (
    <div className="container">
     
        <div className="row mb-4">
            <div className="col-12">
                <h1 className="title">Heros App</h1>
            </div>
        </div>
        <div className="row">
          <div className="col-6">
          <h2>Fellowship of the Ring</h2>
          <HeroTable heroes={heroes}/>
        
          </div>
          <div className="col-6">
            <HeroForm
              form={form} 
              handlerOnSubmit={handlerOnSubmit} 
              handlerOnChange={handlerOnChange}
            />
          </div>

        </div>
    </div>
  );
}

export default Home;
