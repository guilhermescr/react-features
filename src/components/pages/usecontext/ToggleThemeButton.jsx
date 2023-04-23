import { useContext } from 'react';
import { ThemeContext } from './UseContext';

export default function ToggleThemeButton({ onclick }) {
  const themeData = useContext(ThemeContext);

  return (
    <button
      className={`${themeData.toggleTheme} rounded-md p-2 active:opacity-90`}
      type="button"
      onClick={onclick}
    >
      Toggle Theme
    </button>
  );
}
