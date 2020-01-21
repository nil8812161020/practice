import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderSite from './component/HeaderSite';
import Content from './component/Content';
import SideBar from './component/SideBar'
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import SimpleCal from './component/SimpleCal';
import NewTask from './component/NewTask';
import CustomerList from './component/CustomerList';
import WinterSeason from './component/WinterSeason';
import Home from './component/Home';
import UserList from './component/UserList';

function App() {
  return (
    <>
      <BrowserRouter>
        <nav className='nav navbar border colorhead text-light justify-content-center center m-2  '>
          <h2 >Practices</h2>
        </nav>
        <div className='container m-2 p-0'>
          <div className='row'>
            <div className='col-md-2 m-0'>
              <SideBar />
            </div>
            <div className='col-md-9'>
              <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route exact path='/simplecal' component={SimpleCal} ></Route>
                <Route path='/newtask' component={NewTask}  ></Route>
                <Route path='/customerlist' component={CustomerList}  ></Route>
                <Route path='/winterseason' component={WinterSeason}  ></Route>
                <Route path='/userlist' component={UserList}  ></Route>
                {/* <Route exact path='/' component='index.html'></Route> */}
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
