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
    marginTop: '150px',
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
    fontSize: '46px',
    lineHeight: '54px',
    color: 'white',
    textAlign: 'right',
    wordWrap: 'normal',
    marginTop: '10vw',
    marginLeft: '7vw',
    marginRight: '6vw',
    flexShrink: 1,
  },
  image: {
    maxWidth: '1150px',
    minWidth: '1000px',
    padding: 0,
    maxHeight: '1010px',
    alignSelf: 'center',
    marginTop: '-7vh',
    marginLeft: '-38%',
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
    minHeight: '60px !important',
    marginTop: '10vw',
    marginBottom: '10vw',
    marginLeft: '-22%',
    backgroundColor: someTheme.palette.primary.main,
    color: 'white',
    fontSize: '18px',
    fontWeight: '400',
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
    height: '600px',
    minHeight: '400px',
    boxSizing: 'border-box',
    backgroundColor: someTheme.palette.secondary.main,
    minWidth: '375px',
    flexShrink: 1,

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
    width: '60%',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '32px',
    lineHeight: '36px',
    color: 'white',
    textAlign: 'left',
    wordWrap: 'normal',
    marginTop: '10vw',
    marginBottom: '-10vw',
  },
  imageMob: {
    marginTop: '-20vh',
    maxWidth: '700px',
    minWidth: '600px',
    padding: 0,
    height: '100% ',
    alignSelf: 'center',
    flexGrow: 1,
    flexShrink: 1,

    backgroundColor: 'rgba(255,255,255,0)',
  },

  downloadNowMob: {
    borderRadius: '30px',
    width: '243px !important',
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
  leftMob: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: '80px',
    flexGrow: 1,
    minHeight: '450px',
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
    <div className={dim.width > 1100 ? style.featuresContainer : style.featuresContainerMob}>
      <div className={dim.width > 1100 ? style.box : style.boxMob}>
        <div className={dim.width > 1100 ? style.left : style.leftMob}>
          <div className={dim.width > 1100 ? style.text : style.textMob}>
            Lorem ipsum <b>dolor sit amet,</b>{' '}
          </div>
          <Button className={dim.width > 1100 ? style.downloadNow : style.downloadNowMob}>Download Now</Button>
        </div>
        <div className={dim.width > 1100 ? style.image : style.imageMob}>
          <img src={dim.width > 1100 ? screenshot : screenshotMob} className={style.transparent} width="100%" alt="" />
        </div>
      </div>
    </div>
  );
}

export default FeaturesDownload;
