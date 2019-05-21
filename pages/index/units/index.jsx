import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Add from '@material-ui/icons/Add';

import Currency from './currency';
import Header from './header';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 4,
    paddingLeft: theme.spacing.unit * 4,
    margin: '2rem auto',
    maxWidth: 650,
  },
  button: {
    marginTop: theme.spacing.unit * 2,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  menu: {
    width: 200,
  },
});

function Home({
  classes, currencies, showSelectAvailableCurrencies, setShowSelectAvailableColumns,
  availableCurrencies, addCurrenciesList,
}) {
  const [selectedCurrency, setSelectedCurrency] = useState(undefined);
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={16} direction="column">
          <Header />
          <Divider />
          {currencies.map((currency, idx) => (
            <Currency key={currency} currency={currency} idx={idx} />
          ))}
          {showSelectAvailableCurrencies ? (
            <>
              <TextField
                id="outlined-select-currency-native"
                select
                label="Currency"
                className={classes.textField}
                value={selectedCurrency}
                onChange={e => setSelectedCurrency(e.target.value)}
                SelectProps={{
                  native: true,
                  MenuProps: {
                    className: classes.menu,
                  },
                }}
                helperText="Please select your currency"
                margin="normal"
                variant="outlined"
              >
                {availableCurrencies.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={() => addCurrenciesList(selectedCurrency)}
              >
                <Add className={classes.leftIcon} />
                Submit
              </Button>
            </>
          ) : (
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={setShowSelectAvailableColumns}
            >
              <Add className={classes.leftIcon} />
              Add More Currencies
            </Button>
          )}
        </Grid>
      </Paper>
    </div>
  );
}

// Home.getInitialProps = ({ store, isServer }) => {
//   store.dispatch(increment(isServer));

//   return { isServer };
// };

Home.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  rates: PropTypes.shape({}).isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  showSelectAvailableCurrencies: PropTypes.bool.isRequired,
  setShowSelectAvailableColumns: PropTypes.func.isRequired,
  availableCurrencies: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  addCurrenciesList: PropTypes.func.isRequired,
};

export default withStyles(styles)(Home);
