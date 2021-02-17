import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
import screenshot from '../assets/images/Screenshot.png';
import customers from '../assets/icons/Customers.svg';
import customersMob from '../assets/images/Group 186.png';
import useWindowDimensions from '../helpers/useWindowDimensions';

import theme from '../theme';

const classes = someTheme => ({
  headerContainer: {
    width: '100%',
  },
  bigText: {
    width: '100%',
    height: '270px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '60px',
    lineHeight: '70px',
    color: someTheme.palette.font.main,
    textAlign: 'center',
  },
  image: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    color: '#777777',
  },
  imageText: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '19px',
    marginBottom: '10px',
  },
  input: {
    width: '489px',
    height: '58px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexGrow: 1,
    borderRadius: '5px',
    padding: 0,
    marginBottom: '-5%',
  },
  inputField: {
    width: '310px',
  },

  inputButton: {
    width: '182px',
    height: '56px',
    marginLeft: '-2px',
    borderTopRightRadius: '3px',
    borderBottomRightRadius: '3px',
    borderRadius: 0,
    backgroundColor: someTheme.palette.primary.main,
    color: 'white',
    textTransform: 'none',
  },

  inputMob: {
    width: '310px',
    height: '125px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexGrow: 1,
    borderRadius: '5px',
    padding: 0,
    marginBottom: '-5%',
  },

  inputButtonMob: {
    width: '310px',
    minHeight: '56px',
    marginTop: '-2px',
    borderRadius: '3px',
    backgroundColor: someTheme.palette.primary.main,
    color: 'white',
    textTransform: 'none',
  },
});

const useStyles = makeStyles(classes(theme));

function Header() {
  const style = useStyles();
  const dim = useWindowDimensions();

  return (
    <div className={style.headerContainer}>
      <div className={style.bigText}>Lorem ipsum dolor sit amet, </div>
      <div className={style.image}>
        <div className={style.imageText}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</div>
        <div className={dim.width > 900 ? style.input : style.inputMob}>
          <TextField className={style.inputField} label="Email address" variant="outlined" />
          <Button className={dim.width > 900 ? style.inputButton : style.inputButtonMob}> Start My Free Trial </Button>
        </div>
        <img src={screenshot} width="100%" alt="" />
        <img src={dim.width > 900 ? customers : customersMob} width="60%" alt="" />
      </div>
    </div>
  );
}

export default Header;
