import { useContext } from 'react';
import { ThemeContext, UserContext } from './UseContext';

export default function UserProfile() {
  const { h2 } = useContext(ThemeContext);
  const { username, password } = useContext(UserContext);

  return (
    <section>
      <h3 className={`${h2}`}>Profile</h3>
      <p className={`${h2}`}>User: {username}</p>
      <p className={`${h2}`}>Password: {password}</p>
    </section>
  );
}
