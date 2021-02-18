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
  headerContainerMob: {
    width: '100%',
    padding: '40px',
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
    marginLeft: '-5px',
    fontSize: '60px',
    lineHeight: '70px',
    color: someTheme.palette.font.main,
    textAlign: 'center',
  },
  bigTextMob: {
    width: '100%',
    height: '116px',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '32px',
    lineHeight: '38px',
    color: someTheme.palette.font.main,
    textAlign: 'left',
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

  imageTextMob: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '16px',
    marginBottom: '20px',
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
  screenshot: {
    minWidth: "450px"
  }
});

const useStyles = makeStyles(classes(theme));

function Header() {
  const style = useStyles();
  const dim = useWindowDimensions();

  return (
    <div className={dim.width > 900 ? style.headerContainer : style.headerContainerMob}>
      <div className={dim.width > 900 ? style.bigText : style.bigTextMob}>Lorem ipsum dolor sit amet, </div>
      <div className={style.image}>
        <div className={dim.width > 900 ? style.imageText : style.imageTextMob}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        </div>
        <div className={dim.width > 900 ? style.input : style.inputMob}>
          <TextField className={style.inputField} label="Email address" variant="outlined" />
          <Button className={dim.width > 900 ? style.inputButton : style.inputButtonMob}> Start My Free Trial </Button>
        </div>
        <div className={style.screenshot}>
          <img src={screenshot} width="100%" alt="" />
        </div>
        <div className={style.customers}>
          <img src={dim.width > 900 ? customers : customersMob} width="100%" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Header;
