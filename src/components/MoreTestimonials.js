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
  bigText: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '40px',
    lineHeight: '70px',
    color: someTheme.palette.font.main,
    textAlign: 'center',
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
  logosMob: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '50%',
    justifyContent: 'space-around',
  },
  quoteText: {
    fontSize: '18px',
    maxWidth: '100%',
    textAlign: 'center',
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
    <div className={style.headerContainer}>
      <img src={quotes} alt="quote" />
      <div className={style.bigText}>Lorem ipsum dolor sit</div>
      <div className={style.quoteText}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
      </div>
      <div className={style.bottomContainer}>
        <div className={dim.width > 900 ? style.logos : style.logosMob}>
          <img src={cdnet} alt="cdnet" width="60%" />
          <img src={lifehacker} alt="lifehacker" width="60%" />
          <img src={techrepublic} alt="techrepublic" width="60%" />
        </div>
      </div>
    </div>
  );
}

export default MoreTestimonials;
