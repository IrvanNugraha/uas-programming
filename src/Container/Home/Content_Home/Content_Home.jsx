import React,{Component} from 'react';
import CardProduct from '../../../Component/CardProduct/CardProduct';
import yellow from '../../../Image/polo_yellow.jpeg';
import black from '../../../Image/react_cloth.png';


class ContentHome extends Component{
    render(){
        return(
            <div>
                <h1>What Is DeadNaught</h1>
                <p>Is a retail store who sell a all clothing from hodies to shirt</p>
                <hr/>
                <CardProduct image={yellow} title="Polo DedNaught" desc="Color : Yellow" price="Rp. 90.000" />
                <CardProduct image={black} title="React .Js T-Shirt" desc="Color : Black" price="Rp. 85.000"/>
                <hr/>
            </div>
        )
    }
}

export default ContentHome;