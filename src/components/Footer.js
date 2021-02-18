import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import theme from '../theme';

import useWindowDimensions from '../helpers/useWindowDimensions';

const classes = someTheme => ({
  footerContainer: {
    padding: '10px',
    width: '100%',
    display: 'flex',
    marginTop: '100px',
    paddingTop: '20px',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTop: `1px solid #E5E5E5`,
    flexWrap: 'wrap',
  },
  footerContainerMob: {
    padding: '10px',
    width: '100%',
    display: 'flex',
    marginTop: '100px',
    paddingTop: '20px',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderTop: `1px solid #E5E5E5`,
    flexWrap: 'wrap',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: '150px',
    marginTop: '40px',
    margin: 'auto',
  },
  name: {
    color: someTheme.palette.font.main,
    marginBottom: '20px',
  },
  row: {
    color: '#777777',
    marginBottom: '10px',
  },
  footest: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: '100px',
    marginBottom: '50px',
    padding: '50px 50px 0 50px',
    borderTop: `1px solid #E5E5E5`,
    color: '#777777',
  },
  orange: {
    color: someTheme.palette.primary.main,
  },
});

const useStyles = makeStyles(classes(theme));

function Footer() {
  const dim = useWindowDimensions();

  const style = useStyles();

  return (
    <div className={dim.width > 500 ? style.footerContainer : style.footerContainerMob}>
      <div className={style.column}>
        <div className={style.name}>Lorem</div>
        <div className={style.row}>Lorem </div>
        <div className={style.row}>Lorem ipsum dolor sit</div>
        <div className={style.row}>Lorem ipsum</div>
        <div className={style.row}>Lorem ipsum</div>
        <div className={style.row}>Lorem ipsum</div>
        <div className={style.row}>Lorem ipsum</div>
        <div className={style.row}>Lorem ipsum dolor</div>
        <div className={style.row}>Lorem ipsum dolor</div>
        <div className={style.row}>Lorem ipsum</div>
        <div className={style.row}>Lorem</div>
        <div className={style.row}>Lorem</div>
      </div>
      <div className={style.column}>
        <div className={style.name}>Lorem</div>
        <div className={style.row}>Lorem ipsum</div>
        <div className={style.row}>Lorem ipsum dolor sit </div>
        <div className={style.row}>Lorem ipsum dolor sit </div>
        <div className={style.row}>Lorem ipsum dolor</div>
        <div className={style.row}>Lorem</div>
        <div className={style.row}>Lorem</div>
      </div>
      <div className={style.column}>
        <div className={style.name}>Lorem</div>
        <div className={style.row}>Lorem ipsum</div>
        <div className={style.row}>Lorem ipsum</div>
        <div className={style.row}>Lorem</div>
        <div className={style.row}>Lorem</div>
        <div className={style.row}>Lorem</div>
        <div className={style.row}>Lorem ipsum</div>
        <div className={style.row}>Lorem ipsum dolor</div>
      </div>
      <div className={style.column}>
        <div className={style.name}>Lorem</div>
        <div className={style.row}>Lorem</div>
        <div className={style.row}>Lore</div>
        <div className={style.row}>Lorem ipsum</div>
        <div className={style.row}>Lorem</div>
      </div>
      <div className={style.column}>
        <div className={style.name}>Lorem</div>
        <div className={style.row}>Lorem ipsum dolor sit</div>
        <div className={style.row}>Lorem</div>
        <div className={style.row}>Lorem ipsum</div>
        <div className={style.row}>Lorem</div>
        <div className={style.row}>Lorem ipsum</div>
        <div className={style.row}>Lorem ipsum dolor</div>
        <div className={style.row}>Lorem ipsum dolor sit</div>
        <p>
          <div className={style.row}>Lorem ipsum dolor sit amet, </div>
        </p>
        <div className={style.row}>Lorem ipsum dolor sit amet, </div>
        <div className={style.row}>Lorem ipsum dolor sit amet, </div>
        <div className={style.row}>Lorem ipsum dolor sit amet, </div>
        <p>
          <div className={style.row}>Lorem ipsum</div>
        </p>
      </div>
      <div className={style.footest}>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr,{' '}
          <a href="/" className={style.orange}>
            sed diam
          </a>{' '}
          nonumy{' '}
          <a href="/" className={style.orange}>
            eirmod
          </a>{' '}
        </p>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut dolor sit
          amet,{' '}
          <a href="/" className={style.orange}>
            consetetur sadipscing
          </a>{' '}
          elitr{' '}
          <a href="/" className={style.orange}>
            sed diam
          </a>{' '}
        </p>
        <p>Copyright © 2020 Templateondemand.co</p>
      </div>
    </div>
  );
}

export default Footer;
