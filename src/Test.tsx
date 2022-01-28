import React from 'react';
import 'antd/dist/antd.css'
import { useTranslation } from 'react-i18next';


function App() {
  const { t } = useTranslation();
  return (
    <div>
      {t('age')}
    </div>
  );
}

export default App;
