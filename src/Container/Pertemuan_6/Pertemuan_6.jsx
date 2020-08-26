import React, {Component, Fragment} from 'react';
import './Pertemuan_6.css';


class Pertemuan_6 extends Component{
    render(){
        return(
            <Fragment>
                <main>

                    {/* Header */}
                    <header>
                        <h1>DeadNaught</h1>
                    </header>

                    {/* Hero */}
                    <div className="jumbotron">
                        <h1>Welcome To DeadNaught</h1>
                        <p>This Is Hero</p>
                    </div>

                    <div className="display-desk">
                        {/* Content */}
                        <div className="content">
                            <p>Lorem Ipsum is A Good Text that is not a store but a text reserver</p>
                        </div>

                        {/* SideNav */}
                        <div className="side">
                            Cart
                        </div>
                    </div>  

                    {/* Footer */}
                    <footer>
                        <p className="copyrighted">&copy; DeadNaught</p>
                    </footer>

                </main>
            </Fragment>
        );
    }
}

export default Pertemuan_6;