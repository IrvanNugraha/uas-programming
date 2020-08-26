import React, {Component,Fragment} from 'react';
import Hero from '../../Component/Hero/Hero';
import './Home.css';
import Content_Home from './Content_Home/Content_Home';



class Home extends Component{
    render(){
        return(
            <Fragment>   
                <div className="wep">
                    <hr/>
                    <div className="conta">
                        <h1 className="judul">What's New's?</h1>
                    </div>

                    <hr/>

                    <div className="conta">
                        {/* Hero */}
                        <Hero />
                    </div>
                    
                    <hr/>

                    <div className="conta">
                        <div className="sidenav">
                            <div className="icon-cart-bg">
                                <a href="/oncart"><li className="fa fa-shopping-cart"></li></a>
                            </div>  
                        </div>
                    </div>
                    

                    <hr/>

                    <div className="conta">
                        <Content_Home />
                    </div>

                    <hr/>
                </div>
            </Fragment>
        );
    }
}

export default Home;