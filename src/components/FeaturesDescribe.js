import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ToggleCircles from './ToggleCircles';
import icon1 from '../assets/icons/index-feat-search.svg';
import icon2 from '../assets/icons/index-feat-apps.svg';
import icon3 from '../assets/icons/index-feat-platform.svg';
import icon4 from '../assets/icons/index-feat-teams.svg';

import theme from '../theme';

import useWindowDimensions from '../helpers/useWindowDimensions';

const classes = someTheme => ({
  featuresContainer: {
    marginTop: '50px',
    minWidth: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    boxSizing: 'border-box',
  },
  featuresContainerMob: {
    marginTop: '50px',
    width: '90vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    boxSizing: 'border-box',
  },
  featuresHeader: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: '150px',
    widt: '100%',
  },
  smallFeaturesContainer: {
    marginTop: '50px',
      marginBottom: '50px',
    width: '80%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    boxSizing: 'border-box',
    flexWrap: 'wrap',
  },
  feature: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    margin: '30px',
    minHeight: '206px',
    height: '206px',
    width: '446px',
    minWidth: '300px',
  },
  bigText: {
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
    width: '100%',
    minHeight: '32px',
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
  name: {
    marginTop: '15px',
    fontWeight: 400,
    fontSize: '32px',
  },

  description: {
    marginTop: '20px',
    fontWeight: 400,
    fontSize: '18px',
  },

  nameMob: {
    marginTop: '15px',
    fontWeight: 400,
    fontSize: '18px',
  },

  descriptionMob: {
    marginTop: '20px',
    fontWeight: 400,
    fontSize: '14px',
  },
});

const useStyles = makeStyles(classes(theme));

function FeaturesDescribe() {
  const style = useStyles();
  const dim = useWindowDimensions();

  return (
    <div className={dim.width > 900 ?style.featuresContainer:style.featuresContainerMob}>
      <div className={style.featuresHeader}>
        <ToggleCircles value={3} num={1} />
        <div className={dim.width > 900 ? style.bigText : style.bigTextMob}>Lorem ipsum dolor sit</div>
      </div>
      <div className={style.smallFeaturesContainer}>
        <div className={style.feature}>
          <div className={style.icon}>
            <img src={icon1} alt="icon1" />
          </div>
          <div className={dim.width > 900 ? style.name : style.nameMob}>Lorem ipsum</div>
          <div className={dim.width > 900 ? style.description : style.descriptionMob}>Lorem ipsum dolor sit amet, consetetur sadipscing </div>
        </div>

        <div className={style.feature}>
          <div className={style.icon}>
            <img src={icon2} alt="icon2" />
          </div>
          <div className={dim.width > 900 ? style.name : style.nameMob}>Lorem ipsum</div>
          <div className={dim.width > 900 ? style.description : style.descriptionMob}>
            Lorem ipsum dolor sit amet, consetetur sadipscing{' '}
            <b>elitr, sed diam nonumy eirmod tempor invidunt utLorem</b>{' '}
          </div>
        </div>

        <div className={style.feature}>
          <div className={style.icon}>
            <img src={icon3} alt="icon3" />
          </div>
          <div className={dim.width > 900 ? style.name : style.nameMob}>Lorem ipsum dolor</div>
          <div className={dim.width > 900 ? style.description : style.descriptionMob}>
            Lorem ipsum dolor sit amet, consetetur sadipscing <b>elitr, sed diam nonumy eirmod tempor invidunt</b>
          </div>
        </div>

        <div className={style.feature}>
          <div className={style.icon}>
            <img src={icon4} alt="icon4" />
          </div>
          <div className={dim.width > 900 ? style.name : style.nameMob}>Lorem ipsum dolor sit</div>
          <div className={dim.width > 900 ? style.description : style.descriptionMob}>
            Lorem ipsum dolor sit amet, consetetur sadipscing <b>elitr, sed diam nonumy eirmod tempor invidunt </b>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturesDescribe;
