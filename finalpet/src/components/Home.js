import React from "react";
import '../styles/App.css';
import { Carousel } from 'antd';
import ReactDOM from 'react-dom';


const c1 = require('../images/c1.jpg');
const c2 = require('../images/c2.jpeg');
const c3 = require('../images/c3.jpg');
const c4 = require('../images/c4.jpg');

class Home extends React.Component {
    render() {
        return (

            <div>
                <h1>Pagina de mascotas</h1>
            <Carousel autoplay>
                <div>
                    <img className="img" src={c1}/>
                </div>

                <div>
                    <img className="img" src={c2}/>
                </div>

                <div>
                    <img className="img" src={c3}/>
                </div>

                <div>
                    <img className="img" src={c4}/>
                </div>

            </Carousel>
            </div>
        );
    }
}
ReactDOM.render(<Home />, document.getElementById('root'));

export default Home;