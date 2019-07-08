import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducers from '../redux/reducers/rootReducers';

const initialState = {};

const middleware = [thunk];


/* -------------------------------------------------------------------------- */
/* createStore toma tres parámetros:                                          */
/* -------------------------------------------------------------------------- */
/* 1- La combinación de todos los reducers ---------------------------------- */
/* 2- Estado inicial -------------------------------------------------------- */
/* 3- El potenciador -------------------------------------------------------- */
/* 4- Redux Devtools -------------------------------------------------------- */


const store = createStore(
    rootReducers, 
    initialState, 
    compose(applyMiddleware(...middleware), 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));


export default store;