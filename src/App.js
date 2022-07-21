import React from 'react';
import GlobalErrorHandling from './utils/GlobalErrorHandling';
import PageRoutes from './routes/Routes';

import './assets/css/bootstrap.min.css';
import './assets/font/font.css';
import './assets/css/main.css';
import './assets/css/campaign.css';
import './assets/css/add-campaign.css';

const App = () => {
  return (
    <>
      <GlobalErrorHandling />
      <PageRoutes />
    </>
  );
};

export default App;
