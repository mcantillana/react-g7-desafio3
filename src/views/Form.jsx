import React, {useState} from 'react';
import { Link } from 'react-router-dom';




function Form() {
    
    const defaultHeroes = {
        name: '',
        race: '',
        age: '',
        weapon: ''
    };

    const [form, setForm] = useState(defaultHeroes);
    const handlerOnChange = ({target}) => {
        setForm({
            ...form,
            [target.name]: target.value
        });
    }

    const handlerOnSubmit = event => {
        event.preventDefault();
        console.log(form);
        setForm(defaultHeroes);

    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                <h1>Agregar nuevo Hero <small>(<Link to="/">volver</Link>)</small></h1>
                <form onSubmit={handlerOnSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input onChange={handlerOnChange} type="text" className="form-control" id="name" placeholder="Name" value={form.name}  name={'name'}/>
                  </div>

                  <div className="form-group">
                    <label htmlFor="race">Race</label>
                    <input onChange={handlerOnChange} type="text" className="form-control" id="race" placeholder="Race" value={form.race} name={'race'}/>
                  </div>

                  <div className="form-group">
                    <label htmlFor="age">Age</label>
                    <input onChange={handlerOnChange} type="text" className="form-control" id="age" placeholder="Age" value={form.age} name={'age'}/>
                  </div>

                  <div className="form-group">
                    <label htmlFor="weapon">Weapon</label>
                    <input onChange={handlerOnChange} type="text" className="form-control" id="weapon" placeholder="Weapon" value={form.weapon}  name={'weapon'}/>
                  </div>
                  <hr />
                  <button type="submit" className="btn btn-primary btn-block btn-lg">Guardar Hero</button>
                </form>
                </div>

            </div>
        </div>

    );
}


export default Form;
