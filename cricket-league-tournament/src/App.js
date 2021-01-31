import logo from './logo.svg';
import './App.css';
import {data} from './data'
import {BrowserRouter,Switch,NavLink,Route} from 'react-router-dom'
import Countries from './components/Countries';
import Teams from './components/Teams';
import Players from './components/Players';
import Matches from './components/Matches';
import Scoretable from './components/Scoretable';
import Result from './components/Result';

function App() {
  return (
    <div className="grid-container">
      <BrowserRouter>
    <header>
    <nav>
      <ul>
    <li><NavLink to="/countries" activeClassName='active-link'>Countries</NavLink></li>
   <li> <NavLink to='/teams' activeClassName='active-link'>Teams</NavLink></li>
    <li><NavLink to="/venue" activeClassName='active-link'>Venue</NavLink></li>
    <li><NavLink to='/players' activeClassName='active-link'>Players</NavLink></li>
    <li><NavLink to='/matches' activeClassName='active-link'>Matches</NavLink></li>
    <li><NavLink to='/result' activeClassName='active-link'>Result</NavLink></li>
    <li><NavLink to='/score-table' activeClassName='active-link'>Tournament Score Table</NavLink></li>
    </ul>
    </nav>
    </header>
    <main>

    <Switch>
      <Route exact path='/'>
        Welcome To Portal
      </Route>
      <Route path='/countries'>
        <Countries data={data}/>
      </Route>
      <Route path='/teams'>
        <Teams data={data}/>
      </Route>
      <Route  path='/players'>
        <Players data={data}/>
      </Route>
      <Route path='/venue'>
        <h1>Wankhede Stadium,Mumbai</h1>
        <h2><a href="https://www.google.com/maps/place/Wankhede+Stadium/@18.9388579,72.8235753,17z/data=!3m1!4b1!4m5!3m4!1s0x3be7d1e0f0a26a81:0x87d6e47e04df3916!8m2!3d18.9388528!4d72.825764" target="_blank">Locate on Map</a></h2>

      </Route>
      <Route path='/matches'>
        <Matches/>
      </Route>
      <Route path='/score-table'>
        <Scoretable data={data}/>
      </Route>
      
      <Route path='/result'>
        <Result/>
      </Route>
      
    </Switch>
    
    </main>
    <footer>
     <h3>© 2021 Developed by Kamalakar G</h3>
    </footer>
    </BrowserRouter>
    </div>
  );
}

export default App;
