import {
    MOSTRAR_PRODUCTOS,
    ELIMINAR_PRODUCTO,
    AGREGAR_PRODUCTO,
    MOSTRAR_PRODUCTO,
    EDITAR_PRODUCTO
}
    from './types';
import axios from 'axios';

export const mostrarProductosAction = () => async dispatch => {
    const respuesta = await axios.get('http://localhost:5000/productos');

    /* ----- despacha hacia el reducer, los datos obtenidos en la respuesta ----- */
    dispatch({
        type: MOSTRAR_PRODUCTOS,
        payload: respuesta.data
    })
}

export const mostrarProducto = id => async dispatch => {
    const respuesta = await axios.get(`http://localhost:5000/productos/${id}`)
    dispatch({
        type: MOSTRAR_PRODUCTO,
        payload: respuesta.data 
    })
}

export const eliminarProductoAction = id => async dispatch => {
    await axios.delete(`http://localhost:5000/productos/${id}`);
    dispatch({
        type: ELIMINAR_PRODUCTO,
        payload: id
    })
}

export const editarProducto = producto => async dispatch => {
    const respuesta = await axios.put(`http://localhost:5000/productos/${producto.id}`,producto)
    dispatch({
        type: EDITAR_PRODUCTO,
        payload: respuesta.data
    })
}

export const agregarProducto = post => async dispatch => {
    const respuesta = await axios.post('http://localhost:5000/productos', post)
    dispatch({
        type: AGREGAR_PRODUCTO,
        payload: respuesta.data
    })
}