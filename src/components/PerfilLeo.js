import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

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
          
          <Grid item xs>
          <h2 className="nomeDesenvolvedor">Leonardo Andrade</h2>
            <p className="textoSobreleo">
                Desenvolvedor Web 5 Anos Trabalhando com Criação de Sites e Aplicativos em HTML
                Cordova, JavaScript, CSS. Experiência em WordPress, Blogs,Lojas Virtuais.
                Hoje Cursando Segundo Sementres de Análise e Desenvovimento de Sistemas e Programação 
                Web Mobile Front-End na Instituição ELFUTEC.
            </p>
          </Grid>
          <Grid item>
          <img className="avatarPerfil"src="../img/perfil_leonardo.jpg" alt="Leonardo Andrade"></img>
          </Grid>
        </Grid>
      </Paper>
     
    </div>
  );
}
