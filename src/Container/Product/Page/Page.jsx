import React from 'react';
import CardProduct from '../../../Component/CardProduct/CardProduct';
import './Page.css';
import yellow from '../../../Image/polo_yellow.jpeg';
import black from '../../../Image/react_cloth.png';


const Page = () => {
    return(
        <div className="wep">
            <hr/>
            <div className="conta">
                <div className="sidenav">
                    <p className="cart-title">Cart</p>
                    <div className="icon-cart-bg">
                        <a href="/oncart"><li className="fa fa-shopping-cart"></li></a>
                    </div>  
                </div>
            </div>
            <hr/>
            <div className="conta">
                <CardProduct image={yellow} title="Polo DedNaught" desc="Color : Yellow" price="Rp. 90.000" />
                <CardProduct image={black} title="React .Js T-Shirt" desc="Color : Black" price="Rp. 85.000"/>
            </div>
            <hr/>
            <div className="conta">
                <CardProduct image="" title="DedNaught Shirt" desc="Color : White" price="Rp. 100.000" />
            </div>
            <hr/>
            <div className="conta">
                <div className="next-counter-prev-wrap">
                    <ul className="page-counter">
                        <a href="/product" className="btn btn-danger" id="prev">Prev</a>
                        <li className="page-count"><a href="/product/?hlm=1">1</a></li>
                        <li className="page-count"><a href="/product/?hlm=2">2</a></li>
                        <li className="page-count"><a href="/product/?hlm=3">3</a></li>
                        <a href="/product" className="btn btn-primary" id="next">Next</a>
                    </ul>
                </div>
            </div>
            <hr/>
        </div>
    );
}

export default Page;