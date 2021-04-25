import React from 'react';
import SALVADORAS_DATA from './salvadoras.data';
import SalvadorasList from '../../components/salvadoras-list/salvadoras-list.component';

import './salvadoras.styles.scss';

class Salvadoras extends React.Component {
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
                <h1 className='title-salvadoras'>SALVADORAS</h1>
                {collections.map(({ id, ...otherCollectionProps}) => (
                    <SalvadorasList key={id} {...otherCollectionProps}/>
                ))}
            </div>
        );
    }
};

export default Salvadoras;






