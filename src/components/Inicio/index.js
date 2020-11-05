import React, { Component } from 'react';

import logo from '../../img/amor.png'


class Inicio extends Component {
    render() {
        return (
            <div className='Home'>

                <img src={logo} className='img'></img>
                <h1>Bem-vindos ao Brechó Amor de Bicho!</h1>
            </div>
        )
    }
}


export default Inicio 