import './App.css';
import Router from './routes';
import { useState } from 'react';
import ThemeConfig from './theme';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  function swapDarkMode() {
    setDarkMode(!darkMode);
  }

  return (
    <ThemeConfig darkMode={darkMode}>
      <Router changeDark={swapDarkMode} />
    </ThemeConfig>
  )
}

export default App;
