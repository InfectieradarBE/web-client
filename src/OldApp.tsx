import React, { useEffect } from 'react';
import './App.scss';
/*
import { Helmet, HelmetProvider } from 'react-helmet-async';

import {
  BrowserRouter as Router,
} from 'react-router-dom';

import {
  StylesProvider,
  MuiThemeProvider,
  responsiveFontSizes, CssBaseline,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import NlThemeData from './themes/nl-theme';
import createTheme from './themes/createTheme';

import { RootState } from './store';
import { useSelector } from 'react-redux';
import i18n from './i18n';

import Layout from './components/ui/layouts/Layout';
import Ribbon from './components/ui/Ribbon';
import RootSwitch from './routes/RootSwitch';
import DialogContainer from './components/ui/dialogs/DialogContainer';
import ScrollToTop from './routes/ScrollToTop';


const App: React.FC = () => {
  const { t } = useTranslation(['app']);

  const language = useSelector((state: RootState) => state.general.selectedLanguage);

  useEffect(() => {
    i18n.changeLanguage(language);
    const originalDescriptionElements = document.querySelectorAll('meta[name=description]');
    originalDescriptionElements.forEach(item => {
      item.setAttribute('content', t('header.metaDescription'));
    });
  }, [language]);

  const themeData = NlThemeData;
  const theme = responsiveFontSizes(createTheme(themeData));

  theme.overrides = {
    MuiSlider: {
      root: {
        height: 6,
        display: "flex",
        justifyContent: "space-between",
      },
      thumb: {
        height: 16,
        width: 16,
        marginTop: -5,
        marginLeft: -8,
      },
      rail: {
        height: 6,
        borderRadius: 1000,
        color: "#9e9e9e",
      },
      track: {
        height: 6,
        borderRadius: 1000,
      },
      mark: {
        height: 6,
        width: 6,
        marginLeft: -3,
        borderRadius: 1000,
        backgroundColor: "grey",
      },
      markActive: {
        opacity: 1,
        backgroundColor: theme.palette.secondary.main,
        height: 10,
        width: 10,
        marginLeft: -5,
        marginTop: -2,
      },
      markLabel: {
        '&&:nth-of-type(4)': {
          textAlign: "left",
          flexGrow: 1,
          marginLeft: -4,
          marginRight: 4,
        },
        '&&:nth-last-of-type(2)': {
          textAlign: "right",
          flexGrow: 1,
          marginLeft: 4,
          marginRight: -4,
        },
        '&&:nth-last-of-type(3)': {
          textAlign: "right",
          flexGrow: 1,
          marginLeft: 4,
          marginRight: -4,
        },
        marginTop: 12,
        height: 20,
        position: "static",
        textAlign: "center",
        transform: "",
        flexGrow: 2,
        flexShrink: 1,
        flexBasis: 0,
        // textOverflow: "ellipsis",
        // overflow: "hidden",
      },
    },
  };

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <StylesProvider injectFirst>
        <HelmetProvider>
          <Helmet>
            <title>{t('header.title')}</title>
            <html lang={i18n.language} translate="no" />
          </Helmet>
          <Router basename={process.env.NODE_ENV === 'production' ? process.env.PUBLIC_URL : undefined}>
            <ScrollToTop />
            <Layout>
              <RootSwitch />
            </Layout>
            <DialogContainer />
          </Router>
        </HelmetProvider>
      </StylesProvider>
    </MuiThemeProvider>
  );
}

export default App;
*/
