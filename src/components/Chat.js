import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import message from '../assets/images/Group 180.svg';
import theme from '../theme';

const classes = someTheme => ({
  chatContainer: {
    position: 'fixed',
    top: '200px',
    right: '20px',
    display: 'flex',
    flexDirection: 'row',
  },
  message: {
    background: 'transparent',
  },
  circle: {
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    backgroundColor: someTheme.palette.primary.main,
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: '150px',
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
    paddingTop: '50px',
    borderTop: `1px solid #E5E5E5`,
    color: '#777777',
  },
  orange: {
    color: someTheme.palette.primary.main,
  },
});

const useStyles = makeStyles(classes(theme));

function Chat() {
  const [isShown, setIsShown] = React.useState(false);
  const style = useStyles();

  return (
    <div className={style.chatContainer}>
      {isShown && (
        <div className={style.message}>
          {' '}
          <img src={message} alt="message" width="100%" />
        </div>
      )}{' '}
      <div className={style.circle} onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)} />
    </div>
  );
}

export default Chat;
