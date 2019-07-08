import React, { Component, Fragment } from 'react';
import FormProducto from '../../components/FormProducto/FormProducto';

/* ---------------------------------- redux --------------------------------- */
import { connect } from 'react-redux';
import { agregarProducto } from '../../redux/actions/productosActions';

class NuevoProducto extends Component {

  state = {
    nombre: '',
    lenguaje: '',
  }

  handleClick = e => {
    e.preventDefault();
    this.props.agregarProducto(this.state);
    this.props.history.push('/');
  }

  handleChange = e => {
     this.setState({
       [e.target.name]: e.target.value
     })
  }

  render() {
    return (
      <Fragment>
        <div className="col-sm-10 ">
          <div className="card border-primary mb-3" >
            <div className="card-header"></div>
            <div className="card-body">
              <h4 className="card-title">Nuevo  producto</h4>
              <FormProducto
                handleClick={this.handleClick}
                handleChange={this.handleChange}
                producto={this.state}
              />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

/* Permite al componente tener acceso a las funciones ----------------------- */
const mapdispatchToProps = {
  agregarProducto
}


export default connect(null, mapdispatchToProps) (NuevoProducto);