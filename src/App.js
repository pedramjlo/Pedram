import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './i18n';




import Home from './components/home';

function App() {

  const { i18n } = useTranslation();


  useEffect(() => {
    const currentLang = i18n.language || 'fa';
    document.body.style.direction = currentLang === 'fa' ? 'rtl' : 'ltr';
  }, [i18n.language]);


  return (

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;
