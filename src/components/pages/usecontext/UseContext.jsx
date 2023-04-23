import Header from '../../Header';
import Main from '../../Main';
import Footer from '../../Footer';
import BackToHomeButton from '../../BackToHomeButton';
import { createContext, useState } from 'react';
import ToggleThemeButton from './ToggleThemeButton';
import UserForm from './UserForm';
import UserProfile from './UserProfile';

export const ThemeContext = createContext();
export const UserContext = createContext();

export default function UseContext() {
  const [user, setUser] = useState({
    username: 'user',
    password: 'user123'
  });
  const [theme, setTheme] = useState('Light');
  const themeStyles = {
    outerDiv: theme === 'Light' ? 'bg-cyan-200' : 'bg-cyan-900',
    h2: theme === 'Light' ? 'text-black' : 'text-white',
    currentTheme: theme === 'Light' ? 'text-black' : 'text-white',
    toggleTheme:
      theme === 'Light'
        ? 'bg-gray-200 hover:bg-gray-100'
        : 'bg-gray-400 text-white hover:bg-gray-500',
    hr: theme === 'Light' ? 'border-black' : 'border-white'
  };

  function toggleTheme() {
    setTheme(theme === 'Light' ? 'Dark' : 'Light');
  }

  return (
    <ThemeContext.Provider value={themeStyles}>
      <div className={`${themeStyles.outerDiv}`}>
        <Header page="useContext" />
        <Main>
          <h2 className={`${themeStyles.h2} font-bold`}>
            Light and Dark Theme with useContext()
          </h2>

          <p className={`${themeStyles.currentTheme}`}>
            Current Theme: <strong>{theme}</strong>
          </p>

          <ToggleThemeButton onclick={toggleTheme} />

          <hr className={`${themeStyles.hr} my-2`} />

          <h2 className={`${themeStyles.h2} font-bold`}>User Context</h2>

          <UserContext.Provider value={user}>
            <UserForm setUser={setUser} />

            <UserProfile />
          </UserContext.Provider>

          <BackToHomeButton />
        </Main>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}
