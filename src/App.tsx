import React from 'react';
import logo from './logo.svg';
import './App.css';
import './i18n';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

function App() {
  const { t } = useTranslation();
  const toggle = () => {
    i18n.changeLanguage('en')
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {t('name')}

        <button onClick={toggle}>切换语言</button>
      </header>
    </div>
  );
}

export default App;
