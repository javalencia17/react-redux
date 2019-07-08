import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';

const NavBar = (props) => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        
            <Link to={'/'} className="navbar-brand" > Productos SyQual 10</Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>




            <div className="collapse navbar-collapse" id="navbarColor02">
           
                <Link to={'/productos/nuevo'} className="btn btn-danger my-2 my-sm-0" >
                    Agregar producto +
                </Link>
                
            </div>
        </nav>
    );
}
 
export default NavBar;