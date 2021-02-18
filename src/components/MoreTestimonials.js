import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import quotes from '../assets/images/More testimonials.png';
import cdnet from '../assets/icons/Group 22.svg';
import lifehacker from '../assets/icons/Group 23.svg';
import techrepublic from '../assets/icons/Group 24.svg';

import useWindowDimensions from '../helpers/useWindowDimensions';
import theme from '../theme';

const classes = someTheme => ({
  headerContainer: {
    maxWidth: '665px',
    minHeight: '386px',
    display: 'flex',
    marginTop: '20px',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerContainerMob: {
    maxWidth: '665px',
    minHeight: '386px',
    display: 'flex',
    marginTop: '20px',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: '10px',
  },
  bigText: {
    width: '100%',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',

    fontSize: '40px',
    lineHeight: '70px',
    color: someTheme.palette.font.main,
    textAlign: 'center',
  },
  bigTextMob: {
    marginTop: "10",
    width: '100%',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '26px',
    lineHeight: '32px',
    color: someTheme.palette.font.main,
    textAlign: 'left',
  },
  quote: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '22px',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  bottomContainer: {
    height: '150px',
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '50px',
    marginBottom: '30px',
  },
  logos: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%',
    justifyContent: 'space-around',
  },
  logo: {
    maxWidth: '240px',
    minHeight: '95px',
  },
  logosMob: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%',
    justifyContent: 'space-around',
  },

  logoMob: {
    maxWidth: '75px',
  },
  quoteText: {
    fontSize: '18px',
    maxWidth: '100%',
    textAlign: 'center',
  },
  quoteTextMob: {
    fontSize: '14px',
    maxWidth: '100%',
    textAlign: 'left',
  },
  author: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '210px',
    height: '85px',
    margin: '50px',
    fontSize: '16px',
    lineHeight: '19px',
  },
  profile: {
    backgroundColor: someTheme.palette.secondary.main,
    borderRadius: '50%',
    padding: 0,
    width: '85px',
    height: '85px',
  },
});

const useStyles = makeStyles(classes(theme));

function MoreTestimonials() {
  const style = useStyles();
  const dim = useWindowDimensions();

  return (
    <div className={dim.width > 900 ? style.headerContainer : style.headerContainerMob}>
      <img src={quotes} alt="quote" />
      <div className={dim.width > 900 ? style.bigText : style.bigTextMob}>Lorem ipsum dolor sit</div>
      <div className={dim.width > 900 ? style.quoteText : style.quoteTextMob}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
      </div>
      <div className={style.bottomContainer}>
        <div className={dim.width > 900 ? style.logos : style.logosMob}>
          <div className={dim.width > 900 ? style.logo : style.logoMob}>
            <img src={lifehacker} alt="lifehacker" width="100%" />
          </div>
          <div className={dim.width > 900 ? style.logo : style.logoMob}>
            <img src={cdnet} alt="cdnet" width="100%" />
          </div>
          <div className={dim.width > 900 ? style.logo : style.logoMob}>
            <img src={techrepublic} alt="techrepublic" width="100%" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoreTestimonials;
