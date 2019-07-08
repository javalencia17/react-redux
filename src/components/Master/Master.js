import React from 'react';
import NavBar from '../NavBar/NavBar';
import './style.css'




const Index = (props) => {
    return ( 
        <React.Fragment>
            <NavBar />
            <div className="page">
                {props.children}
            </div>
        </React.Fragment>
    );
}
 
export default Index;