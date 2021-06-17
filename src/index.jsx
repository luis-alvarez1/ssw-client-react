import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ThemeProvider } from '@material-ui/styles';
import { ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';
import { client } from './core/config/apollo/apollo';
import App from './App';
import theme from './core/theme/theme';
import { store } from './core/redux/store/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </ApolloProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
