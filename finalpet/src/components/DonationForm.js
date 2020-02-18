import React from "react";
import Pets from "../services/pet";
import Donations from "../services/donations";

import { Card, Input} from 'antd';
import 'antd/dist/antd.css';
let valor;

class DonationForm extends React.Component{


    state = {
        date: " ",
        descripcion: " ",
        tasksEvent: []


    }
    dateDonation;
    descriptionDonation;

    namePet;
    agePet;
    descriptionPet;




    async handleClickDonation(initialState) {
        const tasks = await Donations.getDonationApi();
        this.setState((initialState) => {
            return {
                tasksEvent: [
                    ...initialState.tasksEvent,
                    ...tasks
                ]
            }
        })
    }

    handleChangeDate = (e) => {
        this.setState({
            name: e.target.value
        })
    };



    handleChangeDescription = (e) => {
        this.setState({
            descripcion: e.target.value
        })
    }






    donacion = () => {
        var url = 'http://localhost:8000/api/donations';
        var data = {
            dateDonation: this.state.date,
            descriptionDonation: this.state.descripcion,
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

                <button onClick={() => this.handleClickDonation(tasksEvent.id)}>Mostrar Donaciones</button>


                <div>
                    <br/>
                    <label htmlFor="title">Fecha de donacion </label>
                    <Input placeholder=" " onChange={this.handleChangeDate} /> <br/>


                    <label htmlFor="description">descripción de la donación</label>
                    <Input placeholder=" "  type="text" onChange={this.handleChangeDescription} /><br/>



                    <br/>
                    <button onClick={this.donacion}>Donar</button>
                </div>



                {
                    tasksEvent.map((mostrar) =>

                        <div style={{ background: '#ECECEC', padding: '30px' }}>

                            <Card   style={{ width: 300 }}>
                                <h4>Fecha de la donación:</h4>{mostrar.dateDonation} <br/>
                                <h4>Descripcion:</h4>{mostrar.descriptionDonation}<br/>

                            </Card>


                        </div>

                    )


                }


            </div>
        );
    }
}

export default DonationForm;