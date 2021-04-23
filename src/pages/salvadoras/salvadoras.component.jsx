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








/*import React from 'react';
import Directory from '../../components/directory/directory.component';
import './salvadoras.styles.scss';

const Salvadoras = () => (
    <div className='salvadoras'>
        <h1>SALVADORAS</h1>
        <Directory />
    </div>
    
);


export default Salvadoras; */