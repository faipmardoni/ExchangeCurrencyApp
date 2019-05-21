import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

function Header({
  detailBase, base, value,
}) {
  return (
    <>
      <Grid item xs={12} sm container>
        <Typography gutterBottom variant="h6">
          {detailBase}
        </Typography>
      </Grid>
      <Grid item xs={12} sm container justify="space-between">
        <Grid item xs={8}>
          <Typography gutterBottom variant="h3">{base}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h3">{value}</Typography>
        </Grid>
      </Grid>
    </>
  );
}

Header.propTypes = {
  detailBase: PropTypes.string.isRequired,
  base: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default Header;
