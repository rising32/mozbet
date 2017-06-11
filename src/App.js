import React from 'react';

import App from 'grommet/components/App';
import Main from './components/Main';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default () => (
  <App>
  	<MuiThemeProvider>
	   <Main />
	 </MuiThemeProvider>
  </App>
);
