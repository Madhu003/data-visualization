import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Bar } from 'react-chartjs-2';
import { beepSound } from './service/Utility';

import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import InsertionSort from "./SortingComponents/InsertionSort";

function App() {
   
    return (

        <div className='App'>
            <Router>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#">COVID19 Status</a>
                    <Nav activeKey="/active">
                        <Nav.Item>
                            <Link to='/insertion-sort'>Insertion Sort</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to='/india'>India</Link>
                        </Nav.Item>
                    </Nav>
                </nav>
                <Route path='/home' exact component={InsertionSort}></Route>
                <Route path='/' exact component={InsertionSort}></Route>
                {/* <Route path='/india' exact component={India}></Route> */}
            </Router>
        </div>
       
    );
}

export default App;
