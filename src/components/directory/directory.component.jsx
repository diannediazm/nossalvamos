import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'La Motivation',
                    imageUrl: "https://image.freepik.com/foto-gratis/signo-genero-femenino-bocadillo-rodeado-truenos_23-2148403565.jpg",
                    id: 1,
                    linkUrl: 'motivacion'
                },
                {
                    title: 'Muévelo, Muévelo',
                    imageUrl: "https://image.freepik.com/foto-gratis/mujer-mostrando-musculos-parte-superior-violeta-lado_23-2148405135.jpg",
                    id: 2,
                    linkUrl: 'ejercicio'
                },
                {
                    title: 'Podcasts',
                    imageUrl: "https://image.freepik.com/foto-gratis/mano-mujer-mostrando-poder-trueno-megafono_23-2148403582.jpg",
                    id: 3,
                    linkUrl: 'podcasts'
                }, 
                {
                    title: 'Díselo bonito',
                    imageUrl: "https://image.freepik.com/foto-gratis/formas-laterales-mujer-sosteniendo-megafono-flores_23-2148405260.jpg",
                    id: 3,
                    linkUrl: 'ilustradoras'
                },
                {
                    title: 'Antes muerta que sencilla',
                    imageUrl: "https://image.freepik.com/foto-gratis/mujer-hablando-megafono-sosteniendo-carton-cartel-yo-tambien_23-2148405263.jpg",
                    id: 3,
                    linkUrl: 'skincare'
                }, 
                {
                    title: 'Manualidades',
                    imageUrl: "https://image.freepik.com/foto-gratis/8-marzo-truenos-etiqueta-rosa_23-2148403546.jpg",
                    id: 3,
                    linkUrl: 'manualidades'
                }                
            ],
        };        
    }

    render() {
        return (
            <div className='directory-menu'>
                {this.state.sections.map(( {id, ...otherSectionProps}) => (
                    <MenuItem key={id} {...otherSectionProps} />
                ))}
            </div>
        );
    }
}

export default Directory;
