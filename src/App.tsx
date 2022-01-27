import React from 'react';
import logo from './logo.svg';
import './App.css';
import i18nInit, {toggleLanguage} from './i18n';
import { useTranslation } from 'react-i18next';

i18nInit();

function App() {
  const { t } = useTranslation();
  const toggle = () => {
    toggleLanguage()
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
