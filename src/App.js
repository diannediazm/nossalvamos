import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

//Pages
import HomePage from './pages/homepage/homepage.component';
import IniciativaPage from './pages/iniciativa/iniciativa.component';
import ContactoPage from './pages/contacto/contacto.component';
import MotivacionPage from './pages/motivacion/motivacion.component';
import SalvadorasPage from './pages/salvadoras/salvadoras.component';

// Component
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

const App = () => (
      <Fragment>
        <Header />
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/iniciativa' component={IniciativaPage}/>
            <Route path='/salvadoras' component={SalvadorasPage}/>
            <Route path='/contacto' component={ContactoPage}/>
            <Route path='/motivacion' component={MotivacionPage}/>
          </Switch>
        <Footer />
      </Fragment>
);

App.displayName = 'App';

export default App;
