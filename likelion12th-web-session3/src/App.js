import React, {useState} from 'react';
import Header from './components/Header';
import Mylife from './components/Mylife';
import Languages from './components/Languages';
import Link from './components/Link';
import Login from './components/Login';
import './App.css';

function App() {
  // 다크모드 상태를 관리하는 state
  const [darkMode, setDarkMode] = useState(false);

  // 로그인 상태를 관리하는 state
  const [isLogined, setIsLogined] = useState(false);

  //로그인 성공 시 실행될 콜백 함수
  const handleLoginSuccess = () => {
    setIsLogined(true);
  };

  // 다크모드 토글 함수
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // 다크모드 상태가 변경될 때 body 요소에 dark 클래스를 추가 또는 제거
    document.body.classList.toggle('dark', !darkMode);
  };

  return (
    <div className={`App ${isLogined ? "dark" : ""}`}>
      {!isLogined ? (
          <Login onLoginSuccess={handleLoginSuccess} />
        ) : (
          <div>
            <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <Mylife darkMode={darkMode} />
            <Languages darkMode={darkMode} />
            <Link darkMode={darkMode} />
          </div>
        )
      }
    </div>
  );
}

export default App;