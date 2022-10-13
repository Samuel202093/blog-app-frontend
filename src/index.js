import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import { AppContextProvider } from './context/context';
import {Formik } from './context/formContext';
import { AuthProvider } from './context/AuthContext';
import {DashNavProvider} from './context/DashNavContext'
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <AppContextProvider>
      <Formik>
        <AuthProvider>
          <DashNavProvider>
            <QueryClientProvider client={queryClient}>
            <React.StrictMode>
              <App />
             </React.StrictMode>
             <ReactQueryDevtools initialIsOpen={false}/>
             </QueryClientProvider>
          </DashNavProvider>
        </AuthProvider>
      </Formik>
    </AppContextProvider>
  </BrowserRouter>
);

