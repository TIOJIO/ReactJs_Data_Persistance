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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: '#003366',
    color: 'white',
    padding: theme.spacing(3),
  },
  logo: {
    maxWidth: 200,
    maxHeight: 200,
  },
  socialIcons: {
    marginTop: theme.spacing(2),
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root} square>
      <Grid container spacing={3}>
        {/* Premier bloc avec le logo et du texte */}
        <Grid item xs={12} sm={6} md={3}>
        <h4 style={{color:'white'}}>CRUD Data Persistence with React Js</h4>
        </Grid>

        {/* Deuxième bloc avec titre, texte et lien */}
        <Grid item xs={12} sm={6} md={3}>
          <h5>Our developpemnt Technology & Library</h5>
 
            <br />
            <p> React Js</p>
            <p> @material-ui/icons</p>
            <p> @material-ui/core</p>

        </Grid>

        {/* Troisième bloc avec titre, texte et lien */}
        <Grid item xs={12} sm={6} md={3}>
            <br />
            <br />
            <p> UseState</p>
            <p> UseEffet</p>
            <p> localStorage</p>
            <p> Fragment</p>
        </Grid>

        {/* Quatrième bloc avec formulaire et icônes sociales */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6">Join Me </Typography>
          <div className={classes.socialIcons}>
             <a href='https://github.com/TIOJIO'><GitHubIcon style={{color:'white',fontSize:'40px' }} /></a>
              <a href='https://www.linkedin.com/in/TIOJIO/'><LinkedInIcon style={{color:'white',fontSize:'40px' }} /></a>
             <FacebookInIcon style={{color:'white',fontSize:'40px' }} />
             
          </div>
        </Grid>
      </Grid>
      
           <Divider style={{backgroundColor:"white",height:'2px',borderRadius:'5px',marginTop:'30px'}}/>
           <br/>
           <p>©DevTe 2023</p>
    </Paper>
  );
};

export default Footer;
