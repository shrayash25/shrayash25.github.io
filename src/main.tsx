import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import './index.css'
import { LoaderProvider } from './components/LoaderContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <LoaderProvider>
    <App />
  </LoaderProvider>
</React.StrictMode>
)
