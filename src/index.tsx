import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './styles.css';
import { Provider } from 'react-redux';
import { store } from './store/personal-info/personalInfoStore';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
