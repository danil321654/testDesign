import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';

import useWindowDimensions from '../helpers/useWindowDimensions';

import theme from '../theme';

const classes = someTheme => ({
  headerContainer: {
    marginTop: '50px',
    width: '71%',
    backgroundColor: someTheme.palette.primary.main,
    minHeight: '408px',
    borderRadius: '5px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bigText: {
    width: '100%',
    display: 'flex',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '36px',
    lineHeight: '42px',
    textAlign: 'center',
  },
  bigTextMob: {
    width: '100%',
    display: 'flex',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '22px',
    lineHeight: '26px',
    textAlign: 'center',
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
    height: '56px !important',
    overflowY: 'hidden',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexGrow: 0,
    borderRadius: '5px',
    padding: 0,
    margin: '45px',
  },
  inputField: {
    width: '310px',
    height: '56px',
    backgroundColor: 'white',
    borderTopLeftRadius: '4px',
    borderBottomLeftRadius: '4px',
  },

  inputButton: {
    width: '182px',
    height: '56px',
    marginLeft: '-2px',
    borderTopRightRadius: '3px',
    borderBottomRightRadius: '3px',
    borderRadius: 0,
    backgroundColor: someTheme.palette.secondary.main,
    color: 'white',
    textTransform: 'none',
  },
  white: {
    color: 'white',
    textTransform: 'none',
  },

  inputMob: {
    width: '80vw',
    height: '125px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: '5px',
    padding: 0,
    marginBottom: '-5%',
  },
  inputFieldMob: {
    width: '70vw',
    height: '56px',
    backgroundColor: 'white',
    borderTopLeftRadius: '4px',
    borderBottomLeftRadius: '4px',
    marginBottom: '2px',
  },

  inputButtonMob: {
    width: '70vw',
    minHeight: '56px',
    marginTop: '-2px',
    borderRadius: '3px',
    backgroundColor: someTheme.palette.secondary.main,
    color: 'white',
    textTransform: 'none',
  },
  headerContainerMob: {
    marginTop: '50px',
    width: '80%',
    backgroundColor: someTheme.palette.primary.main,
    minHeight: '325px',
    borderRadius: '5px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

const useStyles = makeStyles(classes(theme));

function BottomSquare() {
  const style = useStyles();
  const dim = useWindowDimensions();

  return (
    <div className={dim.width > 900 ? style.headerContainer : style.headerContainerMob}>
      <div className={dim.width > 900 ? style.bigText : style.bigTextMob}>
        Lorem ipsum dolor sit amet, consetetur sadipscing{' '}
      </div>
      <div className={dim.width > 900 ? style.input : style.inputMob}>
        <TextField
          className={dim.width > 900 ? style.inputField : style.inputFieldMob}
          label="Email address"
          variant="outlined"
        />
        <Button className={dim.width > 900 ? style.inputButton : style.inputButtonMob}> Start My Free Trial </Button>
      </div>

      <div
        style={{
          width: dim.width > 900 ? 'auto' : '70vw',
          color: theme.palette.font.main,
          fontSize: dim.width > 500 ? '16px' : '12px',
        }}
      >
        Are you a Freelancer?{' '}
        <a href="/" className={style.white}>
          Get a Free Account Here
        </a>
      </div>
    </div>
  );
}

export default BottomSquare;
