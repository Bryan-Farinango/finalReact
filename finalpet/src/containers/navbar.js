import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Menu, Icon} from 'antd';
import EventsForm from "../components/EventsForm";
import {Link} from "react-router-dom";


const { SubMenu } = Menu;



const l1 = require('../images/life.png');

class Navbar extends React.Component {

    state = {
        current: '',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    render() {
        return (

            <div className="App ">
                <div>
                    <img className="logo" src={l1}/>
                </div>
                <br/>
                <div>
                <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">

                    <Menu.Item key="home">
                        <Link to="/home" >
                            <Icon type="home" />
                            Inicio
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="pet" enabled>
                        <Link to="/Mascotas">
                            <Icon type="github" />
                            Mascotas
                        </Link>
                    </Menu.Item>

                    <Menu.Item key="event" enabled>
                        <Link to="/Eventos" >
                            <Icon type="star" />
                            Eventos
                        </Link>
                    </Menu.Item>

                    <Menu.Item key="foundation" enabled>
                        <Link to="/Donaciones" >
                            <Icon type="build" />
                            Donaciones
                        </Link>

                    </Menu.Item>

                    <Menu.Item key="donation" enabled>
                        <Link to="/Usuarios" >
                            <Icon type="gift" />
                            Conoce amigos
                        </Link>

                    </Menu.Item>

                    <Menu.Item key="login">
                        <Link to="/Ingresar" >
                            <Icon type="user" />
                            Inicia Sesion
                        </Link>
                    </Menu.Item>

                    <Menu.Item key="register">
                        <Link to="/registrarse" >
                            <Icon type="user" />
                            Registrarse
                        </Link>
                    </Menu.Item>

                    <Menu.Item key="perfil">
                        <Link to="/perfil" >
                            <Icon type="user" />
                            Perfil
                        </Link>
                    </Menu.Item>
                </Menu>
                </div>

            </div>

        );

    }
}

export default Navbar;