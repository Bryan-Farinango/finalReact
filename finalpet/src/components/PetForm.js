import React from "react";
import Events from "../services/events";
import Pets from "../services/pet";

import { Card, Input} from 'antd';
import 'antd/dist/antd.css';
let valor;

class PetForm extends React.Component{


    state = {
        name: " ",
        age: " ",
        descripcion: " ",
        image: " ",
        tasksEvent: []


    }
    namePet;
    agePet;
    descriptionPet;




    async handleClickPet(initialState) {
        const tasks = await Pets.getPetApi();
        this.setState((initialState) => {
            return {
                tasksEvent: [
                    ...initialState.tasksEvent,
                    ...tasks
                ]
            }
        })
    }

    handleChangeTitle = (e) => {
        this.setState({
            name: e.target.value
        })
    };



    handleChangeDescription = (e) => {
        this.setState({
            descripcion: e.target.value
        })
    }

    handleChangeImage = (e) => {
        this.setState({
            image: e.target.value
        })
    }



    handleChangeInput = ($e, input) => {
        const newState = {};
        newState[input] = $e.target.value;
        this.setState(newState);
        valor= this.state.age;
        console.log(valor);
    };

    mascota = () => {
        var url = 'http://localhost:8000/api/pets';
        var data = {
            namePet: this.state.name,
            agePet: valor*1,
            descriptionPet: this.state.descripcion,
            imageName: this.state.image,
            imageSize:12288*1,
            updatedAt: "2020-02-11 09:53:15"
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

        const { tasksEvent, title, date, locate, descripcion, score, capacity} = this.state;


        return(
            <div className="App">

                <button onClick={() => this.handleClickPet(tasksEvent.id)}>Mostrar mascotas</button>


                <div>
                    <br/>
                    <label htmlFor="title">Nombre de la mascota </label>
                    <Input placeholder=" " onChange={this.handleChangeTitle} /> <br/>

                    <label htmlFor="age">edad de la mascota</label>
                    <Input placeholder=" " type="text" onChange={(e)=>this.handleChangeInput(e, 'age')} /><br/>

                    <label htmlFor="description">descripción de la mascota</label>
                    <Input placeholder=" "  type="text" onChange={this.handleChangeDescription} /><br/>

                    <label htmlFor="image">link de la imagen</label>
                    <Input placeholder="pegue el link de la imagen" type="text" onChange={this.handleChangeImage} /><br/>



                    <br/>
                    <button onClick={this.mascota}>Publicar mascota</button>
                </div>



                {
                    tasksEvent.map((mostrar) =>

                        <div style={{ background: '#ECECEC', padding: '30px' }}>

                            <Card   style={{ width: 300 }}>
                                <h4>Nombre de la mascota:</h4>{mostrar.namePet} <br/>
                                <h4>Edad:</h4>{mostrar.agePet}<br/>
                                <h4>Descripcion:</h4>{mostrar.descriptionPet}
                            </Card>


                        </div>

                    )


                }


            </div>
        );
    }
}

export default PetForm;