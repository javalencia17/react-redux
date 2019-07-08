import {
    MOSTRAR_PRODUCTOS,
    ELIMINAR_PRODUCTO,
    AGREGAR_PRODUCTO,
    MOSTRAR_PRODUCTO,
    EDITAR_PRODUCTO
} from '../actions/types';

/* Cada reducer tiene su propio state --------------------------------------- */


const intitialState = {
    //IS - Initial State
    productos: [],
}

/* Función reductora que recibe el state actual y devuelve el nuevo state --- */
export default function (state = intitialState, action) {
    switch (action.type) {
        case MOSTRAR_PRODUCTOS:
            return {
                ...state,
                //NS - Nuevo State
                productos: action.payload
            }
        case MOSTRAR_PRODUCTO:
            return {
                ...state,
                producto: action.payload
            }
        case EDITAR_PRODUCTO:
            return {
                ...state,
                productos: state.productos.map(
                     producto => producto.id === action.payload.id
                     ? (producto = action.payload)
                     : producto
                )
            }
        case ELIMINAR_PRODUCTO:
            return {
                ...state,
                productos: state.productos.filter(producto => producto.id !== action.payload)
            }
        case AGREGAR_PRODUCTO:
            return {
                ...state,
                productos: [...state.productos, action.payload]
            }

        default:
            return state;
    }
}

