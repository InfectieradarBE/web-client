import React, { useEffect } from 'react';
import { AppCore } from 'case-web-app-core';
import { headerConfig } from './configs/header';
import { navbarConfig } from './configs/navbar';
import { footerConfig } from './configs/footer';
import { pagesConfig } from './configs/pages';
import { appConfig } from './configs/appConfig';
import { useTranslation } from 'react-i18next';

if (process.env.REACT_APP_DEFAULT_INSTANCE) {
  appConfig.instanceId = process.env.REACT_APP_DEFAULT_INSTANCE;
}

const App: React.FC = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    if (!i18n.language) {
      i18n.changeLanguage('nl-be');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.language])

  return (
    <React.Fragment>
      <AppCore
        appConfig={appConfig}
        headerConfig={headerConfig}
        navbarConfig={navbarConfig}
        pagesConfig={pagesConfig}
        footerConfig={footerConfig}
      />
    </React.Fragment>
  );
};

export default App;
