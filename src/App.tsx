import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css'
import {toggleLanguage} from './i18n';
import { useTranslation } from 'react-i18next';
import { Select } from 'antd';
import Test from './Test';

const { Option } = Select;

function App() {
  const currentLanguage = localStorage.getItem('language');
  const { t } = useTranslation();
  const handleChange = (value:string) => {
    toggleLanguage(value)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {t('name')}
        <Test/>
        <Select defaultValue={currentLanguage} style={{ width: 120 }} onChange={handleChange}>
          <Option value="en">English</Option>
          <Option value="zh">Chinese</Option>
          <Option value="default">
            Default
          </Option>
        </Select>
      </header>
    </div>
  );
}

export default App;
