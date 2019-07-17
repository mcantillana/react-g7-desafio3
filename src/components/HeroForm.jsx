import React from 'react';


const HeroForm = (props) => {
    
    const {handlerOnChange, handlerOnSubmit, form} = props;

    return (
        <React.Fragment>
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
        </React.Fragment>
    );

}


export default HeroForm;