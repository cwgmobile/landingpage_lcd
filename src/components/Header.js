/* eslint-disable jsx-a11y/alt-text */

import React from 'react';


function Hearder() {
    return (
        <div className="container">       
              <div className="Logo">
                  <img src="../img/logo.png" style={{width:200}}/>
                </div> 
                <div><h1 className="subTitulo" style={{color:'white'}}>Desenvolvimento WEB </h1>
                </div>
                <div id="imgHeader">
                    <img className="avatarHeader" src="../img/perfil_charles.jpg" alt="Charles Godoy" style={{marginRight:10}}></img>
                    <img className="avatarHeader"src="../img/perfil_leonardo.jpg" alt="Leonardo Andrade"></img>
                    <img className="avatarHeader"src="../img/dani.jpg" alt="Daniel Andrade" style={{marginLeft:10}}></img>
              </div>
        </div>
    );
  }
  
  export default Hearder;
