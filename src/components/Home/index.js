import React, { Component } from 'react';

import Inicio from '../Inicio/index'
import Sobre from '../Sobre/index'
import Contato from '../Contato/index'

import style from '../../style.css'


class Home extends Component {
    render() {
        return (
            <div className='page' id='home'>
                <div className='container'>
                    <Inicio />
                    <Sobre />
                </div>

                <Contato />
            </div>
        )
    }
}


export default Home