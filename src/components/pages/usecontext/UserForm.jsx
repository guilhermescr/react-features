import { useContext, useRef } from 'react';
import { ThemeContext } from './UseContext';

export default function UserForm({ setUser }) {
  const themeData = useContext(ThemeContext);
  const usernameInput = useRef();
  const passwordInput = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    const username = usernameInput.current.value;
    const password = passwordInput.current.value;

    if (username.length && password.length) {
      setUser({ username, password });
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 justify-center mb-2"
    >
      <div className="flex items-center gap-2">
        <label className={`${themeData.h2}`} htmlFor="username">
          Username:
        </label>
        <input
          type="text"
          id="username"
          ref={usernameInput}
          placeholder="Insert a username..."
          autoComplete="off"
        />
      </div>

      <div className="flex items-center gap-2">
        <label className={`${themeData.h2}`} htmlFor="password">
          Password:
        </label>
        <input
          type="password"
          id="password"
          ref={passwordInput}
          placeholder="Insert a password..."
        />
      </div>

      <button className={`${themeData.toggleTheme} rounded-md p-2 max-w-xs`}>
        Save Data
      </button>
    </form>
  );
}
