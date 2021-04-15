import React from 'react';
import SALVADORAS_DATA from '../salvadoras/salvadoras.data';
import SalvadorasList from '../../components/salvadoras-list/salvadoras-list.component';

class Ejercicio extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SALVADORAS_DATA
        };
    }
    render() {
        const { collections } = this.state;
        return (
            <div>
                {collections
                    .filter((items, idx) => idx === 1)
                    .map(({ id, ...otherItemProps }) => (
                    <SalvadorasList key={id} {...otherItemProps} />
                ))}
            </div>
        );
    }
};

export default Ejercicio;