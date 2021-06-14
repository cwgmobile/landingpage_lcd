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
          <Grid item>
            <img className="avatarPerfil"src="../img/dani.jpg" alt="Daniel Andrade"></img>
          </Grid>
          <Grid item xs>
          <h2 className="nomeDesenvolvedor">Daniel Andrade</h2>
            <p className="textoSobreDani">
            Técnico em refrigeração 15 anos. Trabalhando com manuteçaõ em maquinas 
            de lavar roupas e geladeiras. Devido a pandemia, sai da zona de conforto e voltei  
            a estudar. Estou cursando segundo sementres de Análise e Desenvovimento de Sistemas  Instituição ELFUTEC. 
            </p>
          </Grid>
        </Grid>
      </Paper>
     
    </div>
  );
}
