import React, {Component, Fragment} from 'react';
import CardCategories from '../../Component/CardCategories/CardCategories';



class Categories extends Component{
    render(){
        return(
            <Fragment>
                <div className="bekgron">
                    <div className="wep">
                        <div className="conta">
                            <h1>Choose The Categories</h1>
                            <CardCategories CtgTitle="T-Shirt" />
                            <CardCategories CtgTitle="Shirt" />
                            <hr/>
                            <CardCategories CtgTitle="Hoodies" />
                            <CardCategories CtgTitle="Polo" />
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Categories;