import React, { Component, Fragment } from 'react';
import FormProducto from '../../components/FormProducto/FormProducto';

/* ---------------------------------- redux --------------------------------- */
import { connect } from 'react-redux';
import { mostrarProducto, editarProducto } from '../../redux/actions/productosActions';

class EditarProducto extends Component {

  state = {
    id: '',
    nombre: '',
    lenguaje: '',
  }
  
  componentDidMount (){
    const { id } = this.props.match.params;
    this.props.mostrarProducto( id );
  }

  componentWillReceiveProps(nextProps, nextState){
    const {nombre, lenguaje, id} = nextProps.producto;
    this.setState({
        id,
        nombre,
        lenguaje
    });
 }

  handleClick = e => {
    e.preventDefault();
    //console.log('state',this.props.editarProducto(this.state));return;
      this.props.editarProducto(this.state);
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

const mapStateToProps = state => ({
  producto: state.productosReducer.producto
})


export default connect(mapStateToProps, {mostrarProducto, editarProducto}) (EditarProducto);