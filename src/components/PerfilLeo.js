import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: '90%',
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
}));



export default function AutoGridNoWrap() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
     
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          
          <Grid item>
              <div>
                  <h2 className="nomeDesenvolvedor">Leonardo Andrade</h2>
              </div>
            <p className="textoDev">
            Apaixonado por Tecnologia futuro Desenvolvedor FullStack ,Linguagens Usadas em nossa Agencia :HTML,CSS,JAVASCRIPT, Com uso de Bibliotecas e Frameworks como Bootstrap e React.js. Atualmente Estudando Desenvolvimento Web Na Instituição ELFUTEC.
            </p>
          </Grid>
          <Grid item>
          <img className="avatarPerfil"src="../img/perfil_leonardo.jpg" alt="Leonardo Andrade"></img>
            <div className="btnRedesocial" style={{marginBottom:50,marginTop:25,cursor:"pointer",color:'rgb(95, 5, 5)'}}>
                <FacebookIcon/>
                <InstagramIcon/>
                <GitHubIcon/>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
