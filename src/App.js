import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

//Pages
import HomePage from './pages/homepage/homepage.component';
import IniciativaPage from './pages/iniciativa/iniciativa.component';
import ContactoPage from './pages/contacto/contacto.component';
import SalvadorasPage from './pages/salvadoras/salvadoras.component';
import MotivacionPage from './pages/motivacion/motivacion.component';
import EjercicioPage from './pages/ejercicio/ejercicio.component';
import PodcastsPage from './pages/podcasts/podcasts.component';
import ArtistasPage from './pages/artistas/artistas.components';
import CutisPage from './pages/cutis/cutis.component';
import ManualidadesPage from './pages/manualidades/manualidades.component';

// Component
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import NotFound from "./components/NotFound/index";

const App = () => (
      <Fragment>
        <Header />
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/iniciativa' component={IniciativaPage}/>
            <Route path='/salvadoras' component={SalvadorasPage}/>
            <Route path='/contacto' component={ContactoPage}/>
            <Route path='/motivacion' component={MotivacionPage}/>
            <Route path='/ejercicio' component={EjercicioPage}/>
            <Route path='/podcasts' component={PodcastsPage}/>
            <Route path='/artistas' component={ArtistasPage}/>
            <Route path='/cutis' component={CutisPage}/>
            <Route path='/manualidades' component={ManualidadesPage}/>
            <Route component={NotFound} />
          </Switch>
        <Footer />
      </Fragment>
);

App.displayName = 'App';

export default App;
