import React from 'react';
import SalvadorasItem from '../salvadoras-item/salvadoras-item.component';
import './salvadoras-list.styles.scss';

const SalvadorasList =({title, items}) => (
  <div className='lista'>
    <h1>{title.toUpperCase()}</h1>
    <div className='preview'>
      {items
        .filter((items, idx) => idx < 4)
        .map(({ id, ...otherItemProps }) => (
          <SalvadorasItem key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);

SalvadorasList.displayName = 'SalvadorasList';

export default SalvadorasList;