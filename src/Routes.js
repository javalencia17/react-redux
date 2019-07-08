import React from 'react';
import { Switch, Route } from 'react-router-dom';

/**
|--------------------------------------------------
| Componentes
|--------------------------------------------------
*/ 
import Productos from './containers/Productos/Productos';
import NuevoProducto from './containers/NuevoProducto/NuevoProducto';
import EditarProducto from './containers/EditarProducto/EditarProducto';
/* -------------------------------------------------------------------------- */




const AppRoutes = () => {
    return ( 
        <Switch>
            <Route exact path="/" component={Productos}></Route>
            <Route exact path="/productos/nuevo" component={NuevoProducto}></Route>
            <Route exact path="/productos/editar/:id" component={EditarProducto}></Route>
        </Switch> 
    );
}
 
export default AppRoutes;