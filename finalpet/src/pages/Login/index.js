import React, {Component} from "react";
import {Form, FormGroup, Label, Input, Button, Alert, Jumbotron, Container} from "reactstrap";
import ReactDOM from 'react-dom';



class Login extends Component{


    state = {
      email: "",
      pass: " "


    }

    constructor(props) {
        super(props)
        console.log(this.props)
        this.state = {
            message : this.props.location.state ? this.props.location.state.message: '',
        }

    }

    handleChangeUser = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    handleChangePass = (e) => {
        this.setState({
            pass: e.target.value
        })
    }


    /*
    signIn = () => {

        var data = { username: "bryan@bryan.com", password: this.state.password};
        console.log(data);

        const requestInfo = {
            method: 'POST',
            body: JSON.stringify({data}),
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
        };

        fetch( 'http://localhost:8000/api/login_check', requestInfo)
        .then( response => {
            if (response.ok){
                return response.json()
            }
                throw new Error("Login invalido");
            })
        .then(token => console.log(token))
        .catch( e => {
            this.setState({message: e.message})
        })

    }
    */

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



    }


    render() {
        return(
            <div className="App">


                <div className="col-md-6">
                    {
                        this.state.message !== ''?(
                            <Alert color="danger">{this.state.message}</Alert>
                        ): ''
                    }
                    <Form >
                        <FormGroup>
                            <Label className="display-6"  htmlFor="username">email</Label>
                            <Input  className="display-3" id="email" onChange={this.handleChangeUser} placeholder="Ingrese su email"/>
                        </FormGroup>

                        <FormGroup>
                            <Label htmlFor="password">Contraseña</Label>
                            <Input type="password" id="pass" onChange={this.handleChangePass} placeholder="Ingrese su Contraseña"/>
                        </FormGroup>

                        <Button color="primary" onClick={this.signIn}>Ingresar</Button>
                    </Form>
                </div>

            </div>


        );
    }

}
export default Login