import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Botao from './Botao';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function Form() {
  const classes = useStyles();

  return (
   
        <form className={classes.root} noValidate autoComplete="off">
            <div>
              <h1 className="tituloForm">Fale Conosco</h1>
            </div>
              <div className="formContato" style={{marginBottom:30,marginTop:30,}}>
                  <Input placeholder="Nome" inputProps={{ 'aria-label': 'description' }} style={{margin:15,color:"rgb(95, 5, 5)"}} /><br></br>
                  <Input placeholder="E-Mail" inputProps={{ 'aria-label': 'description' }} style={{margin:15,color:"rgb(95, 5, 5)"}} /><br></br>
                  <Input placeholder="WhatsApp" inputProps={{ 'aria-label': 'description' }} style={{margin:15,color:"rgb(95, 5, 5)"}}/>
              </div>

            <Botao/>
             
        </form>
  );
}
