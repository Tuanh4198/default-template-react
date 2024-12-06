import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { configureAppStore } from './store/configureStore';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { BrowserRouter as Router } from 'react-router-dom';
import { createTheme, MantineProvider } from '@mantine/core';
import { DatesProvider } from '@mantine/dates';
import setupAxiosInterceptors from 'src/config/axiosInterceptor';
import './locales/i18n';
import './content/styles/globalStyle.scss';
import 'dayjs/locale/vi';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';

const theme = createTheme({
  colors: {
    blue: ['#E6E6F8', '#D1D1F1', '#BCBCEA', '#A7A7E3', '#9292DC', '#7D7DD5', '#2A2A86', '#5353C7', '#3E3EC0', '#6868CE'],
  },
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  },
});

const store = configureAppStore();

const persistor = persistStore(store);

setupAxiosInterceptors(() => {
  // TODO: onUnauthenticated
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <Router>
            <MantineProvider theme={theme}>
              <DatesProvider settings={{ locale: 'vi' }}>
                <App />
              </DatesProvider>
            </MantineProvider>
          </Router>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
