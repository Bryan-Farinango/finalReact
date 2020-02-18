import React from "react";
import {Switch, Route} from "react-router-dom";
import Home from "./components/Home";

import EventsForm from "./components/EventsForm";
import Navbar from "./containers/navbar";
import UserForm from "./components/UserForm";
import PetForm from "./components/PetForm";
import DonationForm from "./components/DonationForm";
import Login from "./pages/Login";
import Perfil from "./pages/Perfil";
import PrivateRoute from "./auth";
import Logout from "./pages/Logout";
import Register from "./pages/Register";

const Routes = () => {
    return(
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/Eventos" component={EventsForm}/>
            <Route path="/Usuarios" component={UserForm}/>
            <Route path="/Mascotas" component={PetForm}/>
            <Route path="/Donaciones" component={DonationForm}/>
            <Route path="/Ingresar" component={Login}/>
            <PrivateRoute path="/Perfil" component={Perfil}/>
            <Route exact path="/Salir" component={Logout}/>
            <Route path="/Registrarse" component={Register}/>
        </Switch>

    );
}

export default Routes;