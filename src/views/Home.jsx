import React, { useState } from 'react';
import HeroTable from '../components/HeroTable';


function Home() {
  
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
            <div className="col-10">
                <h1 className="title">Heros App</h1>
            </div>
            <div className="col-2">
              {/*<Link to="/form" className="btn btn-primary btn-block btn-lg">Agregar Hero</Link>*/}
            </div>
        </div>
        <div className="row">
          <div className="col-6">
          <h2>Fellowship of the Ring</h2>
          <HeroTable heroes={heroes}/>
        
          </div>
          <div className="col-6">
            <h2>Agregar nuevo Hero</h2>
            <form onSubmit={handlerOnSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input required onChange={handlerOnChange} type="text" className="form-control" id="name" placeholder="Name" value={form.name}  name={'name'}/>
              </div>

              <div className="form-group">
                <label htmlFor="race">Race</label>
                <input required onChange={handlerOnChange} type="text" className="form-control" id="race" placeholder="Race" value={form.race} name={'race'}/>
              </div>

              <div className="form-group">
                <label htmlFor="age">Age</label>
                <input required onChange={handlerOnChange} type="number" className="form-control" id="age" placeholder="Age" value={form.age} name={'age'}/>
              </div>

              <div className="form-group">
                <label htmlFor="weapon">Weapon</label>
                <input required onChange={handlerOnChange} type="text" className="form-control" id="weapon" placeholder="Weapon" value={form.weapon}  name={'weapon'}/>
              </div>
              <hr />
              <button type="submit" className="btn btn-primary btn-block btn-lg">Guardar Hero</button>
            </form>
          </div>

        </div>
    </div>
  );
}

export default Home;
