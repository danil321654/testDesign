import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ToggleCircles from './ToggleCircles';

import features from '../assets/icons/socialmedia_Illustration.svg';
import useWindowDimensions from '../helpers/useWindowDimensions';

import theme from '../theme';

const classes = someTheme => ({
  featuresContainer: {
    marginTop: '100px',
    minWidth: '50%',
    maxWidth: 'min-content',
    height: '1100px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    boxSizing: 'border-box',
  },
  featuresContainerMob: {
    marginTop: '100px',
    minWidth: '50%',
    maxWidth: 'min-content',
    height: '1300px',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    boxSizing: 'border-box',
    marginBottom: ' 00px',
  },
  featuresHeader: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: '150px',
    widt: '100%',
  },
  bigText: {
    paddingTop: '30px',
    width: '100%',
    minHeight: '70px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '60px',
    lineHeight: '70px',
    color: someTheme.palette.font.main,
    wordWrap: 'break-word',
    textAlign: 'center',
  },
  bigTextMob: {
    paddingTop: '30px',
    width: '100%',
    minHeight: '70px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '32px',
    lineHeight: '36px',
    color: someTheme.palette.font.main,
    wordWrap: 'break-word',
    textAlign: 'center',
  },
  image: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    color: '#777777',
  },

  centerText: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    textAlign: 'center',
  },
  biggerText: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '46px',
    lineHeight: '54px',
    marginBottom: '22px',
  },
  smallerText: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '18px',
    lineHeight: '21px',
  },
});

const useStyles = makeStyles(classes(theme));
function FeaturesSocial() {
  const style = useStyles();
  const dim = useWindowDimensions();

  return (
    <div className={dim.width > 900 ? style.featuresContainer : style.featuresContainerMob}>
      <div className={style.featuresHeader}>
        <ToggleCircles value={3} num={0} />
        <div className={dim.width > 900 ? style.bigText : style.bigTextMob}>Lorem ipsum dolor sit amet, </div>
      </div>
      <div className={style.centerText}>
        <div className={style.biggerText} style={{ fontSize: dim.width > 900 ? '46px' : '28px' }}>
          Lorem ipsum dolor sit{' '}
        </div>
        <div className={style.smallerText}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</div>
      </div>
      <div className={style.image}>
        <img src={features} width="100%" alt="" />
      </div>
    </div>
  );
}

export default FeaturesSocial;
