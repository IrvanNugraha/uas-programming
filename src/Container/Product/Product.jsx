import React,{Component,Fragment} from 'react';
import './Product.css';
import Page from './Page/Page';



class Product extends Component{
    render(){
        return(
            <Fragment>
                <div className="bekgron">
                    <Page />
                </div>
            </Fragment>
        );
    }
}

export default Product;