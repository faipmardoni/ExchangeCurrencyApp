import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import withRedux from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import JssProvider from 'react-jss/lib/JssProvider';
import store from '../redux/store';
import getPageContext from '../utils/getPageContext';

const Index = withRedux(store)(
  class Index extends App {
    pageContext = getPageContext()

    static async getInitialProps({ Component, ctx }) {
      return {
        pageProps: Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {},
      };
    }

    componentDidMount() {
      const jssStyles = document.querySelector('#jss-server-side');
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }

    render() {
      const {
        Component,
        pageProps,
        store: storeProps,
      } = this.props;

      return (
        <Container>
          <Head>
            <title>NextJS - With Redux and Material UI</title>
          </Head>
          <JssProvider
            registry={this.pageContext.sheetsRegistry}
            generateClassName={this.pageContext.generateClassName}
          >
            <MuiThemeProvider
              theme={this.pageContext.theme}
              sheetsManager={this.pageContext.sheetsManager}
            >
              <CssBaseline />
              <Provider store={storeProps}>
                <Component
                  pageContext={this.pageContext}
                  {...pageProps}
                />
              </Provider>
            </MuiThemeProvider>
          </JssProvider>
        </Container>
      );
    }
  },
);

export default Index;
