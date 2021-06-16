import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Botao from './Botao';
import { withStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';


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
            <div className="formContato" style={{marginBottom:100,marginTop:60,}}>
                <Input placeholder="Nome" inputProps={{ 'aria-label': 'description' }} style={{margin:15,color:"white"}} /><br></br>
                <Input placeholder="E-Mail" inputProps={{ 'aria-label': 'description' }}style={{margin:15,color:"white"}} /><br></br>
                <Input placeholder="WhatsApp" inputProps={{ 'aria-label': 'description' }} style={{margin:15,color:"white"}}/>
            </div>

            <Botao style={{withStyles}}/>
            <div className="btnRedesocial" style={{marginBottom:50,marginTop:25,cursor:"pointer"}}>
            <FacebookIcon style={{color:'rgb(95, 5, 5)',}}/>
            <InstagramIcon style={{color:'rgb(95, 5, 5)'}}/>
            <GitHubIcon style={{color:'rgb(95, 5, 5)'}}/>
            </div>
        </form>
  );
}
