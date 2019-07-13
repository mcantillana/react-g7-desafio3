import React from 'react';


class HeroRow extends React.Component {
    render() {

        const {name, race, age, weapon} = this.props.hero;

        return (
            
            <tr className="character-row">
              <td>{name}</td>
              <td>{race}</td>
              <td>{age}</td>
              <td>{weapon} ⚔</td>
              <td>
                <div className="controls">
                  <div><span aria-label="kill icon">☠</span> Kill</div>
                  <div><span aria-label="Ring icon">💍</span> Use Ring</div>
                </div>
              </td>
            </tr>
        );
    }
}

export default HeroRow;