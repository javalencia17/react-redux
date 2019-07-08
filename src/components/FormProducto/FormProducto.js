import React from 'react';

const FormProducto = (props) => {
    return (
        <form onSubmit={  props.handleClick  }>
            <div className="form-group">
                <label className="col-form-label" >Nombre   </label>
                <input onChange={props.handleChange} type="text" value={props.producto.nombre} className="form-control" placeholder="Nombre" name="nombre" required  />
            </div>
            <div className="form-group">
                <label className="col-form-label">Lenguaje   </label>
                <input onChange={props.handleChange} type="text"  className="form-control" value={props.producto.lenguaje} placeholder="Lenguaje" name="lenguaje" required />
            </div>
            <button type="submit" className="btn btn-primary">Guardar</button>
        </form>
    )
}


export default FormProducto;