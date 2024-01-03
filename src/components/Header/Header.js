import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookInIcon from '@material-ui/icons/Facebook';
import MenuIcon from '@material-ui/icons/Menu';
import { Divider } from '@material-ui/core';
import profil from '../../assets/img/profil.png'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: 'white',
    color: 'white',
    padding: theme.spacing(3),
    height:'auto'

  },
  logo: {
    maxWidth: 300,
    maxHeight: 300,
  },
  socialIcons: {
    marginTop: theme.spacing(2),
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root} id='head' square>
      <Grid  style={{display:'flex',flexWrap:'wrap',justifyContent:'space-around',height:'100%'}}>

        <Grid item xs={12} sm={6} md={3}>
          <img  src={profil} alt="Logo" className={classes.logo} />
         
        </Grid>

        


        <Grid item xs={12} sm={6} md={3}>
        <div className={classes.socialIcons}>
              <h4 style={{color:'#003366'}}>CRUD Data Persistence with React Js</h4>
          </div>
          
        </Grid>

      </Grid>
    </Paper>
  );
};

export default Footer;
