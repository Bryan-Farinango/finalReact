import React from "react";
import Events from "../services/events";

import { Card, Input} from 'antd';
import 'antd/dist/antd.css';
import { DatePicker } from 'antd';
import {Button, Jumbotron, Alert} from 'reactstrap';

let valor;

const { RangePicker } = DatePicker;
const e1 = require('../images/evento.jpg');

class EventsForm extends React.Component{


    state = {
        userid: 1,
        title: " ",
        date: " ",
        locate: " ",
        descripcion: " ",
        score: " ",
        capacity: " ",
        tasksEvent: []


    }
    nameEvent;




    async handleClickEvent(initialState) {
        const tasks = await Events.getEventsApi();
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
            title: e.target.value
        })
    };

    handleChangeDate = (dateString) => {

        console.log('Formatted Selected Time: ', dateString)
        this.setState({

            date: dateString
        })
    }

    handleChangeLocate = (e) => {
        this.setState({
            locate: e.target.value
        })
    }

    handleChangeDescription = (e) => {
        this.setState({
            descripcion: e.target.value
        })
    }



    handleChangeInput = ($e, input) => {
        const newState = {};
        newState[input] = $e.target.value;
        this.setState(newState);
        valor= this.state.score;
        console.log(valor);
    };

    evento = () => {
        const token =  localStorage.getItem('token');
        var url = 'http://localhost:8000/api/events';
        var data = {
                     nameEvent: this.state.title,
                     dateEvent: this.state.date,
                     locateEvent: this.state.locate,
                     descriptionEvent: this.state.descripcion,
                     scoreEvent:valor*1,
                     quotaEvent: valor*1
                     };
        fetch(url, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: "Bearer " + token,
            }
            }).then(res=> res.json())
            .catch(error =>
            console.error('Error:', error))


    }



    render() {

        const { tasksEvent, title, date, locate, descripcion, score, capacity} = this.state;


        return(
            <div className="">
                <div className="Lineas">
                <Alert className="Alertas" color="info">
                    Crea eventos con puntajes únicos para los voluntarios que asistan!
                </Alert>
                </div>




                <div className="App">

                    <img className="Evento" src={e1} alt=""/>
                    <Jumbotron>
                    <br/>
                    <label htmlFor="title">Nombre </label>
                    <Input placeholder="nombre del evento" onChange={this.handleChangeTitle} /> <br/>

                    <label htmlFor="date">fecha</label><br/>
                    <DatePicker showTime placeholder="Select Time" onChange={this.handleChangeDate}  /> <br/>


                    <label htmlFor="locate">lugar</label>
                    <Input placeholder="ubicacion del evento"  type="text" onChange={this.handleChangeLocate} /><br/>

                    <label htmlFor="description">Descripción</label>
                    <Input placeholder="descripcion del evento" type="text" onChange={this.handleChangeDescription} /><br/>

                    <label htmlFor="score">puntuación</label>
                    <Input placeholder="puntuacion por evento" onChange={(e)=>this.handleChangeInput(e, 'score')} /> <br/>

                    <label htmlFor="capacity">Capacidad</label>
                    <Input placeholder="capacidad del evento" onChange={(e)=>this.handleChangeInput(e, 'capacity')}/><br/>

                    <br/>
                    <Button color="success" onClick={this.evento}>Crear evento</Button>

                    </Jumbotron>
                </div>




                {
                    tasksEvent.map((mostrar) =>

                        <div style={{ background: '#ECECEC', padding: '30px' }}>

                            <Card   style={{ width: 300 }}>
                                {mostrar.id} <br/>{mostrar.nameEvent}
                                <br/>
                            </Card>


                        </div>

                    )


                }


            </div>
        );
    }
}

export default EventsForm;