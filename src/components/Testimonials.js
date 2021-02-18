import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import profile from '../assets/images/profile.png';
import quotes from '../assets/icons/quotation-marks.svg';

import useWindowDimensions from '../helpers/useWindowDimensions';

import theme from '../theme';

const classes = someTheme => ({
  headerContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
    fontSize: '36px',
    lineHeight: '70px',
    color: someTheme.palette.font.main,
    textAlign: 'center',
  },
  quote: {
    display: 'flex',
    flexDirection: 'row',
    fontSize: '22px',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  quoteText: {
    maxWidth: '70%',
    minWidth: '500px',
    textAlign: 'center',
  },

  quoteTextMob: {
    fontSize: '10px',
    maxWidth: '80%',
    textAlign: 'left',
    margin: '5px',
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
  authorMob: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '210px',
    height: '85px',
    margin: '50px',
    fontSize: '14px',
    lineHeight: '16px',
    textAlign: 'center',
  },
  profile: {
    backgroundColor: someTheme.palette.secondary.main,
    borderRadius: '50%',
    padding: 0,
    width: '85px',
    height: '85px',
  },
  profileMob: {
    backgroundColor: 'white',
    borderRadius: '50%',
    padding: 0,
    width: '56px',
    height: '56px',
  },
});

const useStyles = makeStyles(classes(theme));

function Testimonials() {
  const style = useStyles();

  const dim = useWindowDimensions();
  return (
    <div className={style.headerContainer}>
      <div className={style.bigText}>Lorem ipsum dolor sit amet, consetetur</div>
      <div className={style.quote}>
        <img src={quotes} alt="quote" width="5%" />
        <div className={dim.width > 900 ? style.quoteText : style.quoteTextMob}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt utLorem ipsum
          dolor sit amet, consetetur sadipscing elitr, sed diam{' '}
        </div>
      </div>
      <div className={dim.width > 900 ? style.author : style.authorMob}>
        <div className={dim.width > 900 ? style.profile : style.profileMob}>
          <img src={profile} alt="profile" width="100%" />
        </div>
        <div className={style.credentials}>
          <p>Lorem ipsum</p>
          <p style={{ color: '#777777' }}>Lorem</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
