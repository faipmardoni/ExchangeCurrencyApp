import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import Delete from '@material-ui/icons/Delete';

const styles = theme => ({
  card: {
    display: 'flex',
    marginTop: '1rem',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  deleteBox: {
    borderLeft: '1px solid rgba(0, 0, 0, 0.12)',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  fab: {
    margin: theme.spacing.unit,
  },
});

function Currency({
  classes, currency, standsForCurrency, base,
  rate, value, handleRemoveCurrency,
}) {
  return (
    <Card className={classes.card} key={currency}>
      <Grid container justify="space-between" spacing={0}>
        <Grid item xs={10}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Grid container justify="space-between" spacing={16}>
                <Grid item>
                  <Typography component="h5" variant="h5">
                    {currency}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography component="h5" variant="h5">
                    {(rate * value).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
                  </Typography>
                </Grid>
              </Grid>
              <Typography variant="subtitle1">
                {standsForCurrency}
              </Typography>
              <Typography variant="subtitle2" color="textSecondary">
                {`${1} ${base} = ${currency} ${rate.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`}
              </Typography>
            </CardContent>
          </div>
        </Grid>
        <Grid item className={classes.deleteBox} xs={2}>
          <Fab
            aria-label="Delete"
            className={classes.fab}
            color="secondary"
            size="small"
            onClick={handleRemoveCurrency}
          >
            <Delete />
          </Fab>
        </Grid>
      </Grid>
    </Card>
  );
}

// Currency.getInitialProps = ({ store, isServer }) => {
//   store.dispatch(increment(isServer));

//   return { isServer };
// };

Currency.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  currency: PropTypes.string.isRequired,
  standsForCurrency: PropTypes.string.isRequired,
  base: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  handleRemoveCurrency: PropTypes.func.isRequired,
};

export default withStyles(styles)(Currency);
