import React, {Component} from 'react';
import {Button, Form, FormGroup, Label, Input, FormText, Alert, Jumbotron} from 'reactstrap';


class Register extends Component{

    /*
    signIn =() => {
        var url = 'http://localhost:8000/api/login_check';
        var data = {
            username: this.state.email, password: this.state.pass
        };
        fetch(url,{
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        }).then( response => {
            if (response.ok){
                return response.json()
            }
            throw new Error("Login invalido");
        })
            .then(response => {
                console.log(response)
                localStorage.setItem('token', response.token);
                this.props.history.push("/Perfil");
                return;
            })
            .catch( e => {
                this.setState({message: e.message})
            })



    }*/

    state = {
        correo: " ",
        pass: " "



    }

    handleChangeCorreo = (e) => {
        this.setState({
            correo: e.target.value
        })
    };

    handleChangePass = (e) => {
        this.setState({
            pass: e.target.value
        })
    };
    registro = () => {
        var url = 'http://localhost:8000/api/usuarios';
        var data = { email: this.state.correo,
            password: this.state.pass,

        };
        fetch(url, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(res=> res.json())
            .catch(error =>
                console.error('Error:', error))

    }

    render() {
        return(
            <div className="App">
                <div className="msgregistro">
                    <h1>Bienvenido al registro</h1>
                </div>
                <div className="registerform">

                 <Jumbotron>
                <Form>
                    <FormGroup>
                        <Label for="exampleEmail" onChaange={this.handleChangeCorreo}>Ingrese su correo electrónico</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="example@example.com" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword" onChange={this.handleChangePass}>Ingrese una contraseña</Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="contraseña" />
                    </FormGroup>



                    <Button color="success" onClick={this.registro}>Registrarse</Button>
                </Form>
                 </Jumbotron>
                </div>


            </div>


        );
    }

}
export default Register