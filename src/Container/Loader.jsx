import React, {Component , Fragment} from 'react';
import Home from './Home/Home';
import Header from '../Component/Header/Header';
import Product from './Product/Product';
import Footer from '../Component/Footer/Footer';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Categories from './Categories/Categories';
import Search from './Search/Search';
import About from './About/About ';


class Loader extends Component{
    render(){
        return(
            <Fragment>
                <Router>

                    {/* Header */}
                    <Header />

                    {/* Load */}
                    <Switch>

                        <Route path="/product">
                            <Product /> 
                        </Route>

                        <Route path="/ctg">
                            <Categories />
                        </Route>
                        
                        <Route path="/about">
                            <About />
                        </Route>

                        <Route path="/">
                            <Home />
                        </Route>

                        <Route path="/srch">
                            <Search />
                        </Route>

                        <Route path="/cont">

                        </Route>

                    </Switch>

                    {/* Footer */}
                    <Footer />

                </Router>            
            </Fragment>
        );
    }
}

export default Loader;