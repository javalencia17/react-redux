import React, { Component } from 'react';
import  { Link } from 'react-router-dom';

/* ---------------------------------- redux --------------------------------- */
import { connect } from 'react-redux';
import { eliminarProductoAction } from '../../redux/actions/productosActions';


class Producto extends Component {

    eliminarProducto = () => {
        const {id} = this.props.info;
        this.props.eliminarProductoAction(id);
    }
     
     render() { 
        const { id, nombre, lenguaje} = this.props.info;
        return ( 
            <li className="list-group-item">
                    <div className="row justify-content-between align-items-center">
                         <div className="col-md-8 d-flex justify-content-between align-items-center">
                              <p className="text-dark m-0">
                                   {nombre}
                              </p>
                              
                              <span className="badge badge-warning text-dark">Lenguaje: {lenguaje}</span>
                         </div>
                         <div className="col-md-4 d-flex justify-content-end acciones">
                              <Link to={`productos/editar/${id}`} className="btn btn-primary mr-2">Editar</Link>
                              <button type="button" className="btn btn-danger" onClick={this.eliminarProducto} >Borrar</button>
                         </div>
                    </div>
            </li>
        );
     }
}

/* Permite al componente tener acceso a las funciones ----------------------- */
const mapDispatchToProps = {
    eliminarProductoAction
}
  
export default connect(null, mapDispatchToProps)(Producto);