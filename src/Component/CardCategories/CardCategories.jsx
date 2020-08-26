import React, {Fragment} from 'react';
import './CardCategories.css';


const CardCategories = (props) =>{
    return(
        <Fragment>
            <a href="/product/ctg-choose" className="choosing">
                <div className="card-ctg">
                    <p className="title-ctg">{props.CtgTitle}</p>
                </div>
            </a>
        </Fragment>
    )
}

export default CardCategories;