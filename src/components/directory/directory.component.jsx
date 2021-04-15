import React from 'react';
import SalvadorasList from '../salvadoras-list/salvadoras-list.component';
import './directory.styles.scss';


class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    name: 'Carmen Castillo',
                    imageUrl: 'https://www.planetadelibros.cl/usuaris/libros/fotos/326/m_libros/portada_weona-tu-podi-edicion-aniversario_carmen-castillo_202010221905.jpg',
                    describe: 'Mujer, mamá (en ese orden), relacionadora pública por descarte, directora de Mujeres que Brillan, Brilla la Tiendita y Brillemos Comunicaciones. Empresaria adicta al trabajo y al desafío, irreverente, deslenguada, motivadora innata. Se ha construido de cagazo en cagazo. Conocida por sus frases de Google maquilladas a su estilo, que llegan directo al corazón. Entre las más conocidas, #weonatupodi y #soymiputajefa, se han transformado en bandera de lucha para la difusión de su mensaje. Le pedimos algo formal para esta parte, pero nos envió esto y sí, esto es ella.',
                    linkUrl: 'https://brillalatiendita.cl/',
                    id: 1,
                    category: 'motivacion' 
                },
                {
                    name: 'Zumvaleli',
                    imageUrl: 'https://zumvaleli.cl/wp-content/uploads/2020/09/Foto-HOLA.png',
                    describe: 'Tengo 25 años, siempre me gustó bailar, me apasiona el baile, además de la odontología (estoy en 5to año). Siendo estudiante, con tanto estrés, busqué una forma de liberar esto haciendo clases de Zumba®, y no fue hasta que una profesora me motivó a convertirme en instructora el año 2015, que conseguí mi certificado. Ese año hice talleres y clases sólo para los más cercanos, lo dejé de lado por mucho tiempo hasta este año 2020, que debido a la pandemia, mi hermana, junto a mis amigas me propusieron volver a las pistas como instructora a través de Instagram, entonces renové la membresía de Zumba® que había dejado de lado, empecé de nuevo a capacitarme y le di vida a lo que conocemos como ZUMVALELI.',
                    linkUrl: 'https://zumvaleli.cl/',
                    id: 2,
                    category: 'ejercicio' 
                },
                {
                    name: 'Amikas Podcast Club',
                    imageUrl: 'https://static.wikia.nocookie.net/amikas/images/c/c2/Con_la_ayuda_de_mis_amikas.jpg/revision/latest?cb=20190123175506&path-prefix=es',
                    describe: 'Valeria Luna y María José Castro analizan lo que pasa en la semana en Instagram y conversan sobre diferentes temas con la ayuda de sus amikas de las redes sociales.',
                    linkUrl: 'https://open.spotify.com/show/2k4RFiH4ykBku9hfQTChdC?si=DEmB534vRQOozrlUK2dBOA',
                    id: 3,
                    category: 'podcasts' 
                },
                {
                    name: 'Señorita Buena Presencia',
                    imageUrl: 'https://bibliotecaviva.cl/wp-content/uploads/2019/04/senorita-buena-presencia.jpg',
                    describe: 'Viñetas que cuestionan el estereotipo femenino y las convenciones sobre las relaciones sentimentales. Las mujeres de estas viñetas pueden ser indecisas o contradictorias, pero nunca dejan de cuestionar -con un entrañable pesimismo- las convenciones y estereotipos femeninos. Señorita buena presencia es un conjunto de ilustraciones que alertan sobre las concepciones machistas naturalizadas en la sociedad a través de un humor ingenioso y desfachatado. Una radiografía contemporánea que revela a Bruta como una de las narradoras gráficas más talentosas y despiertas de su generación.',
                    linkUrl: 'https://www.instagram.com/bruta_queesbruta/?hl=es',
                    id: 4,
                    category: 'ilustradoras' 
                },
                {
                    name: 'Valeria Luna',
                    imageUrl: 'https://dojiw2m9tvv09.cloudfront.net/10744/product/portada_skincare-para-principiantes_valeria-luna_2021031621246549.jpg',
                    describe: 'Mimarse es muy necesario en estos tiempos de caos e incertidumbre. Te invito a transformar tu rutina de skincare en algo mucho más personal y curativo, para que logres ser la mejor versión de ti misma',
                    linkUrl: 'https://www.planetadelibros.cl/libro-skincare-para-principiantes/332113',
                    id: 5,
                    category: 'skincare' 
                },//
                {
                    name: 'Bordaetumadre',
                    imageUrl: 'https://crehana-public-catalog.imgix.net/images/courses/promo-images/1f41e1a7/b1feea1f.jpg',
                    describe: 'Chuchás y groserías escondidas en el eufemismo del bordado a mano',
                    linkUrl: 'https://www.instagram.com/bordaetumadre/?hl=es-la',
                    id: 6,
                    category: 'manualidades' 
                },

            ],
        };
    }
    render() {
        return (
            <div className='directory-menu'>
                {this.state.sections.map(({id, ...otherSectionProps}) => (
                    <SalvadorasList key={id} {...otherSectionProps} />
                ))}
            </div>
        );
    }
}   


Directory.displayName = 'Directory';

export default Directory;