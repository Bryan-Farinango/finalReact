import React from "react";
import Users from "../services/users";

import { Card } from 'antd';
import 'antd/dist/antd.css';

class UserForm extends React.Component{


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




    render() {

        const { tasks, tasksList} = this.state;


        return(
            <div className="App">

                <button onClick={() => this.handleClickUser(tasks.id)}>Usuarios</button>

                {
                    tasks.map((task) =>

                        <div style={{ background: '#ECECEC', padding: '30px' }}>

                            <Card   style={{ width: 300 }}>
                                {task.id} <br/> {task.username }<br/> {task.phoneUser}
                                <br/>
                            </Card>
                        </div>
                    )
                }


            </div>
        );
    }
}

export default UserForm;