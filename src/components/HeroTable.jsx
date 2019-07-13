import React from 'react';
import HeroRow from './HeroRow';

class HeroTable extends React.Component {
  

    constructor(props) {
      super(props);

      this.state = {

      }
    }

    render() {
      
      const {heroes} = this.props; 

      return (

          <table className="characters-table table table-hover table-border">
           <tbody>
            <tr className="character-row">
              <th>Name</th>
              <th>Race</th>
              <th>Age</th>
              <th>Weapon</th>
              <th></th>
            </tr>
            { 
              heroes.map(
                (hero, index) => 
                  <HeroRow 
                    key={index} 
                    hero={hero} 
                    index={index}
                  />
              )
            }
            
           </tbody>
         </table>
      );

    }

}

export default HeroTable;