export const initialState = {
  base: 'USD',
  currencies: ['IDR', 'EUR', 'GBP', 'SGD'],
  rates: {
    BGN: 1.7523519398,
    NZD: 1.5358838814,
    ILS: 3.5992294597,
    RUB: 64.478630947,
    CAD: 1.3409192725,
    USD: 1,
    PHP: 52.5517426754,
    CHF: 1.0101245408,
    AUD: 1.4535435893,
    JPY: 110.4470925544,
    TRY: 6.0465012096,
    HKD: 7.8495654511,
    MYR: 4.1860048383,
    HRK: 6.6539736583,
    CZK: 23.0938087985,
    IDR: 14483.0033151151,
    DKK: 6.6916046949,
    NOK: 8.7727802168,
    HUF: 292.5544306066,
    GBP: 0.7849655049,
    MXN: 19.0700654063,
    THB: 31.9353104561,
    ISK: 123.4656392796,
    ZAR: 14.4170773228,
    BRL: 4.0935400054,
    SGD: 1.3781919183,
    PLN: 3.8580772332,
    INR: 69.6917838903,
    KRW: 1193.3339306514,
    RON: 4.2678075441,
    CNY: 6.9062807992,
    SEK: 9.6535256697,
    EUR: 0.895977063,
  },
  date: '2019-05-21',
  getLatestRatesLoading: false,
  getLatestRatesError: false,
  getLatestRatesErrorMessage: '',
  value: 10,
  showSelectAvailableCurrencies: false,
};

export const SET_LATEST_RATES = 'SET_LATEST_RATES';
export const GET_LATEST_RATES = 'GET_LATEST_RATES';
export const GET_LATEST_RATES_LOADING = 'GET_LATEST_RATES_LOADING';
export const GET_LATEST_RATES_ERROR = 'GET_LATEST_RATES_ERROR';
export const SET_SHOW_SELECT_AVAILABLE_CURRENCIES = 'SET_SHOW_SELECT_AVAILABLE_CURRENCIES';
export const SET_CURRENCIES_LIST = 'SET_CURRENCIES_LIST';

export const standsForCurrencies = {
  USD: 'United States Dollars',
  CAD: 'Canadian Dollar',
  IDR: 'Indonesian Rupiah',
  GBP: 'British Pound',
  CHF: 'Swiss Franc',
  SGD: 'Singapore Dollar',
  INR: 'Indian Rupee',
  MYR: 'Malaysian Ringgit',
  JPY: 'Japanese Yen',
  KRW: 'Korean Won',
  EUR: 'Euro',
};
