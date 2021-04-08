import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

//Pages
import HomePage from './pages/homepage/homepage.component';
import IniciativaPage from './pages/iniciativa/iniciativa.component';
import ContactoPage from './pages/contacto/contacto.component';
import Motivacion from './pages/motivacion/motivacion.component';

// Component
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/iniciativa' component={IniciativaPage}/>
          <Route path='/contacto' component={ContactoPage}/>
          <Route path='/motivacion' component={Motivacion}/>
        </Switch>
        <Footer />
      </div>
    );
  }
};

export default App;
