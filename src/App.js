import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

//Pages
import HomePage from './pages/homepage/homepage.component';
import IniciativaPage from './pages/iniciativa/iniciativa.component';
import SalvadorasPage from './pages/salvadoras/salvadoras.component';
import BlogPage from './pages/blog/blog.component';
import Motivacion from './pages/motivacion/motivacion.component';

// Component
import Header from './components/header/header.component';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/iniciativa' component={IniciativaPage}/>
          <Route path='/salvadoras' component={SalvadorasPage}/>
          <Route path='/blog' component={BlogPage}/>
          <Route path='/motivacion' component={Motivacion}/>
        </Switch>
      </div>
    );
  }
};

export default App;
