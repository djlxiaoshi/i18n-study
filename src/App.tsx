import React from 'react';
import logo from './logo.svg';
import './App.css';
import './i18n';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

function App() {
  const { t } = useTranslation();
  const toggle = () => {
    const currentLan = localStorage.getItem('language');
    const toggleLan = currentLan === 'en' ? 'zh' : 'en';
    i18n.changeLanguage(toggleLan)
    localStorage.setItem('language', toggleLan);
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
