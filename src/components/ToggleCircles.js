import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab';
import PropTypes from 'proptypes';

import theme from '../theme';

const classes = someTheme => ({
  dotsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '74px',
  },
  selected: {
    width: '22px !important',
    height: '22px !important',
    borderRadius: '100% !important',
    backgroundColor: `${someTheme.palette.primary.main} !important`,
    padding: 0,
  },

  notselected: {
    width: '16px !important',
    height: '16px !important',
    borderRadius: '100% !important',
    backgroundColor: `${someTheme.palette.secondary.main} !important`,
    padding: 0,
  },
});

const useStyles = makeStyles(classes(theme));

function ToggleCircles({ value, num }) {
  const toggles = [...Array(value).keys()];
  //  const [cur, setCur] = React.useState(1);
  const style = useStyles();

  return (
    <ToggleButtonGroup value={num} className={style.dotsContainer} aria-label="text formatting">
      {toggles.map(toggle => (
        <ToggleButton
          value={toggle}
          className={toggle === num ? style.selected : style.notselected}
          onClick={() => {}}
          aria-label=""
        />
      ))}


    </ToggleButtonGroup>
  );
}

ToggleCircles.propTypes = {
  value: PropTypes.number,
  num: PropTypes.number,
};

ToggleCircles.defaultProps = {
  value: 3,
  num: 1,
};

export default ToggleCircles;
