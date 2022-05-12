import React, { Component } from 'react';
import '../../assets/Fonts.css';
import '../../assets/Colors.css';
import './WelcomePage.css';
import 'tachyons';

class WelcomePage extends Component{
    render(){
        return(
            <div className=" flex flex-column justify-around items-center  ">
                <h2 className="cinzel black-text mt4 ">Bine ati venit </h2>
                <p className="orbitron black-text mt6 f4 shadow-5 pa2"> Aceasta este pagina lui</p>
                <h1 className="Cinzel black-text mt2 f1 grow bb"> Matei Vlad </h1>
            </div>
            
           
        );
    }
}

export default WelcomePage;