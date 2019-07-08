import React, { Component } from 'react';
/* ------------------------------- componentes ------------------------------ */
import Producto from '../Producto/Producto';
/* ---------------------------------- redux --------------------------------- */
import { connect } from 'react-redux';
import { mostrarProductosAction } from '../../redux/actions/productosActions';


class Productos extends Component {


  componentDidMount () {
    this.props.mostrarProductosAction();
  }

  render() {
    const {productos} = this.props;
    return (
        <React.Fragment>
        <h2 className="text-center my-5">Listado de Productos</h2>
        <div className="row justify-content-center">
            <div className="col-md-8">
              <ul>
                {productos.map(producto => (
                  <Producto
                    key={producto.id}
                    info={producto}
                  />
                ))}
              </ul>
            </div>
        </div>
      </React.Fragment>
    );
  }

}


/* Permite al componente tener acceso a las propiedades --------------------- */
const mapStateToProps = state => ({
  productos: state.productosReducer.productos
})


export default connect(mapStateToProps, {mostrarProductosAction})(Productos);