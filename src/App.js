import React, { Component } from 'react';
import { createBrowserHistory } from 'history';
import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import Aside from './components/Aside';
import BreadCrumb from './components/Breadcrumb';
import {Layout} from 'antd';
import 'antd/dist/antd.css';

import { Router , Switch , Route , Redirect, BrowserRouter } from 'react-router-dom';


export default class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Layout >
                    <Aside />
                    <Layout>
                        <BreadCrumb/>
                        <Home />
                    </Layout>
                </Layout>


                <Router history={ createBrowserHistory() }>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/dashboard" component={Dashboard}/>
                        <Route path="/contact" component={Contact}/>
                        <Route path="/about" component={About}/>
                        <Redirect from="*" to="/"/>
                    </Switch>
                </Router>


            </div>
        );
    }
}
