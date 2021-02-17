import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link, Button, Menu, MenuItem } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import useWindowDimensions from '../helpers/useWindowDimensions';

import theme from '../theme';

const classes = someTheme => ({
  headerContainer: {
    backgroundColor: 'white',
    width: '100%',
    height: '70px',
    borderBottom: `1px solid #DBDBDB`,
    position: 'fixed',
    top: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 37.69px 0 32px',
    zIndex: 10,
    paddingRight: '20px',
    minWidth: '370px',
  },
  headerLogo: {
    color: someTheme.palette.primary.main,
    fontfamily: '"Segoe UI",Roboto,Frutiger,"Frutiger Linotype","Dejavu Sans","Helvetica Neue",Arial,sans-serif',
    fontSize: '32px',
    fontStyle: 'normal',
    fontWeight: '350',
    lineHeight: '43px',
    letterSpacing: '0em',
    textAlign: 'left',
  },
  headerControllers: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '16px',
    width: '607px',
  },
  navContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexGrow: 1,
    alignItems: 'center',
    marginLeft: '-50px',
  },
  buttons: {
    flexGrow: 0,
    display: 'flex',
    flexDirection: 'row',
  },
  link: {
    color: someTheme.palette.font.main,
    display: 'flex',
    marginRight: '50px',
  },
  login: {
    borderRadius: '20px',
    width: '89px',
    height: '41px',
    border: `1px solid #DBDBDB`,
    marginRight: '20px',
    textTransform: 'none',
  },
  startFreeTrial: {
    borderRadius: '20px',
    width: '180px',
    height: '41px',
    border: `1px solid #DBDBDB`,
    backgroundColor: someTheme.palette.primary.main,
    color: 'white',
    textTransform: 'none',
  },
  linkButton: {
    color: someTheme.palette.font.main,
    display: 'flex',
    marginRight: '50px',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    margin: '0',
    padding: '0',
    textDecoration: 'none',
    textTransform: 'none',
    fontWeight: '400',
    fontSize: '16px',
    '&:hover': {
      textDecoration: 'underline',
      backgroundColor: 'transparent',
    },
    '&:focus': {
      textDecoration: 'underline',
      backgroundColor: 'transparent',
    },
  },
  headerContainerMob: {
    backgroundColor: 'white',
    width: '370px',
    height: '70px',
    borderBottom: `1px solid #DBDBDB`,
    position: 'fixed',
    top: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 37.69px 0 32px',
    zIndex: 10,
    paddingRight: '20px',
    minWidth: '370px',
  },
});

const useStyles = makeStyles(classes(theme));

function StaticHeader() {
  const dim = useWindowDimensions();
  const style = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={dim.width > 400 ? style.headerContainer : style.headerContainerMob}>
      <div className={style.headerLogo}>SFORM</div>
      {dim.width > 900 ? (
        <div className={style.headerControllers}>
          <div className={style.navContainer}>
            <Button className={style.linkButton} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
              <div>Features</div> <KeyboardArrowDownIcon size="small" />
            </Button>
            <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
              <MenuItem onClick={handleClose}>
                <Link href="#feature1">Lorem</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link href="#feature2">Lorem</Link>
              </MenuItem>
            </Menu>
            <Link className={style.link} color="inherit" href="/" onClick={() => {}}>
              Pricing
            </Link>
            <Link className={style.link} color="inherit" href="/" onClick={() => {}}>
              Customers
            </Link>
          </div>
          <div className={style.buttons}>
            <Button className={style.login}>Login</Button>
            <Button className={style.startFreeTrial}>Start My Free Trial</Button>
          </div>
        </div>
      ) : (
        <fragment>
          <Button onClick={handleClick} aria-controls="simple-menu" aria-haspopup="true">
            <div style={{ transform: 'rotate(90deg)', fontSize: '26px' }}>|||</div>
          </Button>
          <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
            <MenuItem onClick={handleClose}>
              <Link href="#features">Features</Link>
              <KeyboardArrowDownIcon size="small" />
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link className={style.link} color="inherit" href="/" onClick={() => {}}>
                Pricing
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link className={style.link} color="inherit" href="/" onClick={() => {}}>
                Customers
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose} className={style.menuRight}>
              <Button className={style.login}>Login</Button>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Button className={style.startFreeTrial}>Start My Free Trial</Button>
            </MenuItem>
          </Menu>
        </fragment>
      )}
    </div>
  );
}

export default StaticHeader;
