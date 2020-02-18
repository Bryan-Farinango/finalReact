import React, {Component} from "react";
import {Card, Carousel} from "antd";
import Users from "../services/users";
import {Form, FormGroup, Label, Input, Button, ButtonGroup,Jumbotron, Spinner} from "reactstrap";
import {Link} from "react-router-dom";


const p1 = require('../images/p1.jpg');

const p2 = require('../images/p2.jpg');
const p3 = require('../images/p3.jpg');
const p4 = require('../images/p4.jpg');
const p5 = require('../images/p5.jpg');



class Perfil extends React.Component{




    state = {

        tasks: [],
        tasksList: []
    }




    async handleClickUser(initialState) {
        const tasks = await Users.getUsersApi();
        this.setState((initialState) => {
            return {
                tasks: [
                    ...initialState.tasks,
                    ...tasks
                ]
            }
        })
    }


    /*
    constructor() {
        super();
        this.state = {
            user: {},
        }
    }


    async componentDidMount() {
        const token =  localStorage.getItem('token');
        var url = 'http://localhost:8000/api/usuarios';
        console.log(token);
        fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: "Bearer " + token,
            },

        })
        .then(response => {
            if(response.ok){
                return response.json();
            }
                throw new Error("Oops ha ocurrido un error");
            })
        /*.then(user => console.log(user))
        .then(user => this.setState({ user }))
        .catch(e => console.log(e));

    }
    */

    /*
        {this.state.user.email}
    */

    render() {

        const { tasks, tasksList} = this.state;
        return (
            <div className="Lineas row">

                <div className="col-md-3">
                    <div className="Izquierda">
                        <Jumbotron>
                            <h2 className="display-5">Perfil de Usuario</h2>
                            <img src={p1}/>
                            <hr className="my-2" />
                            <p className="lead">
                                <p>Bienvenido</p>
                                <Button color="success" onClick={() => this.handleClickUser(tasks.id)}>Configuracion de perfil</Button>
                                <br/>
                                <code>Usuario: {tasks.map((task) =>  <p>{task.email},<br/> {task.roles}</p> )} </code>

                            </p>
                        </Jumbotron>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="Centro">

                            <h1 className="display-6">Ellos necesitan nuestra ayuda</h1>
                            <p className="lead">Ahora formas parte de una gran comunidad que busca brindar ayuda y voluntariado para animales abandonados o en adopción.</p>
                            <hr className="my-2" />
                            <img src={p2} alt=""/><br/>

                            <p className="lead">No se trata solo de que los animales cuenten con un techo para que no pasen frío en las calles. Lo que se busca es que las mascotas tengan un hogar donde se las cuide y trate como a un integrante más de la familia.
                            </p>
                            <img src={p3} alt=""/>



                    </div>
                </div>

                <div className="col-md-3">
                    <div className="Derecha">
                        <Jumbotron>

                            <h3 className="display-7">Configuración</h3>
                            <p className="lead">Tú apoyo es importante</p>
                            <hr className="my-2" />
                            <p>Vuelve pronto</p>
                            <p className="lead">
                                <Link className="btn btn-danger"  to="/salir" >Cerrar Sesión</Link>
                            </p>
                        </Jumbotron>
                    </div>
                </div>




            </div>
        );
    }

}

export default Perfil