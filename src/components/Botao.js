import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const StyledButton = withStyles({
  root: {
    background: 'linear-gradient(45deg, #5f0505 30%, #d11010 90%)',
    borderRadius: 10,
    marginBottom:90,
    marginTop:10,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

export default function ClassesShorthand() {
  return <StyledButton>ENVIAR CONTATO</StyledButton>;
}