import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import screenshot from '../assets/images/Rotato Snapshot Sform 22.png';
import screenshotMob from '../assets/images/Screenshot.png';
import useWindowDimensions from '../helpers/useWindowDimensions';

import theme from '../theme';

const classes = someTheme => ({
  featuresContainer: {
    width: '100%',
    height: '50vw',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '10vh',
    minWidth: '375px',
  },
  featuresContainerMob: {
    width: '100%',
    height: 'min-content',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '10vh',
  },
  box: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    width: '100%',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '55px',
    lineHeight: '54px',
    color: 'white',
    textAlign: 'right',
    wordWrap: 'normal',
    marginTop: '10vw',
    marginRight: '0',
    flexShrink: 1,
  },
  image: {
    maxWidth: '1350px',
    minWidth: '12%',
    padding: 0,
    height: '100% ',
    alignSelf: 'center',
    marginLeft: '-41%',
    flexGrow: 1,
    flexShrink: 1,

    backgroundColor: 'rgba(255,255,255,0)',
  },
  transparent: {
    backgroundColor: 'rgba(255,255,255,0)',
  },

  downloadNow: {
    borderRadius: '30px',
    width: '243px',
    height: '60px',
    marginTop: '10vw',
    marginBottom: '10vw',
    backgroundColor: someTheme.palette.primary.main,
    color: 'white',
    fontSize: '18px',
    lineHeight: '21px',
    textTransform: 'none',
    filter: 'drop-shadow(0px 6px 10px rgba(0, 115, 255, 0.2))',
  },
  left: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
    height: '100%',
    boxSizing: 'border-box',
    backgroundColor: someTheme.palette.secondary.main,
    minWidth: '375px',
    flexShrink: 0,

    paddingRight: '12%',
  },
  boxMob: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textMob: {
    width: '100%',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '26px',
    lineHeight: '24px',
    color: 'white',
    textAlign: 'center',
    wordWrap: 'normal',
    marginTop: '10vw',
  },
  imageMob: {
    marginTop: '-12vw',
    maxWidth: '1350px',
    minWidth: '12%',
    padding: 0,
    height: '100% ',
    alignSelf: 'center',
    flexGrow: 1,
    flexShrink: 1,

    backgroundColor: 'rgba(255,255,255,0)',
  },

  downloadNowMob: {
    borderRadius: '30px',
    width: '243px',
    height: '60px',
    marginRight: '15%',
    marginTop: '10vw',
    marginBottom: '10vw',
    backgroundColor: someTheme.palette.primary.main,
    color: 'white',
    fontSize: '18px',
    lineHeight: '21px',
    textTransform: 'none',
    filter: 'drop-shadow(0px 6px 10px rgba(0, 115, 255, 0.2))',
    marginLeft: '15%',
  },
  leftMob: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
    height: '100%',
    boxSizing: 'border-box',
    backgroundColor: someTheme.palette.secondary.main,
    minWidth: '80vw',
  },
});

const useStyles = makeStyles(classes(theme));

function FeaturesDownload() {
  const style = useStyles();
  const dim = useWindowDimensions();

  return (
    <div className={style.featuresContainer}>
      <div className={dim.width > 900 ? style.box : style.boxMob}>
        <div className={dim.width > 900 ? style.left : style.leftMob}>
          <div className={dim.width > 900 ? style.text : style.textMob}>
            Lorem ipsum <b>dolor sit amet,</b>{' '}
          </div>
          <Button className={style.downloadNow}>Download Now</Button>
        </div>
        <div className={dim.width > 900 ? style.image : style.imageMob}>
          <img src={dim.width > 900 ? screenshot : screenshotMob} className={style.transparent} width="100%" alt="" />
        </div>
      </div>
    </div>
  );
}

export default FeaturesDownload;
